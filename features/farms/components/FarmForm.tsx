"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { createFarm } from "../actions/createFarm";
import {
  AREA_UNITS,
  IRRIGATION_TYPES,
  SOIL_TYPES,
} from "../constants";
import {
  farmSchema,
  type FarmFormData,
} from "../validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function FarmForm() {
  const form = useForm<FarmFormData>({
    resolver: zodResolver(farmSchema),
    defaultValues: {
      farm_name: "",
      location: "",
      area: 0,
      area_unit: "acre",
      soil_type: "Loamy",
      irrigation_type: "Drip",
      notes: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = form;

  async function onSubmit(data: FarmFormData) {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      await createFarm(formData);

      toast.success("Farm created successfully!");

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to create farm. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="farm_name">
            Farm Name
          </Label>

          <Input
            id="farm_name"
            placeholder="Green Valley Farm"
            autoComplete="off"
            {...register("farm_name")}
          />

          {errors.farm_name && (
            <p className="text-sm text-red-500">
              {errors.farm_name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">
            Location
          </Label>

          <Input
            id="location"
            placeholder="Village, District"
            autoComplete="off"
            {...register("location")}
          />

          {errors.location && (
            <p className="text-sm text-red-500">
              {errors.location.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="area">
            Area
          </Label>

          <Input
            id="area"
            type="number"
            min="0"
            step="0.01"
            placeholder="2.5"
            {...register("area", {
              valueAsNumber: true,
            })}
          />

          {errors.area && (
            <p className="text-sm text-red-500">
              {errors.area.message}
            </p>
          )}
        </div>
                <div className="space-y-2">
          <Label htmlFor="area_unit">
            Area Unit
          </Label>

          <Select
            value={watch("area_unit")}
            onValueChange={(value) =>
              setValue(
                "area_unit",
                value as FarmFormData["area_unit"],
                {
                  shouldValidate: true,
                }
              )
            }
          >
            <SelectTrigger
              id="area_unit"
              className="w-full"
            >
              <SelectValue placeholder="Select area unit" />
            </SelectTrigger>

            <SelectContent>
              {AREA_UNITS.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.area_unit && (
            <p className="text-sm text-red-500">
              {errors.area_unit.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="soil_type">
            Soil Type
          </Label>

          <Select
            value={watch("soil_type")}
            onValueChange={(value) =>
              setValue(
                "soil_type",
                value as FarmFormData["soil_type"],
                {
                  shouldValidate: true,
                }
              )
            }
          >
            <SelectTrigger
              id="soil_type"
              className="w-full"
            >
              <SelectValue placeholder="Select soil type" />
            </SelectTrigger>

            <SelectContent>
              {SOIL_TYPES.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.soil_type && (
            <p className="text-sm text-red-500">
              {errors.soil_type.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="irrigation_type">
            Irrigation Type
          </Label>

          <Select
            value={watch("irrigation_type")}
            onValueChange={(value) =>
              setValue(
                "irrigation_type",
                value as FarmFormData["irrigation_type"],
                {
                  shouldValidate: true,
                }
              )
            }
          >
            <SelectTrigger
              id="irrigation_type"
              className="w-full"
            >
              <SelectValue placeholder="Select irrigation type" />
            </SelectTrigger>

            <SelectContent>
              {IRRIGATION_TYPES.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.irrigation_type && (
            <p className="text-sm text-red-500">
              {errors.irrigation_type.message}
            </p>
          )}
        </div>
      </div>
            <div className="space-y-2">
        <Label htmlFor="notes">
          Notes
        </Label>

        <Textarea
          id="notes"
          placeholder="Add any additional information about this farm..."
          rows={5}
          {...register("notes")}
        />

        {errors.notes && (
          <p className="text-sm text-red-500">
            {errors.notes.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-36"
        >
          {isSubmitting ? "Saving Farm..." : "Save Farm"}
        </Button>
      </div>
    </form>
  );
}