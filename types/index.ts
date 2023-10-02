import { urlSchema } from "@/schemas";
import { z } from 'zod';

export type UrlSchemaType = z.infer<typeof urlSchema>