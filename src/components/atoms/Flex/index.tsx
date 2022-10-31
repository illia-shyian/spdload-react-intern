import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface IFlexProps {
    display?: string;
    children: ReactElement | ReactNode;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    height?: string;
    flexWrap?: string;
    position?: string;
    alignSelf?: string;
    justifySelf?: string;
}

const StyledFlex = styled.div<IFlexProps>`
    display: ${(props) => props?.display || "flex"};
    flex-direction: ${(props) => props?.flexDirection || "row"};
    justify-content: ${(props) => props?.justifyContent || "flex-start"};
    align-items: ${(props) => props?.alignItems || "start"};
    flex-wrap: ${(props) => props?.flexWrap || "wrap"};
    width: ${(props) => props?.width || ""};
    height: ${(props) => props?.height || ""};
    position: ${(props) => props?.position || ""};
    align-self: ${(props) => props?.alignSelf || ""};
    justify-self: ${(props) => props?.justifySelf || ""};
`;

export const Flex: FC<IFlexProps> = ({ children, ...props }) => {
    return <StyledFlex {...props}>{children}</StyledFlex>;
};
