import { ReactElement } from "react";
import styled from "styled-components";
import { Header } from "../../organisms/Header";
import { MainPageBanner } from "../../organisms/MainPageBanner";
import { MainPageSlider } from "../../organisms/MainPageSlider";

const StyledMainPage = styled.div`
    height: 200vh;
`;

export const MainPage = (): ReactElement => {
    return (
        <StyledMainPage>
            <Header />
            <MainPageBanner />
            <MainPageSlider />
        </StyledMainPage>
    );
};
