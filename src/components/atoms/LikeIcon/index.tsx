import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { ReactComponent as LikeIconImage } from "../../../images/like-icon.svg";

interface ILikeIconProps {
    display?: string;
}

const StyledLikeIcon = styled.div<ILikeIconProps>`
    display: ${(props) => props?.display || "block"};
    height: 24px;
    width: 24px;
`;

export const LikeIcon: FC<ILikeIconProps> = (props) => {
    return (
        <StyledLikeIcon {...props}>
            <LikeIconImage width={"100%"} height={"100%"} />
        </StyledLikeIcon>
    );
};
