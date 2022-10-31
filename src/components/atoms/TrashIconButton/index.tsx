import { FC } from "react";
import { IconButton } from "../IconButton";
import { TrashIcon } from "../TrashIcon";

export const TrashIconButton: FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <IconButton onClick={onClick}>
            <TrashIcon />
        </IconButton>
    );
};
