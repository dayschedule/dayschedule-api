declare type AvailabilityTimes = {
  start?: string;
  end?: string;
};

declare type Availability = {
  is_available?: boolean;
  day?: string;
  times: Array<AvailabilityTimes>;
};

export declare type Schedule = {
  schedule_id?: number;
  org_id?: number;
  user_id?: number;
  name?: string;
  time_zone?: string;
  availability?: Array<Availability>;
  is_default?: number | boolean;
  updated_at?: Date;
  created_at?: Date;
};
