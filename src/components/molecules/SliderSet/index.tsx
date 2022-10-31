import React, { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../../atoms/Flex";

interface ISliderSetProps {
    children: ReactElement | ReactNode;
    width: number;
}

const StyledSliderSet = styled.div<ISliderSetProps>`
    width: ${(props) => props.width}px;
    height: 100%;
`;

export const SliderSet: FC<ISliderSetProps> = (props) => {
    const elements = React.Children.count(props.children) || 1;
    return (
        <StyledSliderSet {...props}>
            <Flex
                justifyContent={elements > 1 ? "space-between" : "center"}
                width="100%"
            >
                {props.children}
            </Flex>
        </StyledSliderSet>
    );
};
