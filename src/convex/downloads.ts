import { query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("downloadableAssets")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();
  },
});
