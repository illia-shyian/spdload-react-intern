import { ReactElement } from "react";
import { Box } from "../../atoms/Box";
import { FavoritePageBanner } from "../../organisms/FavoritesPageBanner";
import { FavoriteTourList } from "../../organisms/FavoriteTourList";
import { Header } from "../../organisms/Header";

export const FavoritesPage = (): ReactElement => {
    return (
        <Box>
            <Header />
            <FavoritePageBanner />
            <FavoriteTourList />
        </Box>
    );
};
