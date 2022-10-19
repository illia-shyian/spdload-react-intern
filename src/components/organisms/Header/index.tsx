import { FC, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Grid } from "../../atoms/Grid";
import { Logo } from "../../atoms/Logo";
import { Toolkit } from "../../molecules/Toolkit";
import { MenuButton } from "../../molecules/MenuButton";
import { Typography } from "../../atoms/Typography";
import { IconButton } from "../../atoms/IconButton";
import { LikeIcon } from "../../atoms/LikeIcon";
import { Button } from "../../atoms/Button";

interface IHeaderProps {
    children?: ReactElement | ReactNode;
}

const StyledHeader = styled.div<IHeaderProps>`
    background: rgba(30, 30, 30, 0.48);
    height: 80px;
    top: 0;
    right: 0;
    padding: 0px 37px 0px 80px;
    position: absolute;
    width: 100%;
`;

export const Header: FC<IHeaderProps> = ({ children, ...props }) => {
    return (
        <StyledHeader {...props}>
            <Grid
                container
                justifyItems="start"
                columns="1fr auto 1fr"
                alignItems="center"
                height="100%"
            >
                <Grid item>
                    <Logo />
                </Grid>

                <Grid item>
                    <Toolkit>
                        <MenuButton>
                            <Typography color="white">TEST</Typography>
                        </MenuButton>
                        <MenuButton>
                            <Typography color="white">TEST</Typography>
                        </MenuButton>
                        <MenuButton>
                            <Typography color="white">TEST</Typography>
                        </MenuButton>
                        <MenuButton>
                            <Typography color="white">TEST</Typography>
                        </MenuButton>
                    </Toolkit>
                </Grid>
                <Grid item justifySelf="end">
                    <Grid container columns="auto auto" columnSpacing={12}>
                        <Grid item>
                            <IconButton>
                                <LikeIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Typography>SIGN IN</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </StyledHeader>
    );
};
