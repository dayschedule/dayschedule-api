declare type WorkflowResources = {
    all?: boolean;
    selected?: Array<string>;
}

declare type WorkflowTrigger = {
    when?: string;
    is_immediately: boolean;
    value?: number;
    type?: string;
}

declare type WorkflowAction = {
    type?: string;
    to?: string[];
    cc?: string[];
    url?: string;
    template_id?: string;
    template?: Record<string, any>;
    connection_id?: string;
}

export declare type Workflow = {
    workflow_id?: string;
    org_id?: number;
    user_id?: number;
    resources: WorkflowResources;
    name: string;
    trigger: WorkflowTrigger;
    actions: WorkflowAction[];
    is_enabled?: boolean;
}