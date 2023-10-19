declare type Redirect = {
    url?: string;
}

declare type Link = {
    url?: string;
    text?: string;
}

declare type Confirmation = {
    type?: string;
    link: Link;
    redirect: Redirect;
    message?: string;
}

declare type Guest = {
    is_allowed?: boolean;
    max_allowed?: number;
    is_chargeable?: boolean;
}

declare type Privacy = {
    type: string;
    passcode?: string;
}

declare type Terms = {
    type: string;
    value: number;
  }
  

declare type PolicyForm = {
    is_enabled: boolean;
    description: string;
    terms: Terms;
  }

declare type Policy = {
    reschedule: PolicyForm;
    cancellation: PolicyForm;
  }

declare type ResourceSettings = {
    confirmation?: Confirmation;
    guest?: Guest;
    attendees?: Array<string>;
    privacy?: Privacy;
    policy?: Policy;
    require_approval?: boolean;
    prevent_duplicates?: boolean;
    email_to_invitee?: boolean;
    email_to_host?: boolean;
    date_format?: string;
    time_format?: string;
    is_timezone_locked?: boolean;
    hide_timezone?: boolean;
    hide_language?: boolean;
    skip_form?: boolean;
}

// export declare type ResourceType  = event | service | webinar

export declare type Resource = {
    resource_id?: string;
    org_id?: number;
    page_id?: number;
    user_id?: number;
    name: string;
    slug?: string;
    type: string;
    schedule_id: number;
    language?: string;
    description?: string;
    locations: Array<Location>;
    questions: Array<any>;
    settings?: ResourceSettings;
    gallery?: Array<string>;
    internal_note?: string;
    is_enabled?: boolean;
    booking_url?: string;
    rank?: number;
    is_template?: boolean;
    thumbnail?: string;
}