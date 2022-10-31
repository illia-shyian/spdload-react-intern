import { atom } from "recoil";
import { ITour } from "../../types/Tour";

interface IFavoriteTour {
    [x: string]: ITour;
}

export const favoriteToursState = atom({
    key: "favoriteTours",
    default: {} as IFavoriteTour,
});
