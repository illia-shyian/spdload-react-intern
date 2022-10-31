import { FC } from "react";
import { IconButton } from "../IconButton";
import { LikeIcon } from "../LikeIcon";

export const LikeIconButton: FC<{
    onClick: () => void;
    [otherProp: string]: any;
}> = ({ onClick, ...props }) => {
    return (
        <IconButton {...props} onClick={onClick}>
            <LikeIcon {...props} />
        </IconButton>
    );
};
