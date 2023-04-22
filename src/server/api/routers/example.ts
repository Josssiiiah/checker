import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const exampleRouter = createTRPCRouter({
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
      const allBallots = await prisma.ballot.findMany();
      // APROACH 1.0 -> Pull every value in the database, loop through it, if in there do x or do y

      // var success = true;

      // for (let i = 0; i < allBallots.length; i++) {
      //   if (
      //     allBallots.length > 0 &&
      //     allBallots[i]?.a === input.a &&
      //     allBallots[i]?.b === input.b &&
      //     allBallots[i]?.c === input.c &&
      //     allBallots[i]?.d === input.d
      //   ) {
      //     success = false;
      //     return {
      //       success: success,
      //       message: "Ballot already exists!",
      //       ballots: allBallots,
      //       input: input,
      //     };
      //   }

      // APPROACH 2.0 -> Use the prisma query to check if the ballot exists
      const ballotExists = await prisma.ballot.findFirst({
        where: {
          a: input.a,
          b: input.b,
          c: input.c,
          d: input.d,
        },
      });

      if (ballotExists) {
        return {
          success: false,
          message: "Ballot already exists!",
        };
      } else {
        const ballotPosted = await prisma.ballot.create({
          data: {
            ...input,
          },
        });
        return {
          success: true,
          message: "Ballot Posted!",
          ballots: allBallots,
          input: input,
        };
      }
    }),
});
