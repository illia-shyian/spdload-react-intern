import { FC, ReactElement, ReactNode, useState } from "react";
import styled from "styled-components";
import { Divider } from "../../atoms/Divider";
import { Flex } from "../../atoms/Flex";
import { Typography } from "../../atoms/Typography";

interface IMenuButtonProps {
    children?: ReactElement | ReactNode;
    active?: boolean;
    display?: string;
    fontSize?: string;
    fullWidth?: boolean;
    padding?: string;
    height?: string;
}

const StyledMenuButton = styled.div<IMenuButtonProps>`
    display: ${(props) => props?.display || "block"};
    font-size: ${(props) => props?.fontSize};
    width: ${(props) => (props?.fullWidth ? "100%" : "")};
    color: ${(props) => props?.color || "inherit"};
    padding: ${(props) => props?.padding || "0px 16px "};
    &:hover {
        cursor: pointer;
    }
`;

export const MenuButton: FC<IMenuButtonProps> = ({ children, ...props }) => {
    const [hover, setHover] = useState(false);

    return (
        <StyledMenuButton
            {...props}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Flex alignItems="center">
                <Typography
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="Lato"
                    fontStyle="normal"
                    padding="0px 0px 7px 0px"
                    fullWidth
                >
                    {children}
                </Typography>
                <Divider
                    height="1px"
                    width="100%"
                    color={`${hover || props.active ? "#FFF" : "rgb(0,0,0,0)"}`}
                />
            </Flex>
        </StyledMenuButton>
    );
};
