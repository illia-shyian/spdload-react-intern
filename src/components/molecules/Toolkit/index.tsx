import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../../atoms/Flex";

interface IToolkitProps {
    display?: string;
    children: ReactElement | ReactNode;
}

const StyledToolkit = styled.div<IToolkitProps>`
    display: ${(props) => props?.display || "block"};
`;

export const Toolkit: FC<IToolkitProps> = ({ children, ...props }) => {
    return (
        <StyledToolkit {...props}>
            <Flex justifyContent="center">{children}</Flex>
        </StyledToolkit>
    );
};
