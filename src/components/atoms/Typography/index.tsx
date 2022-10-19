import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ITypographyProps {
    children?: ReactElement | ReactNode;
    textAlign?: string;
    variant?: string;
    display?: string;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    fullWidth?: boolean;
    lineHeight?: string;
    color?: string;
    fontStyle?: string;
    borderBottom?: string;
    textShadow?: string;
}

const StyledTypography = styled.div<ITypographyProps>`
    display: ${(props) => props?.display || "block"};
    text-align: ${(props) => props?.textAlign || "center"};
    font-size: ${(props) => props?.fontSize};
    font-family: ${(props) => props?.fontFamily};
    font-style: ${(props) => props?.fontStyle};
    text-shadow:${(props) => props.textShadow}
    font-weight: ${(props) => props?.fontWeight};
    line-height: ${(props) => props?.lineHeight};
    width: ${(props) => (props?.fullWidth ? "100%" : "")};
    color: ${(props) => props?.color || "inherit"};
    padding: 1px;
    border-bottom: ${(props) => props?.borderBottom || "none"};
    box-sizing: content-box;

    ${(props) => {
        switch (props.variant) {
            case "h1":
                return `
                    font-size:  2.5rem;
                `;
            case "h2":
                return `
                    font-size: 2rem;
                `;
            case "h3":
                return `
                    font-size: 1.75rem;
                `;
            case "h4":
                return `
                    font-size: 1.5rem;
                `;
            case "h5":
                return `
                    font-size: 1.25rem;
                `;
            case "h6":
                return `
                    font-size: 1rem;
                `;
        }
    }}
`;

export const Typography: FC<ITypographyProps> = ({ children, ...props }) => {
    return <StyledTypography {...props}>{children}</StyledTypography>;
};
