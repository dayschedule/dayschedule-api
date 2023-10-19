export declare type Page = {
    page_id?: number;
    org_id?: number;
    user_id?: number;
    name: string;
    domain: string;
    is_default?: boolean;
    description?: string;
    logo?: string;
    color?: Record<string, string>;
    remove_branding?: boolean;
    seo?: Record<string, any>;
    integrations?: Record<string, any>;
    template?: Record<string, any>;
    is_default_template?: boolean;
    is_published?: boolean;
    is_public?: boolean;
    screenshots?: Array<string>;
    updated_at?: Date;
    created_at?: Date;
}