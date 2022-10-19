import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface IIconButtonProps {
    display?: string;
    children: ReactElement | ReactNode;
    onClick?: () => any;
}

const StyledIconButton = styled.div<IIconButtonProps>`
    display: ${(props) => props?.display || "flex"};
    height: 53px;
    width: 53px;
    align-items: center;
    justify-content: center;
    background: #ececec;
    cursor: pointer;
`;

export const IconButton: FC<IIconButtonProps> = ({ children, ...props }) => {
    return <StyledIconButton {...props}>{children}</StyledIconButton>;
};
