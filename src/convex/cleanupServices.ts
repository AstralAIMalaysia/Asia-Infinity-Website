import { mutation } from "./_generated/server";

export const removeDuplicates = mutation({
  args: {},
  handler: async (ctx) => {
    const allServices = await ctx.db.query("services").collect();
    
    // Group by slug
    const servicesBySlug = new Map<string, Array<typeof allServices[0]>>();
    
    for (const service of allServices) {
      const existing = servicesBySlug.get(service.slug) || [];
      existing.push(service);
      servicesBySlug.set(service.slug, existing);
    }
    
    // Keep only the oldest service for each slug (first created)
    let deletedCount = 0;
    for (const [slug, services] of servicesBySlug) {
      if (services.length > 1) {
        // Sort by creation time and keep the first one
        services.sort((a, b) => a._creationTime - b._creationTime);
        
        // Delete all but the first
        for (let i = 1; i < services.length; i++) {
          await ctx.db.delete(services[i]._id);
          deletedCount++;
        }
      }
    }
    
    return { success: true, deletedCount, message: `Removed ${deletedCount} duplicate services` };
  },
});
