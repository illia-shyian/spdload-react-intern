import { FC } from "react";
import styled from "styled-components";
import LogoImage from "../../../images/logo.png";

interface ILogoProps {
    display?: string;
}

const StyledLogo = styled.div<ILogoProps>`
    display: ${(props) => props?.display || "block"};
    height: 42px;
    width: 230px;
    mix-blend-mode: difference;
    background: url(${LogoImage});
`;

export const Logo: FC<ILogoProps> = (props) => {
    return <StyledLogo {...props} />;
};
