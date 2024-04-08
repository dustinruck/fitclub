import { ReactNode } from 'react';
export interface CarouselItemProps {
    animation: 'fade' | 'slide';
    next?: Function;
    prev?: Function;
    state: {
        active: number;
        prevActive: number;
        next: boolean;
    };
    swipe?: boolean;
    index: number;
    maxIndex: number;
    duration: number;
    child: ReactNode;
    height?: number | string;
    setHeight: Function;
}
export declare const CarouselItem: ({ animation, next, prev, swipe, state, index, maxIndex, duration, child, height, setHeight }: CarouselItemProps) => JSX.Element;
