import { FC } from "react";
import styled from "styled-components";
import { FullScreenImage } from "../../atoms/FullScreenImage";

import { Typography } from "../../atoms/Typography";

interface IBannerProps {
    image: string;
}

const StyledBanner = styled.div<IBannerProps>``;

export const Banner: FC<IBannerProps> = (props) => {
    return (
        <StyledBanner {...props}>
            <FullScreenImage image={props.image} />

            <Typography
                textAlign="center"
                fontSize="48px"
                fontWeight="800px"
                textShadow="0px 4.00107px 4.00107px rgba(0, 0, 0, 0.25);"
            >
                THE SPACE IS WAITING FOR
            </Typography>
            <Typography>YOU</Typography>
        </StyledBanner>
    );
};
