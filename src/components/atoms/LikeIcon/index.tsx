import { FC } from "react";
import styled from "styled-components";
import { ReactComponent as LikeIconImage } from "../../../images/like-icon.svg";

interface ILikeIconProps {
    display?: string;
    active?: boolean;
}

const StyledLikeIcon = styled.div<ILikeIconProps>`
    display: ${(props) => props?.display || "block"};
    height: 24px;
    width: 24px;
`;

export const LikeIcon: FC<ILikeIconProps> = (props) => {
    return (
        <StyledLikeIcon {...props}>
            <LikeIconImage
                width={"100%"}
                height={"100%"}
                fill={props.active ? "rgb(254, 121, 104)" : "none"}
            />
        </StyledLikeIcon>
    );
};
