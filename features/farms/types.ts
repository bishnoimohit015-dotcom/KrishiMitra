export interface Farm {
  id: string;
  farmer_id: string;

  farm_name: string;

  area: number | null;
  area_unit: string;

  location: string | null;

  soil_type: string | null;
  irrigation_type: string | null;
  notes: string | null;

  created_at: string;
  updated_at: string;
}

export interface CreateFarmInput {
  farm_name: string;

  area: number;
  area_unit: string;

  location: string;

  soil_type: string;
  irrigation_type: string;
  notes: string;
}

export interface UpdateFarmInput extends CreateFarmInput {
  id: string;
}