import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    services: defineTable({
      title: v.string(),
      slug: v.string(),
      description: v.string(),
      fullDescription: v.string(),
      imageUrl: v.string(),
      galleryImages: v.array(v.string()),
      capabilities: v.array(v.string()),
      order: v.number(),
      isActive: v.boolean(),
    }).index("by_slug", ["slug"])
      .index("by_order", ["order"]),

    industries: defineTable({
      name: v.string(),
      slug: v.string(),
      description: v.string(),
      imageUrl: v.string(),
      order: v.number(),
      isActive: v.boolean(),
    }).index("by_slug", ["slug"])
      .index("by_order", ["order"]),

    contactSubmissions: defineTable({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      helpType: v.string(),
      message: v.string(),
      status: v.union(v.literal("new"), v.literal("read"), v.literal("responded")),
    }).index("by_status", ["status"]),

    downloadableAssets: defineTable({
      title: v.string(),
      description: v.string(),
      fileUrl: v.string(),
      fileType: v.string(),
      isActive: v.boolean(),
    }),

    siteContent: defineTable({
      key: v.string(),
      content: v.string(),
      section: v.string(),
    }).index("by_key", ["key"])
      .index("by_section", ["section"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;