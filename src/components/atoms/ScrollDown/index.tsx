import {
    FC,
    Fragment,
    ReactElement,
    ReactNode,
    RefObject,
    useEffect,
} from "react";
import styled from "styled-components";

interface IScrollDownProps {
    children?: ReactElement | ReactNode;
    scroll: number;
    refElement: RefObject<HTMLElement>;
    eventName: string;
}

export const ScrollDown: FC<IScrollDownProps> = ({
    children,
    scroll,
    refElement,
    eventName,
}) => {
    const scrollPage = () => {
        window.scrollBy(0, scroll);
    };
    useEffect(() => {
        refElement.current?.addEventListener(eventName, scrollPage);
        return refElement.current?.removeEventListener(eventName, scrollPage);
    }, []);
    return <Fragment>{children}</Fragment>;
};
