export interface User {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  avatar_url?: string;
  farm_name?: string;
  location?: string;
  land_area?: number;
  soil_type?: string;
  created_at: string;
  updated_at: string;
}

export interface Farm {
  id: string;
  user_id: string;
  name: string;
  location: string;
  land_area: number;
  soil_type: string;
  crops: Crop[];
  created_at: string;
  updated_at: string;
}

export interface Crop {
  id: string;
  farm_id: string;
  name: string;
  variety?: string;
  planting_date?: string;
  expected_harvest?: string;
  health_score?: number;
  status: "planted" | "growing" | "harvested";
  created_at: string;
  updated_at: string;
}

export interface Expense {
  id: string;
  user_id: string;
  category: ExpenseCategory;
  amount: number;
  description: string;
  date: string;
  receipt_url?: string;
  created_at: string;
}

export type ExpenseCategory =
  | "seeds"
  | "fertilizers"
  | "pesticides"
  | "labor"
  | "equipment"
  | "irrigation"
  | "transport"
  | "other";

export interface WeatherData {
  location: string;
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    condition: string;
    uv_index: number;
  };
  forecast: WeatherForecast[];
  soil_conditions: {
    moisture: number;
    temperature: number;
    ph_level: number;
  };
}

export interface WeatherForecast {
  date: string;
  temp_max: number;
  temp_min: number;
  condition: string;
  precipitation: number;
  humidity: number;
  wind_speed: number;
}

export interface DiseaseDetection {
  id: string;
  user_id: string;
  crop_id?: string;
  image_url: string;
  disease_name?: string;
  confidence_score?: number;
  severity?: "low" | "medium" | "high";
  treatment?: string;
  detected_at: string;
}

export interface Alert {
  id: string;
  user_id: string;
  type: AlertType;
  title: string;
  message: string;
  priority: "low" | "medium" | "high";
  read: boolean;
  created_at: string;
}

export type AlertType = "weather" | "disease" | "expense" | "info" | "system";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}
