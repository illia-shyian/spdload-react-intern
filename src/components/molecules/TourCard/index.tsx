import { ReactElement } from "react";

interface IGridProps {
    container?: boolean;
    item?: boolean;
    xs?: number;
    rowSpacing?: number;
    columnSpacing?: number;
    spacing?: number;
}

export const Grid = ({
    container,
    item,
    xs,
    rowSpacing,
    spacing,
    columnSpacing,
}: IGridProps): ReactElement => {
    return <div></div>;
};
