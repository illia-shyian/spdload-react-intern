import { FC, FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { favoriteToursState } from "../../../state/atoms/favoriteToursState";
import { ITour } from "../../../types/Tour";
import { Box } from "../../atoms/Box";
import { Button } from "../../atoms/Button";
import { CoverImage } from "../../atoms/CoverImage";
import { Flex } from "../../atoms/Flex";
import { Grid } from "../../atoms/Grid";
import { Typography } from "../../atoms/Typography";

interface ITourCardStyleProps {
    display?: string;
    width?: string;
    height?: string;
    transform?: string;
}

interface ITourCardProps extends ITourCardStyleProps {
    tour: ITour;
    onIconClick?: () => void;
    icon?: FunctionComponent<any>;
}

const StyledTourCard = styled.div<ITourCardStyleProps>`
    display: ${(props) => props?.display || "block"};
    width: ${(props) => props.width || "410px"};
    height: ${(props) => props.height || "570px"};
    transform: ${(props) => props.transform || ""};
    transition: box-shadow 0.3s;

    & .text {
        height: 200px;
        overflow: hidden;
        width: 100%;
    }
`;

export const TourCard: FC<ITourCardProps> = ({
    tour,
    onIconClick,
    icon,
    ...props
}) => {
    const Icon = icon;
    const tours = useRecoilValue(favoriteToursState);

    return (
        <StyledTourCard {...props}>
            <Flex height="100%" flexDirection="column">
                <CoverImage image={tour.image} height="300px" />
                <Box className="text">
                    <Typography
                        fullWidth
                        padding="16px 0px"
                        textAlign="center"
                        fontFamily="Syne"
                        fontWeight="700"
                        fontSize="24px"
                        color=" #1E1E1E"
                    >
                        {tour.title}
                    </Typography>
                    <Typography
                        fullWidth
                        textAlign="center"
                        fontFamily="Lato"
                        fontWeight="300"
                        fontSize="24px"
                        color="#556B84"
                    >
                        {tour.description}
                    </Typography>
                </Box>

                <Grid
                    container
                    columnSpacing={"15px"}
                    padding="auto 32px 24px 32px"
                    columns={`1fr ${Icon ? "53px" : ""}`}
                >
                    <Grid item>
                        <Button fullWidth>
                            <Typography
                                textAlign="center"
                                fontFamily="Syne"
                                fontSize="24px"
                                fontWeight="600"
                                fullWidth
                            >
                                Buy
                            </Typography>
                        </Button>
                    </Grid>
                    {Icon && (
                        <Grid item>
                            <Icon
                                active={tour.title in tours}
                                onClick={() => onIconClick && onIconClick()}
                            />
                        </Grid>
                    )}
                </Grid>
            </Flex>
        </StyledTourCard>
    );
};
