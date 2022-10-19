import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../Flex";

interface IDividerProps {
    children?: ReactElement | ReactNode;
    display?: string;
    color?: string;
    padding?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
}

const StyledDivider = styled.div<IDividerProps>`
    display: ${(props) => props?.display || "block"};
    border-radius: ${(props) => props?.borderRadius};
    width: ${(props) => props?.width || "100%"};
    height: ${(props) => props?.height || "3px"};
    background: ${(props) => props?.color || "#FFF"};
`;

export const Divider: FC<IDividerProps> = ({ children, ...props }) => {
    return <StyledDivider {...props}></StyledDivider>;
};
