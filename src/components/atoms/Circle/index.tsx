import { FC } from "react";
import styled from "styled-components";

interface ICircleProps {
    display?: string;
    height?: string;
    width?: string;
    variant?: string;
    onClick?: () => void;
}

const StyledCircle = styled.div<ICircleProps>`
    display: block;
    cursor: pointer;
    border: 1px solid #1e1e1e;
    border-radius: 50%;
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};

    ${(props) => {
        switch (props.variant) {
            case "filled":
                return `
                padding:3px;
                background: #1E1E1E content-box;
            `;
        }
    }}
`;

export const Circle: FC<ICircleProps> = (props) => {
    return <StyledCircle {...props} />;
};
