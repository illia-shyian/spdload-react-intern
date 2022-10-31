import { FC } from "react";
import styled from "styled-components";

interface FullWidthImageProps {
    display?: string;
    image: string;
    position?: string;
    height: string;
    zIndex?: string;
}

const StyledFullWidthImage = styled.img<FullWidthImageProps>`
    display: block;
    width: 100%;
    height: ${(props) => props.height};

    position: ${(props) => props.position || ""};
    z-index: ${(props) => props.zIndex || ""};
    background: rgba(0, 0, 0, 1);

    object-fit: cover;
    object-position: 0 0;
`;

export const FullWidthImage: FC<FullWidthImageProps> = (props) => {
    return <StyledFullWidthImage {...props} src={props.image} />;
};
