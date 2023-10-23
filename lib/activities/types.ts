declare type File = {
  name: string;
  size: number;
  type: string;
  path?: string;
  url?: string;
};

export declare type Activity = {
  activity_id?: string;
  org_id?: number;
  user?: Record<string, any>;
  contact_id: string;
  type: string;
  title?: string;
  description?: string;
  file?: File;
  date?: Date;
  status?: string;
};
