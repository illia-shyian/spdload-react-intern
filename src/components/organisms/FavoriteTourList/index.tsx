import { FC, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { favoriteToursState } from "../../../state/atoms/favoriteToursState";
import { ITour } from "../../../types/Tour";
import { Button } from "../../atoms/Button";
import { Flex } from "../../atoms/Flex";
import { Grid } from "../../atoms/Grid";
import { TrashIconButton } from "../../atoms/TrashIconButton";
import { Typography } from "../../atoms/Typography";
import { TourCard } from "../../molecules/TourCard";
import styled from "styled-components";

const StyledFaboriteTourList = styled.div`
    padding: 90px 20px;
`;

export const FavoriteTourList: FC = () => {
    const [tours, setTours] = useRecoilState(favoriteToursState);
    const cardWidth = 410;
    const paddingX = 64;
    const columnGap = 12;

    const [windowWidth, setWindowWidth] = useState(0);
    const [cardAdjustedWidth, setCardAdjustedWidth] = useState(0);
    const [elements, setElements] = useState(0);
    const calcElements = (): number => {
        const widthForCards =
            window.innerWidth -
            paddingX -
            ((window.innerWidth - paddingX) / cardWidth) * columnGap;

        let calcElements = Math.floor(widthForCards / cardWidth);
        const spareWidth = widthForCards - calcElements * cardWidth;
        if (spareWidth > 0.7 * cardWidth) {
            calcElements += 1;
            setCardAdjustedWidth(spareWidth);
        } else {
            setCardAdjustedWidth(0);
        }
        return calcElements;
    };

    const deleteTour = useCallback(
        (tour: ITour) => {
            const newTours = { ...tours };
            delete newTours[tour.title];
            setTours(newTours);
        },
        [tours, setTours]
    );
    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () =>
            window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    useEffect(() => {
        setElements(calcElements());
    }, [windowWidth]);
    return (
        <StyledFaboriteTourList>
            {Object.values(tours).length ? (
                <Flex justifyContent="space-between">
                    <Typography
                        fontFamily="Syne"
                        fontWeight="900"
                        fontSize="45px"
                        color="#1E1E1E"
                        transform="scale(1,.8)"
                    >
                        Tours
                    </Typography>
                    <Button onClick={() => setTours({})}>
                        <Typography
                            textAlign="center"
                            fontFamily="Syne"
                            fontSize="24px"
                            fontWeight="600"
                            fullWidth
                        >
                            CLEAR ALL
                        </Typography>
                    </Button>
                </Flex>
            ) : (
                <Typography
                    fontFamily="Syne"
                    fontWeight="900"
                    fontSize="45px"
                    color="#1E1E1E"
                >
                    YOU DON'T HAVE FAVORITE TOURS YET 😵
                </Typography>
            )}
            {Object.values(tours).length ? (
                <Grid
                    container
                    xs={elements}
                    columns={`repeat(${elements},410px)`}
                    justifyContent=" space-between"
                    rowSpacing="20px"
                    padding="35px 0px"
                >
                    {Object.values(tours).map((tour) => (
                        <Grid item>
                            <TourCard
                                width={
                                    (cardAdjustedWidth
                                        ? cardAdjustedWidth
                                        : cardWidth) + "px"
                                }
                                tour={tour}
                                icon={TrashIconButton}
                                onIconClick={() => deleteTour(tour)}
                            />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                ""
            )}
        </StyledFaboriteTourList>
    );
};
