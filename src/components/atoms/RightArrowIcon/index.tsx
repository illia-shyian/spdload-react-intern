import { FC } from "react";
import styled from "styled-components";
import { ReactComponent as RightArrowIconImage } from "../../../images/arrow-right.svg";

interface IRightArrowIconProps {
    display?: string;
}

const StyledRightArrowIcon = styled.div<IRightArrowIconProps>`
    display: ${(props) => props?.display || "block"};
    height: 24px;
    width: 24px;
`;

export const RightArrowIcon: FC<IRightArrowIconProps> = (props) => {
    return (
        <StyledRightArrowIcon {...props}>
            <RightArrowIconImage width={"100%"} height={"100%"} />
        </StyledRightArrowIcon>
    );
};
