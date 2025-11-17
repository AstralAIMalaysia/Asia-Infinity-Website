import { motion, useMotionValue, useSpring, useMotionValueEvent } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const stickyContainer = useRef<HTMLDivElement>(null);
	
	// Manual scroll progress (0 to 1) - only updates on wheel scroll in gallery
	const scrollProgress = useMotionValue(0);
	const smoothProgress = useSpring(scrollProgress, { stiffness: 100, damping: 30 });

	// Track transform origin for each image (as percentage strings)
	const [transformOrigins, setTransformOrigins] = useState<Array<string>>(
		images.map(() => '50% 50%') // Default to center
	);

	// Track if mouse is inside gallery section
	const [isMouseInGallery, setIsMouseInGallery] = useState(false);

	// Create refs for image containers and motion divs
	const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
	const motionDivRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Scale values for each image - unified zoom with different speeds
	const scaleValues = images.map(() => useMotionValue(1));
	
	// Different max zoom values for each image (original design)
	const maxZooms = [4, 5, 6, 5, 6, 8, 9].slice(0, images.length);

	// Update scale values based on manual scroll progress - all zoom together
	useEffect(() => {
		const unsubscribe = smoothProgress.on('change', (latest) => {
			scaleValues.forEach((scaleValue, index) => {
				const maxZoom = maxZooms[index] || 4;
				// All images zoom together from 1 to their max zoom
				const zoom = 1 + (latest * (maxZoom - 1));
				scaleValue.set(zoom);
			});
		});
		return () => unsubscribe();
	}, [smoothProgress, scaleValues, maxZooms]);

	// Track current scroll progress value using ref
	const currentProgressRef = useRef(0);
	
	useMotionValueEvent(scrollProgress, 'change', (latest) => {
		currentProgressRef.current = latest;
	});

	// Reset zoom when section is out of view
	useEffect(() => {
		const handleScroll = () => {
			if (!container.current) return;
			
			const rect = container.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			
			// If section is completely out of view (above or below viewport)
			if (rect.bottom < 0 || rect.top > windowHeight) {
				// Reset zoom progress
				scrollProgress.set(0);
				currentProgressRef.current = 0;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollProgress]);

	// Handle mouse wheel events - only zoom when wheel scrolling in gallery
	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			if (!stickyContainer.current || !container.current) return;

			const containerRect = stickyContainer.current.getBoundingClientRect();
			const isInside = (
				e.clientX >= containerRect.left &&
				e.clientX <= containerRect.right &&
				e.clientY >= containerRect.top &&
				e.clientY <= containerRect.bottom
			);

			if (isInside) {
				// Check if we've completed zoom
				if (currentProgressRef.current >= 1) {
					// Allow normal scrolling after zoom is complete
					return;
				}
				
				// Prevent default scroll behavior only during zoom
				e.preventDefault();
				
				// Update scroll progress based on wheel delta
				const delta = e.deltaY;
				const scrollSpeed = 0.0005; // Adjust this to control scroll sensitivity (lower = more scrolling needed)
				
				const newProgress = Math.max(0, Math.min(1, currentProgressRef.current + (delta * scrollSpeed)));
				scrollProgress.set(newProgress);
			} else {
				// If mouse leaves gallery while zoomed, reset smoothly
				if (currentProgressRef.current > 0) {
					scrollProgress.set(0);
					currentProgressRef.current = 0;
				}
			}
		};

		// Add wheel event listener with passive: false to allow preventDefault
		window.addEventListener('wheel', handleWheel, { passive: false });
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [scrollProgress]);

	// Update transform origins when mouse moves (only if inside gallery)
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			// Check if mouse is within the gallery container
			if (stickyContainer.current) {
				const containerRect = stickyContainer.current.getBoundingClientRect();
				const isInside = (
					e.clientX >= containerRect.left &&
					e.clientX <= containerRect.right &&
					e.clientY >= containerRect.top &&
					e.clientY <= containerRect.bottom
				);
				
				setIsMouseInGallery(isInside);
				
				// Only update transform origins if mouse is inside gallery
				if (!isInside) {
					// Reset all to center when mouse leaves gallery
					setTransformOrigins(images.map(() => '50% 50%'));
					return;
				}
			}

			// Update transform origins for images under cursor
			motionDivRefs.current.forEach((motionDiv, index) => {
				if (!motionDiv) return;
				
				const imageContainer = imageRefs.current[index];
				if (!imageContainer) return;
				
				const imageRect = imageContainer.getBoundingClientRect();
				const motionDivRect = motionDiv.getBoundingClientRect();
				
				// Check if mouse is over the image
				if (
					e.clientX >= imageRect.left &&
					e.clientX <= imageRect.right &&
					e.clientY >= imageRect.top &&
					e.clientY <= imageRect.bottom
				) {
					// Calculate mouse position relative to motion.div
					const x = ((e.clientX - motionDivRect.left) / motionDivRect.width) * 100;
					const y = ((e.clientY - motionDivRect.top) / motionDivRect.height) * 100;
					
					setTransformOrigins(prev => {
						const newOrigins = [...prev];
						newOrigins[index] = `${x}% ${y}%`;
						return newOrigins;
					});
				}
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [images.length]);

	return (
		<div ref={container} className="relative h-[120vh]">
			<div className="max-w-7xl mx-auto">
				<div ref={stickyContainer} className="sticky top-0 h-screen overflow-hidden w-full">
				{images.map(({ src, alt }, index) => {
					const scale = scaleValues[index % scaleValues.length];

					const handleMouseLeave = () => {
						// Reset to center when mouse leaves
						setTransformOrigins(prev => {
							const newOrigins = [...prev];
							newOrigins[index] = '50% 50%';
							return newOrigins;
						});
					};

					return (
						<motion.div
							key={index}
							ref={(el) => { motionDivRefs.current[index] = el; }}
							style={{ 
								scale,
								transformOrigin: transformOrigins[index]
							}}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div 
								ref={(el) => { imageRefs.current[index] = el; }}
								className="relative h-[25vh] w-[25vw] cursor-crosshair"
								onMouseLeave={handleMouseLeave}
							>
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover pointer-events-none"
								/>
							</div>
						</motion.div>
					);
				})}
				</div>
			</div>
		</div>
	);
}

