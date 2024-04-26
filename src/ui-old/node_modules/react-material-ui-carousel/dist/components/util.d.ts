import { CarouselNavProps, CarouselProps } from './types';
import React, { ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
export interface SanitizedCarouselProps extends CarouselProps {
    sx: SxProps<Theme>;
    className: string;
    children: ReactNode;
    height: number | string | undefined;
    index: number;
    strictIndexing: boolean;
    autoPlay: boolean;
    stopAutoPlayOnHover: boolean;
    interval: number;
    animation: "fade" | "slide";
    duration: number;
    swipe: boolean;
    navButtonsAlwaysInvisible: boolean;
    navButtonsAlwaysVisible: boolean;
    cycleNavigation: boolean;
    fullHeightHover: boolean;
    navButtonsWrapperProps: SanitizedCarouselNavProps;
    navButtonsProps: SanitizedCarouselNavProps;
    NavButton: (({ onClick, next, className, style, prev }: {
        onClick: Function;
        className: string;
        style: React.CSSProperties;
        next: boolean;
        prev: boolean;
    }) => ReactNode) | undefined;
    NextIcon: ReactNode;
    PrevIcon: ReactNode;
    indicators: boolean;
    indicatorContainerProps: SanitizedCarouselNavProps;
    indicatorIconButtonProps: SanitizedCarouselNavProps;
    activeIndicatorIconButtonProps: SanitizedCarouselNavProps;
    IndicatorIcon: ReactNode;
    onChange: (now?: number, previous?: number) => any;
    changeOnFirstRender: boolean;
    next: (now?: number, previous?: number) => any;
    prev: (now?: number, previous?: number) => any;
}
export interface SanitizedCarouselNavProps extends CarouselNavProps {
    style: React.CSSProperties;
    className: string;
}
export declare const sanitizeNavProps: (props: CarouselNavProps | undefined) => SanitizedCarouselNavProps;
export declare const sanitizeProps: (props: CarouselProps) => SanitizedCarouselProps;
export declare const useInterval: (callback: Function, delay: number) => void;
