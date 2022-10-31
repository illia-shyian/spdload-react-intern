import { FC } from "react";
import styled from "styled-components";

interface IFullScreenImageProps {
    display?: string;
    image: string;
    position?: string;
    zIndex?: string;
}

const StyledFullScreenImage = styled.img<IFullScreenImageProps>`
    display: block;
    width: 100%;
    height: 100vh;
    position: ${(props) => props.position || ""};
    z-index: ${(props) => props.zIndex || ""};
`;

export const FullScreenImage: FC<IFullScreenImageProps> = (props) => {
    return <StyledFullScreenImage {...props} src={props.image} />;
};
