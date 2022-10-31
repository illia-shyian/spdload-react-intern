import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../../images/logo.png";

const StyledLogo = styled.div`
    height: 42px;
    width: 230px;
    mix-blend-mode: difference;
    background: url(${LogoImage});
    cursor: pointer;
`;

export const Logo: FC = (props) => {
    return (
        <Link to="/">
            <StyledLogo {...props} />
        </Link>
    );
};
