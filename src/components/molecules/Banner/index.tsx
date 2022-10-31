import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../../atoms/Flex";
import { FullScreenImage } from "../../atoms/FullScreenImage";
import { FullWidthImage } from "../../atoms/FullWidthImage";

interface IBannerProps {
    image: string;
    height?: string;
    children?: ReactElement | ReactNode;
    fullScreen?: boolean;
}

const StyledBanner = styled.div<IBannerProps>`
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    height: ${(props) => props.height || ""};
`;

export const Banner: FC<IBannerProps> = (props) => {
    return (
        <StyledBanner {...props}>
            {props.fullScreen ? (
                <FullScreenImage
                    image={props.image}
                    position="absolute"
                    zIndex="-1"
                />
            ) : (
                <FullWidthImage
                    height={props.height || "50%"}
                    image={props.image}
                    position="absolute"
                    zIndex="-1"
                />
            )}
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                width="100%"
                height={props.fullScreen ? "100vh" : props.height || ""}
            >
                {props.children}
            </Flex>
        </StyledBanner>
    );
};
