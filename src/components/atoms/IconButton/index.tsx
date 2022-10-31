import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface IIconButtonProps {
    display?: string;
    children: ReactElement | ReactNode;
    onClick?: () => void;
}

const StyledIconButton = styled.div<IIconButtonProps>`
    display: ${(props) => props?.display || "flex"};
    height: 53px;
    width: 53px;
    align-items: center;
    justify-content: center;
    background: #ececec;
    cursor: pointer;
    user-select: none;

    transition: box-shadow 0.1s;

    &:hover {
        box-shadow: 0 0 3px rgba(33, 33, 33, 0.2);
    }

    &:active {
        transform: scale(0.98);
        background: #efefef;
        box-shadow: none;
    }
`;

export const IconButton: FC<IIconButtonProps> = ({ children, ...props }) => {
    return (
        <StyledIconButton {...props} className="IconButton">
            {children}
        </StyledIconButton>
    );
};
