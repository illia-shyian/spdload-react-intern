import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface IStyledButtonProps {
    children?: ReactElement | ReactNode;
    textAlign?: string;
    fullWidth?: boolean;
    padding?: string;
    variant?: string;
    display?: string;
}

interface IButtonProps extends IStyledButtonProps {
    children?: ReactElement | ReactNode;
    onClick?: () => void;
}

const StyledButton = styled.div<IStyledButtonProps>`
    display: ${(props) => props?.display || "inline-flex"};
    align-items: center;
    text-align: ${(props) => props?.textAlign || "center"};
    width: ${(props) => (props?.fullWidth ? "100%" : "")};
    height: 53px;
    cursor: pointer;
    transition: 0.1s;
    user-select: none;
    padding: ${(props) => props?.padding || "0px 30px"};
    ${(props) =>
        !props.variant || props.variant === "primary"
            ? `
                background: #D3EAFF;
            `
            : ""}

    &:hover {
        box-shadow: 0 0 3px rgba(33, 33, 33, 0.2);
    }

    &:active {
        transform: scale(0.98);
        background: #c5e2fc;
        box-shadow: none;
    }
`;

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};
