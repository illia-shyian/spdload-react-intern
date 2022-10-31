import { FC } from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrowIconImage } from "../../../images/arrow-right.svg";

interface ILeftArrowIconProps {
    display?: string;
}

const StyledLeftArrowIcon = styled.div<ILeftArrowIconProps>`
    display: ${(props) => props?.display || "block"};
    height: 24px;
    width: 24px;
    transform: rotate(180deg);
    transition: transform none;
`;

export const LeftArrowIcon: FC<ILeftArrowIconProps> = (props) => {
    return (
        <StyledLeftArrowIcon {...props}>
            <LeftArrowIconImage width={"100%"} height={"100%"} />
        </StyledLeftArrowIcon>
    );
};
