"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateFarm } from "../actions/updateFarm";
import type { Farm } from "../types";
import FarmForm from "./FarmForm";

type EditFarmFormProps = {
  farm: Farm;
};

export default function EditFarmForm({
  farm,
}: EditFarmFormProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(formData: FormData) {
    try {
      setIsSaving(true);

      await updateFarm(farm.id, formData);

      toast.success("Farm updated successfully.");

      router.push("/dashboard/farms");
      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Failed to update farm.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <FarmForm
      mode="edit"
      initialData={farm}
      isSaving={isSaving}
      onSubmit={handleSubmit}
    />
  );
}