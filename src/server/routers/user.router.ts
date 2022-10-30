import {publicProcedure, router} from "../trpc";
import {z} from "zod";
import client from "../../utils/prisma";

export const userRouter = router({
  all: publicProcedure
    .query(async () => await client.user.findMany()),
  by_id: publicProcedure
    .input(
      z.object({
        id: z.number()
      })
    )
    .query(async ({input}) => {
      return await client.user.findUnique({
        where: {
          id: input.id
        }
      })
    }),
  add: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        image: z.string().nullish()
      })
    )
    .mutation(async ({input}) => {
      return await client.user.create({
        data: {
          name: input.name,
          email: input.email,
          image: input.image
        }
      })
    })
})