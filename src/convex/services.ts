import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("services")
      .withIndex("by_order")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const service = await ctx.db
      .query("services")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    
    if (!service) {
      return null;
    }
    
    return service;
  },
});

export const updateDescriptions = mutation({
  args: {},
  handler: async (ctx) => {
    try {
      // Updated service descriptions
      const serviceUpdates: Record<string, { description: string; fullDescription: string; capabilities: string[] }> = {
        "super-heavy-transport": {
          description: "Specialized road and terrain transport service for extremely large and heavy cargo requiring detailed planning and engineering.",
          fullDescription: "The transportation of oversized cargo through roads and rough terrain is one of the biggest challenges for heavy industry players. Asia Infinity Solutions provides a complete one-stop solution for moving super heavy and oversized equipment, including detailed methodology planning and route study assessments. This ensures safe movement, proper maneuvering, and compliance across all stages of transport.",
          capabilities: [
            "Detailed methodology planning and route study assessments",
            "Safe movement and proper maneuvering",
            "Compliance across all stages of transport",
            "Specialized road and terrain transport",
            "Complete one-stop solution for super heavy equipment"
          ]
        },
        "oversized-air-cargo": {
          description: "Air transport service for cargo with abnormal dimensions requiring high-level handling and safety procedures.",
          fullDescription: "Oversized air cargo requires more than standard air freight procedures. Abnormal length, width, or height can create hazards during transport, which makes experienced handling essential. The service includes expert ground handling, customs clearance, pallet buildup, loading operations, and safe delivery at the destination—all supported by detailed proposals and operational plans to ensure zero compromise in safety and efficiency.",
          capabilities: [
            "Expert ground handling for abnormal dimensions",
            "Customs clearance coordination",
            "Pallet buildup and loading operations",
            "Safe delivery at destination",
            "Detailed proposals and operational plans"
          ]
        },
        "heavy-lift-crane-hire": {
          description: "Rental of cranes and specialized lifting equipment for positioning extremely heavy or oversized cargo.",
          fullDescription: "Oversized cargo transportation often requires precise lifting for placement onto heavy vehicles. This service includes cranes, lifting tools, and supportive equipment such as spreader bars, custom metal platforms, and other heavy-duty lifting accessories. In many cases, cargo may arrive in open-top containers requiring special unstuffing procedures. Skilled supervisors and labor teams ensure smooth, safe handling throughout the lifting process.",
          capabilities: [
            "Cranes and lifting tools for heavy cargo",
            "Spreader bars and custom metal platforms",
            "Heavy-duty lifting accessories",
            "Special unstuffing procedures for open-top containers",
            "Skilled supervisors and labor teams"
          ]
        },
        "oversized-marine-cargo": {
          description: "Marine transport service for abnormal-size cargo via vessels, barges, or ro-ro ships.",
          fullDescription: "Oversized marine cargo handling requires detailed route studies to transport items from the client's location to the port. Depending on the cargo specifications, additional heavy transport vehicles, barges, roll-on/roll-off vessels, or conventional ships may be used. Every stage is carefully planned to ensure smooth and secure delivery over water.",
          capabilities: [
            "Detailed route studies from client location to port",
            "Heavy transport vehicles for oversized cargo",
            "Barges and roll-on/roll-off vessels",
            "Conventional ships for marine transport",
            "Carefully planned stages for secure delivery"
          ]
        },
        "warehouse-open-yard-facilities": {
          description: "Secure storage solutions for oversized cargo in specialized warehouses or spacious open yard facilities.",
          fullDescription: "Some oversized cargo requires temporary storage upon arrival at its destination. Standard warehouses may not be able to accommodate abnormal cargo dimensions, so specialized facilities are chosen instead. These warehouses and open yards provide suitable height, width, and working space to safely place the cargo and allow engineers, riggers, and workers to operate efficiently around it.",
          capabilities: [
            "Specialized facilities for abnormal cargo dimensions",
            "Suitable height, width, and working space",
            "Safe placement of oversized cargo",
            "Space for engineers, riggers, and workers",
            "Temporary storage upon arrival at destination"
          ]
        },
        "customs-clearance-oga-permit": {
          description: "Handling of all customs approvals and government permits for oversized, hazardous, or sensitive cargo.",
          fullDescription: "Transporting oversized cargo involves more than physical movement—the necessary customs clearance and government permits must be secured beforehand. Asia Infinity Solutions provides consultancy and full support for customs documentation, compliance checks, and applications for relevant government agency permits. This ensures clients experience a smooth, worry-free process throughout the shipment journey.",
          capabilities: [
            "Customs documentation and clearance",
            "Government agency permit applications",
            "Compliance checks and consultancy",
            "Full support for oversized, hazardous, or sensitive cargo",
            "Smooth, worry-free shipment journey"
          ]
        }
      };

      let updatedCount = 0;
      const allServices = await ctx.db.query("services").collect();

      for (const service of allServices) {
        const update = serviceUpdates[service.slug];
        if (update) {
          await ctx.db.patch(service._id, {
            description: update.description,
            fullDescription: update.fullDescription,
            capabilities: update.capabilities,
          });
          updatedCount++;
        }
      }

      return { 
        success: true, 
        updatedCount, 
        message: `Successfully updated ${updatedCount} service(s)` 
      };
    } catch (error) {
      console.error("Error updating service descriptions:", error);
      return {
        success: false,
        updatedCount: 0,
        message: `Failed to update: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  },
});