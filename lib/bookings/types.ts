import { Invitee } from "../invitees/types";

declare type Resource = {
    resource_id: string;
    name?: string;
    type?: string;
    event_type?: string;
    slug?: string;
    description?: string;
}

declare type Host = {
    user_id: number;
    name?: string;
    email?: string;
    avatar?: string;
    time_zone?: string;
    phone?: string;
    location?: Location;
}

declare type Reschedule = {
    rescheduled_from?: Date;
    rescheduled_by?: string;
    reschedule_reason?: string;
    rescheduled_at?: Date;
}

declare type Attendee = {
    name?: string;
    email: string;
    status?: string;
    organizer?: boolean;
}

export declare type Booking = {
    booking_id?: string;
    org_id?: number;
    source?: string;
    resource: Resource;
    host: Host;
    subject?: string;
    description?: string;
    start_at: Date;
    end_at?: Date;
    duration?: any;
    time_zone?: string;
    status?: string;
    color?: string;
    internal_note?: string;
    location: any;
    canceled_at?: Date;
    cancel_reason?: string;
    reschedule?: Reschedule;
    attendes?: Attendee[];
    busy?: string;
    recurrence?: Array<string>;
    invitees: Invitee[];
}  
