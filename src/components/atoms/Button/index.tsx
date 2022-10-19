import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface IButtonProps {
    children?: ReactElement | ReactNode;
    textAlign?: string;
    fullWidth?: boolean;
    padding?: string;
    variant?: string;
    display?: string;
}

const StyledButton = styled.div<IButtonProps>`
    display: ${(props) => props?.display || "inline-flex"};
    align-items: center;
    text-align: ${(props) => props?.textAlign || "center"};
    width: ${(props) => (props?.fullWidth ? "100%" : "")};
    height: 53px;
    cursor: pointer;
    padding: ${(props) => props?.padding || "0px 30px"};
    ${(props) =>
        !props.variant || props.variant === "primary"
            ? `
                background: #D3EAFF;
            `
            : ""}
`;

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};
