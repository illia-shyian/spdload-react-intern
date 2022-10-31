import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import BannerImage from "../../../images/favorite-banner.png";
import { FullWidthImage } from "../../atoms/FullWidthImage";
import { Typography } from "../../atoms/Typography";
import { Banner } from "../../molecules/Banner";

interface IFavoritePageBannerProps {
    children?: ReactElement | ReactNode;
}

const StyledFavoritePageBanner = styled.div<IFavoritePageBannerProps>``;

export const FavoritePageBanner: FC<IFavoritePageBannerProps> = ({
    children,
    ...props
}) => {
    return (
        <StyledFavoritePageBanner {...props}>
            <Banner height="450px" image={BannerImage}>
                <Typography
                    fontSize="7vw"
                    fontFamily="Syne"
                    fontWeight="800"
                    color="#FFFFFF"
                    padding="7vw 0px 0px 0px"
                    cursor="default"
                    transform="scale(1,0.5)"
                >
                    FAVOURITES
                </Typography>
            </Banner>
        </StyledFavoritePageBanner>
    );
};
