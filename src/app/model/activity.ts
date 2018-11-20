export interface Activity {
    id: number;
    name: string;
    expected_start_date: string;
    expected_end_date: string;
    workflowlevel1: string;
    url: string;
    actual_start_date:  Date;
    actual_end_date:  Date;
    description: string;
    short_name: string;
    create_date:  Date;
    edit_date:  Date;
    status: string;
    progress: string;
}
