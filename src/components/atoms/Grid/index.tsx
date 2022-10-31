import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface IGridProps {
    children?: ReactElement | ReactNode;
    container?: boolean;
    item?: boolean;
    height?: string;
    padding?: string;
    xs?: number | string;
    columns?: string;
    spacing?: string;
    rowSpacing?: string;
    columnSpacing?: string;
    direction?: string;
    alignItems?: string;
    justifyItems?: string;
    alignSelf?: string;
    justifySelf?: string;
    justifyContent?: string;
}

const StyledGrid = styled.div<IGridProps>`
    padding: ${(props) => props.padding};
    ${(props) => {
        if (props.container) {
            return `
                display:grid;
                height:${props.height || ""};
                grid-row-gap:${props.rowSpacing || props.spacing || 0};
                grid-column-gap:${props.columnSpacing || props.spacing || 0};
                grid-auto-flow:${props.direction || "row"};
                align-items:${props.alignItems || ""};
                justify-content:${props.justifyContent || ""};
                justify-items:${props.justifyItems || ""};
                width:100%;
                ${
                    props.columns
                        ? `
                            grid-template-columns:${props.columns};
                        `
                        : `
                            grid-template-columns:${
                                typeof props.xs === "string"
                                    ? props.xs
                                    : `repeat(${props.xs || 1}, 1fr`
                            });
                                
                        `
                }
            `;
        }
        if (props.item) {
            return `
                display:block;
                align-self:${props.alignSelf};
                justify-self:${props.justifySelf};
            `;
        }
    }};
`;

export const Grid: FC<IGridProps> = ({ children, ...props }) => {
    return <StyledGrid {...props}>{children}</StyledGrid>;
};
