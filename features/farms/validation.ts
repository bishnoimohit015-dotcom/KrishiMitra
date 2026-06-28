import { z } from "zod";

import {
  AREA_UNITS,
  IRRIGATION_TYPES,
  SOIL_TYPES,
} from "./constants";

export const farmSchema = z.object({
  farm_name: z
    .string()
    .trim()
    .min(3, "Farm name must be at least 3 characters.")
    .max(100, "Farm name cannot exceed 100 characters."),

  area: z
    .number({
      error: "Area is required.",
    })
    .positive("Area must be greater than zero."),

  area_unit: z.enum(AREA_UNITS),

  location: z
    .string()
    .trim()
    .min(3, "Location is required.")
    .max(200),

  soil_type: z.enum(SOIL_TYPES),

  irrigation_type: z.enum(IRRIGATION_TYPES),

  notes: z
    .string()
    .trim()
    .max(500, "Notes cannot exceed 500 characters.")
    .optional(),
});

export type FarmFormData = z.infer<typeof farmSchema>;