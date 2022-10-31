import { FC, ReactElement, ReactNode } from "react";

interface IBoxProps {
    children?: ReactElement | ReactNode;
    [otherProps: string]: any;
}

export const Box: FC<IBoxProps> = ({ children, ...props }) => {
    return <div {...props}>{children}</div>;
};
