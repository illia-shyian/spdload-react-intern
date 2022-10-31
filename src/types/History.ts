import { IFlight } from "./Flight";

export interface IHistory {
    flight: IFlight;
    id: string;
    title: string;
    [otherOptions: string]: unknown;
}
