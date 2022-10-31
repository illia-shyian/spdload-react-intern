import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Grid } from "../../atoms/Grid";
import { Logo } from "../../atoms/Logo";
import { Toolkit } from "../../molecules/Toolkit";
import { MenuButton } from "../../molecules/MenuButton";
import { Typography } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";
import { LikeIconButton } from "../../atoms/LikeIconButton";
import { Link, useLocation } from "react-router-dom";

interface IHeaderProps {
    children?: ReactElement | ReactNode;
}

const StyledHeader = styled.div<IHeaderProps>`
    background: rgba(30, 30, 30, 0.48);
    height: 80px;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 0px;
    position: absolute;
    width: 100%;

    & a {
        color: inherit;
        text-decoration: inherit;
        cursor: inherit;
    }
`;

export const Header: FC<IHeaderProps> = ({ children, ...props }) => {
    const location = useLocation();
    return (
        <StyledHeader {...props}>
            <Grid
                container
                justifyItems="start"
                columns="1fr auto 1fr"
                alignItems="center"
                height="100%"
            >
                <Grid item padding="0px 0px 0px 80px">
                    <Logo />
                </Grid>

                <Grid item>
                    <Toolkit>
                        <Link to="/">
                            <MenuButton active={location.pathname === "/"}>
                                <Typography color="white">HOME</Typography>
                            </MenuButton>
                        </Link>
                        <MenuButton>
                            <Typography color="white">TOURES</Typography>
                        </MenuButton>
                        <MenuButton>
                            <Typography color="white">ABOUT</Typography>
                        </MenuButton>
                        <MenuButton>
                            <Typography color="white">HELP</Typography>
                        </MenuButton>
                    </Toolkit>
                </Grid>
                <Grid item justifySelf="end" padding="0px 37px 0px 0px">
                    <Grid container columns="auto auto" columnSpacing={"12px"}>
                        <Grid item>
                            <Link to="/favorites">
                                <LikeIconButton
                                    active={location.pathname === "/favorites"}
                                    onClick={() => null}
                                />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Typography
                                    fontFamily="Syne"
                                    fontWeight="900"
                                    fontSize="24px"
                                    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                >
                                    SIGN IN
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </StyledHeader>
    );
};
