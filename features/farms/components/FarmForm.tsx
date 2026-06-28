"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

  async function onSubmit(data: FarmFormData) {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    await createFarm(formData);

    form.reset();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Farm Name</Label>
          <Input {...form.register("farm_name")} />
        </div>

        <div className="space-y-2">
          <Label>Location</Label>
          <Input {...form.register("location")} />
        </div>

        <div className="space-y-2">
          <Label>Area</Label>
          <Input
            type="number"
            {...form.register("area", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div className="space-y-2">
          <Label>Area Unit</Label>

          <Select
            defaultValue="acre"
            onValueChange={(value) =>
              form.setValue("area_unit", value as FarmFormData["area_unit"])
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
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
        </div>

        <div className="space-y-2">
          <Label>Soil Type</Label>

          <Select
            defaultValue="Loamy"
            onValueChange={(value) =>
              form.setValue("soil_type", value as FarmFormData["soil_type"])
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
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
        </div>

        <div className="space-y-2">
          <Label>Irrigation Type</Label>

          <Select
            defaultValue="Drip"
            onValueChange={(value) =>
              form.setValue(
                "irrigation_type",
                value as FarmFormData["irrigation_type"]
              )
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue />
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
        </div>
      </div>

      <div className="space-y-2">
        <Label>Notes</Label>
        <Textarea {...form.register("notes")} />
      </div>

      <Button type="submit">
        Save Farm
      </Button>
    </form>
  );
}