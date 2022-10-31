import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Typography } from "../../atoms/Typography";
import { PositionAbsolute } from "../../atoms/PositionAbsolute";
import { Flex } from "../../atoms/Flex";
import { ArrowDownIcon } from "../../atoms/ArrowDownIcon";
import { Banner } from "../../molecules/Banner";
import BannerImage from "../../../images/banner-image.png";
import { Box } from "../../atoms/Box";

interface IMainPageBannerProps {
    children?: ReactElement | ReactNode;
}

const StyledMainPageBanner = styled.div<IMainPageBannerProps>``;

export const MainPageBanner: FC<IMainPageBannerProps> = ({
    children,
    ...props
}) => {
    const srollWindowHeight = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };
    return (
        <StyledMainPageBanner {...props}>
            <Banner image={BannerImage} fullScreen>
                <Typography
                    fontSize="5.85vw"
                    lineHeight="4vw"
                    fontFamily="Syne"
                    fontWeight="800"
                    padding="1px 2.5vw 1px 1px"
                    color="#FFFFFF"
                    textShadow="2px 1.00107px 1.00107px rgba(0, 0, 0, 0.5)"
                    transform="scale(1,0.5)"
                    cursor="default"
                >
                    THE SPACE IS WAITING FOR
                </Typography>

                <Typography
                    fontSize="38vw"
                    fontFamily="Syne"
                    fontWeight="800"
                    color="#FFFFFF"
                    lineHeight="18vw"
                    cursor="default"
                    transform="scale(1,0.5)"
                >
                    YOU
                </Typography>
                <PositionAbsolute bottom="20px">
                    <Box onClick={srollWindowHeight}>
                        <Flex alignItems="center">
                            <Typography
                                fontFamily="Lato"
                                fontWeight="300"
                                fontSize="32px"
                                color="#FFF"
                                cursor="pointer"
                            >
                                Explore tours
                            </Typography>
                            <ArrowDownIcon
                                display="inline-block"
                                cursor="pointer"
                            />
                        </Flex>
                    </Box>
                </PositionAbsolute>
            </Banner>
        </StyledMainPageBanner>
    );
};
