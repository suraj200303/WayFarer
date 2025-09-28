import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        imageUrl: v.string(),
        email: v.string(),
    },
    handler: async (ctx, args) => {
        // If user already exit ?
        const user = await ctx.db.query('UserTable')
        .filter((q) => q.eq(q.field('email'), args.email))
        .collect();

        if(user?.length === 0) {

            const userData = {
                name: args.name,
                email: args.email,
                imageUrl: args.imageUrl,
            }
            // Create new user
            const newUser = await ctx.db.insert('UserTable', userData);
            return newUser;
        }
        return user[0];
    }
});