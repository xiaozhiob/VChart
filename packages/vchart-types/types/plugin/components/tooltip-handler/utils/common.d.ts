import type { MaybeArray } from '../../../../typings';
import type { ITooltipTextStyle } from '../interface/style';
import type { TooltipRichTextAttrs } from '@visactor/vrender-components';
export declare function escapeHTML(value: any): string;
export declare function pickFirstValidValue<T>(isValid: (element?: T) => any, ...elements: T[]): T | undefined;
export declare function convertToColorString(color: any, defaultColor?: string): string;
export declare const getScale: (element: HTMLElement, boundingClientRect?: DOMRect) => number;
interface ITooltipTextInfo {
    width: number;
    height: number;
    text: MaybeArray<number> | MaybeArray<string> | TooltipRichTextAttrs;
}
export declare const measureTooltipText: (text: string | TooltipRichTextAttrs, style: ITooltipTextStyle) => ITooltipTextInfo;
export {};
