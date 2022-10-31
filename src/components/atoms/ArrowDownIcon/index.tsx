import { FC } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDownIconImage } from "../../../images/arrow-down.svg";

interface IArrowDownIconProps {
    display?: string;
    cursor?: string;
}

const StyledArrowDownIcon = styled.div<IArrowDownIconProps>`
    display: ${(props) => props?.display || "block"};
    height: 40px;
    width: 40px;
    cursor: ${(props) => props?.cursor || ""};
`;

export const ArrowDownIcon: FC<IArrowDownIconProps> = (props) => {
    return (
        <StyledArrowDownIcon {...props}>
            <ArrowDownIconImage width={"100%"} height={"100%"} />
        </StyledArrowDownIcon>
    );
};
