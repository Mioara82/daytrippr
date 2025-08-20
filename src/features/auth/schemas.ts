import {z} from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),                   
  owner_id: z.string(),                      
  username: z.string().min(3).max(30),
  email: z.string().email(),
  avatar_url: z.string().url().nullable().optional(),
  created_at: z.string().datetime(),        
});

export type User = z.infer<typeof userSchema>;

export const userCreateSchema = userSchema.omit({
  id: true,
  created_at: true,
});

export type UserCreate = z.infer<typeof userCreateSchema>;