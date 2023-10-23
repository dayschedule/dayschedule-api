declare type Question = {
    type: string;
    name: string;
    label: string;
    value: string;
    required?: boolean;
    placeholder?: string;
    pattern?: string;
    options?: any[];
}

declare type ServiceOption = {
    category?: string;
    name?: string;
    description?: string;
    duration?: any;
    price?: any;
}

declare type Payment = {
    amount?: number;
    name?: string;
    currency?: string;
    gateway?: string;
    reference_id?: string;
    link?: string;
    data?: any;
}

export declare type Invitee = {
    invitee_id?: string;
    booking_id?: string;
    org_id?: number;
    name: string;
    email: string;
    phone?: string;
    guest?: Array<string>;
    status?: string;
    cancceled_at?: Date;
    reason?: string;
    time_zone?: string;
    token?: string;
    questions?: Question[];
    payment?: Payment;
    services?: ServiceOption[];
    check_in?: Record<string, any>;
    custom_fields?: Record<string, any>;
    tracking?: Record<string, any>;
    utm?: Record<string, any>;
    uuid?: string;
}