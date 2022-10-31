import React, {
    FC,
    ReactElement,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import { Box } from "../../atoms/Box";
import { Circle } from "../../atoms/Circle";
import { Flex } from "../../atoms/Flex";
import { IconButton } from "../../atoms/IconButton";
import { LeftArrowIcon } from "../../atoms/LeftArrowIcon";
import { RightArrowIcon } from "../../atoms/RightArrowIcon";
import { Typography } from "../../atoms/Typography";
import { SliderSet } from "../../molecules/SliderSet";

interface IStyledProps {
    children: ReactElement | ReactNode;
    width?: string;
    radioButtons?: boolean;
    arrows?: boolean;
    elements?: number;
    title?: string;
}

const StyledSlider = styled.div<IStyledProps>`
    width: 100%;
    overflow-x: hidden;
    position: relative;
    & .sliderRow {
        height: 100%;
        display: flex;
        transition: transform 0.3s;
    }
`;

export const Slider: FC<IStyledProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const elements = props.elements || 1;
    const childNumber = React.Children.count(props.children);

    const [page, setPage] = useState(0);

    const changePage = (delta: number): void => {
        if (
            page + delta >= Math.floor(childNumber / elements) ||
            page + delta < 0
        ) {
            return;
        }
        setPage(
            () => Math.abs(page + delta) % Math.floor(childNumber / elements)
        );
    };

    const getSliderSets = (items: [] = []) => {
        const chunks = items.reduce(
            (resultArray: any, item: any, index: any) => {
                const chunkIndex = Math.floor(index / elements);

                if (!resultArray[chunkIndex]) {
                    resultArray[chunkIndex] = [];
                }

                resultArray[chunkIndex].push(item);

                return resultArray;
            },
            []
        );

        const sliderSets = chunks.map((set: ReactElement[] | ReactNode[]) => (
            <SliderSet
                width={containerRef.current?.clientWidth || 0}
                key={Math.random()}
            >
                {[...set]}
            </SliderSet>
        ));

        return sliderSets;
    };

    return (
        <StyledSlider {...props} ref={containerRef}>
            <Flex flexDirection="column">
                <Flex justifyContent="space-between" width="100%">
                    <Typography
                        fontFamily="Syne"
                        fontWeight="900"
                        fontSize="45px"
                        color="#1E1E1E"
                        transform="scale(1,.6)"
                    >
                        {props.title}
                    </Typography>
                    <Box>
                        <Flex>
                            <IconButton onClick={() => changePage(-1)}>
                                <LeftArrowIcon />
                            </IconButton>
                            <Box style={{ width: "15px" }} />
                            <IconButton onClick={() => changePage(+1)}>
                                <RightArrowIcon />
                            </IconButton>
                        </Flex>
                    </Box>
                </Flex>

                <Box
                    style={{
                        position: "relative",
                        minHeight: 150,
                        paddingTop: "50px",
                    }}
                >
                    <Box
                        className="sliderRow"
                        style={{
                            transform: `translateX(-${
                                (containerRef.current?.clientWidth || 0) * page
                            }px)`,
                        }}
                    >
                        {props.children && getSliderSets(props.children as [])}
                    </Box>
                </Box>
                <Box style={{ width: "100%" }}>
                    <Flex width="100%" justifyContent="center">
                        {(
                            [...Array(Math.floor(childNumber / elements))] || []
                        ).map((_blank, index) => (
                            <Box style={{ padding: "4px" }} key={Math.random()}>
                                <Circle
                                    variant={page === index ? "filled" : ""}
                                    key={Math.random()}
                                    onClick={() => setPage(index)}
                                />
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </StyledSlider>
    );
};
