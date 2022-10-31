import { FC } from "react";
import styled from "styled-components";
import { ReactComponent as TrashIconImage } from "../../../images/delete.svg";

interface ITrashIconProps {
    display?: string;
}

const StyledTrashIcon = styled.div<ITrashIconProps>`
    display: ${(props) => props?.display || "block"};
    height: 24px;
    width: 24px;
`;

export const TrashIcon: FC<ITrashIconProps> = (props) => {
    return (
        <StyledTrashIcon {...props}>
            <TrashIconImage width={"100%"} height={"100%"} />
        </StyledTrashIcon>
    );
};
