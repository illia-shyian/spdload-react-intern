import { ReactElement } from "react";
import BannerImage from "../../../images/banner-image.png";
import { Banner } from "../../molecules/Banner";
import { Header } from "../../organisms/Header";

interface History {
    title: string;
    flight: any;
    id: string | number;
    typename: string;
}

export const MainPage = (): ReactElement => {
    return (
        <div style={{ height: "10000px" }}>
            <Header />
            <Banner image={BannerImage} />
        </div>
    );
};
