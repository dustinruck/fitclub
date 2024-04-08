import { ReactNode } from "react";
import { SanitizedCarouselNavProps } from "./util";
export interface IndicatorProps {
    IndicatorIcon?: ReactNode;
    length: number;
    active: number;
    press: Function;
    indicatorContainerProps: SanitizedCarouselNavProps;
    indicatorIconButtonProps: SanitizedCarouselNavProps;
    activeIndicatorIconButtonProps: SanitizedCarouselNavProps;
}
export declare const Indicators: (props: IndicatorProps) => JSX.Element;
