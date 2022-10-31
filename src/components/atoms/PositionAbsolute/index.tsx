import { FC, ReactElement, ReactNode, RefObject } from "react";
import styled from "styled-components";

interface IPositionAbsoluteProps {
    children: ReactElement | ReactNode;
    display?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
}

const StyledPositionAbsolute = styled.div<IPositionAbsoluteProps>`
    display: ${(props) => props?.display || "block"};
    position: absolute;
    left: ${(props) => props?.left || ""};
    right: ${(props) => props?.right || ""};
    top: ${(props) => props?.top || ""};
    bottom: ${(props) => props?.bottom || ""};
`;

export const PositionAbsolute: FC<IPositionAbsoluteProps> = (props) => {
    return (
        <StyledPositionAbsolute {...props}>
            {props.children}
        </StyledPositionAbsolute>
    );
};
