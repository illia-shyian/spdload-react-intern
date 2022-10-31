import { gql, useQuery } from "@apollo/client";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { favoriteToursState } from "../../../state/atoms/favoriteToursState";
import { ITour } from "../../../types/Tour";
import { Box } from "../../atoms/Box";
import { LikeIconButton } from "../../atoms/LikeIconButton";
import { TourCard } from "../../molecules/TourCard";
import { Slider } from "../../organisms/Slider";
import styled from "styled-components";
import { IHistory } from "../../../types/History";

const GET_TOURS = gql`
    {
        histories {
            flight {
                links {
                    flickr_images
                }
                mission_name
            }
            id
            title
        }
    }
`;

const StyledMainPageeSlider = styled.div`
    padding: 100px 32px 15px 32px;
    width: 100%;
`;

export const MainPageSlider = (): ReactElement => {
    const { data, loading } = useQuery(GET_TOURS);
    const histories: IHistory[] = data?.histories || [];
    const cardWidth = 410;
    const paddingX = 64;
    const columnGap = 12;
    const [cardAdjustedWidth, setCardAdjustedWidth] = useState(0);
    const [elements, setElements] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [tours, setTours] = useRecoilState(favoriteToursState);

    const deleteTour = useCallback(
        (tour: ITour) => {
            const newTours = { ...tours };
            delete newTours[tour.title];
            setTours(newTours);
        },
        [tours, setTours]
    );

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
        <StyledMainPageeSlider>
            <Slider elements={elements} title="POPULAR TOURS">
                {!loading &&
                    histories
                        .filter(
                            (history: IHistory) =>
                                history?.flight?.links?.flickr_images[0]
                        )
                        .map((history: IHistory) => {
                            const tour: ITour = {
                                title: history.title || "",
                                id: history.id,
                                image:
                                    history?.flight?.links?.flickr_images[0] ||
                                    "",
                                description:
                                    history?.flight?.mission_name || "",
                            };

                            const active = tour.title in tours;

                            return (
                                <TourCard
                                    key={tour.id}
                                    tour={tour}
                                    width={
                                        (cardAdjustedWidth
                                            ? cardAdjustedWidth
                                            : cardWidth) + "px"
                                    }
                                    icon={LikeIconButton}
                                    onIconClick={() =>
                                        active
                                            ? deleteTour(tour)
                                            : setTours({
                                                  ...tours,
                                                  ...{ [tour.title]: tour },
                                              })
                                    }
                                />
                            );
                        })}
            </Slider>
        </StyledMainPageeSlider>
    );
};
