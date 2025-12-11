import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ArrowRight, Construction, Fuel, Building2, Plane, Anchor, Factory, Package } from 'lucide-react'

export function HeroSection() {
    return (
        <>
            <main className="overflow-x-hidden">
                <section className="relative min-h-screen">
                    {/* Video Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover brightness-75 contrast-125"
                        >
                            <source src="/assets/herosection1.mp4" type="video/mp4" />
                            {/* Fallback image if video doesn't load */}
                            Your browser does not support the video tag.
                        </video>
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
                    </div>

                    <div className="relative z-10 pb-24 pt-32 md:pb-32 md:pt-40 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-black md:text-6xl lg:mt-16 xl:text-7xl text-white tracking-tight leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                                    Efficiency On The Move
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-xl md:text-2xl font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                                    Global project logistics and transportation services via sea, land and air.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-8 py-6 text-base font-bold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105">
                                        <Link to="/contact">
                                            <span className="text-nowrap">Get Detailed Quote</span>
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="px-8 py-6 text-base font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/80 hover:bg-white hover:text-black shadow-2xl transition-all hover:scale-105">
                                        <Link to="/services/super-heavy-transport">
                                            <span className="text-nowrap">Our Services</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm font-semibold">Serving Industries</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={96}>
                                    {/* Heavy Machinery */}
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                            <Construction className="h-8 w-8 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-xs font-semibold text-muted-foreground">Heavy Machinery</span>
                                    </div>

                                    {/* Oil & Gas */}
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                            <Fuel className="h-8 w-8 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-xs font-semibold text-muted-foreground">Oil & Gas</span>
                                    </div>

                                    {/* Construction */}
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                            <Building2 className="h-8 w-8 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-xs font-semibold text-muted-foreground">Construction</span>
                                    </div>

                                    {/* Aviation */}
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                            <Plane className="h-8 w-8 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-xs font-semibold text-muted-foreground">Aviation</span>
                                    </div>

                                    {/* Marine */}
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                            <Anchor className="h-8 w-8 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-xs font-semibold text-muted-foreground">Marine</span>
                                    </div>

                                    {/* Manufacturing */}
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                            <Factory className="h-8 w-8 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-xs font-semibold text-muted-foreground">Manufacturing</span>
                                    </div>

                                    {/* Import/Export */}
                                    <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                        <div className="bg-primary/10 p-4 rounded-xl">
                                            <Package className="h-8 w-8 text-primary" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-xs font-semibold text-muted-foreground">Import/Export</span>
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

