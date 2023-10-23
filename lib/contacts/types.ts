declare type CustomField = {
  name?: string;
  value?: string;
};

declare type Tags = {
  color?: string;
  background?: string;
  name?: string;
};

export declare type Contact = {
  contact_id?: string;
  org_id: number;
  user_id?: number;
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  company?: string;
  followup?: Date;
  source?: string;
  notes?: string;
  hotness?: number;
  tags: Array<Tags>;
  custom_fields?: CustomField[];
  do_not_contact?: boolean;
};
