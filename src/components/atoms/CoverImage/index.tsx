import { FC } from "react";
import styled from "styled-components";

interface ICoverImageProps {
    display?: string;
    image: string;
    height?: string;
    width?: string;
}

const StyledCoverImage = styled.div<ICoverImageProps>`
    display: block;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    overflow: hidden;
`;

export const CoverImage: FC<ICoverImageProps> = (props) => {
    return (
        <StyledCoverImage {...props}>
            <img src={props.image} />
        </StyledCoverImage>
    );
};
