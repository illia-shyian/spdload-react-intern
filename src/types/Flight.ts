export interface IFlight {
    links: { flickr_images: string[] };
    mission_name: string;
    [otherOptions: string]: unknown;
}
