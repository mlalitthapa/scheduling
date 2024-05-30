export interface AvailableSlot {
  day_of_week: string;
  available_at: string;
  available_until: string;
}

export interface Availability extends AvailableSlot {
  name: string;
  timezone: string;
}

export interface Coach {
  name: string;
  timezone: string;
  availabilities: AvailableSlot[];
}