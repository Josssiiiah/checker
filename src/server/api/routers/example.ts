import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))

    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),

  postBallot: publicProcedure
    .input(
      z.object({
        // Checks to make sure the object sent from the user to backend is of the right shape
        a: z.boolean(),
        b: z.boolean(),
        c: z.boolean(),
        d: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      const ballotPosted = await prisma.ballot.create({
        data: {
          ...input,
        },
      });
      return { success: true, message: "Ballot Posted!" };
    }),
});
