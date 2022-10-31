export interface ITour {
    image: string;
    description: string;
    title: string;
    id: string;

    [otherOptions: string]: unknown;
}
