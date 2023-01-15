import React, { Component } from 'react';

interface Props {
    children: React.ReactNode;
    wrapperClass?: string;
    contentClass?: string;
    wrapperStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
}
declare const TransformComponent: React.FC<Props>;

interface SizeType {
    width: number;
    height: number;
}
interface PositionType {
    x: number;
    y: number;
}
interface StateType {
    scale: number;
    positionX: number;
    positionY: number;
}
interface VelocityType {
    velocityX: number;
    velocityY: number;
    total: number;
}
interface BoundsType {
    minPositionX: number;
    maxPositionX: number;
    minPositionY: number;
    maxPositionY: number;
}
type AnimationType = () => void | number;

declare class TransformContext extends Component<Omit<ReactZoomPanPinchProps, "ref"> & {
    setRef: (context: ReactZoomPanPinchRef) => void;
}> {
    mounted: boolean;
    transformState: ReactZoomPanPinchState;
    setup: LibrarySetup;
    wrapperComponent: HTMLDivElement | null;
    contentComponent: HTMLDivElement | null;
    isInitialized: boolean;
    bounds: BoundsType | null;
    previousWheelEvent: WheelEvent | null;
    wheelStopEventTimer: ReturnType<typeof setTimeout> | null;
    wheelAnimationTimer: ReturnType<typeof setTimeout> | null;
    isPanning: boolean;
    startCoords: PositionType | null;
    lastTouch: number | null;
    distance: null | number;
    lastDistance: null | number;
    pinchStartDistance: null | number;
    pinchStartScale: null | number;
    pinchMidpoint: null | PositionType;
    velocity: VelocityType | null;
    velocityTime: number | null;
    lastMousePosition: PositionType | null;
    animate: boolean;
    animation: AnimationType | null;
    maxBounds: BoundsType | null;
    pressedKeys: {
        [key: string]: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(oldProps: ReactZoomPanPinchProps): void;
    private handleInitializeWrapperEvents;
    private handleInitialize;
    private onWheelZoom;
    private onPanningStart;
    private onPanning;
    private onPanningStop;
    private onPinchStart;
    private onPinch;
    private onPinchStop;
    private onTouchPanningStart;
    private onTouchPanning;
    private onTouchPanningStop;
    private onDoubleClick;
    private clearPanning;
    private setKeyPressed;
    private setKeyUnPressed;
    private isPressingKeys;
    private setComponents;
    setTransformState: (scale: number, positionX: number, positionY: number) => void;
    private setCenter;
    private applyTransformation;
    private handleRef;
    render(): JSX.Element;
}

declare const animations: {
    easeOut: (t: number) => number;
    linear: (t: number) => number;
    easeInQuad: (t: number) => number;
    easeOutQuad: (t: number) => number;
    easeInOutQuad: (t: number) => number;
    easeInCubic: (t: number) => number;
    easeOutCubic: (t: number) => number;
    easeInOutCubic: (t: number) => number;
    easeInQuart: (t: number) => number;
    easeOutQuart: (t: number) => number;
    easeInOutQuart: (t: number) => number;
    easeInQuint: (t: number) => number;
    easeOutQuint: (t: number) => number;
    easeInOutQuint: (t: number) => number;
};

declare const zoomIn: (contextInstance: ReactZoomPanPinchContext) => (step?: number, animationTime?: number, animationType?: keyof typeof animations) => void;
declare const zoomOut: (contextInstance: ReactZoomPanPinchContext) => (step?: number, animationTime?: number, animationType?: keyof typeof animations) => void;
declare const setTransform: (contextInstance: ReactZoomPanPinchContext) => (newPositionX: number, newPositionY: number, newScale: number, animationTime?: number, animationType?: keyof typeof animations) => void;
declare const resetTransform: (contextInstance: ReactZoomPanPinchContext) => (animationTime?: number, animationType?: keyof typeof animations) => void;
declare const centerView: (contextInstance: ReactZoomPanPinchContext) => (scale?: number, animationTime?: number, animationType?: keyof typeof animations) => void;
declare const zoomToElement: (contextInstance: ReactZoomPanPinchContext) => (node: HTMLElement | string, scale?: number, animationTime?: number, animationType?: keyof typeof animations) => void;

type DeepNonNullable<T> = T extends (...args: Array<any>) => any ? T : T extends Array<any> ? DeepNonNullableArray<T[number]> : T extends object ? DeepNonNullableObject<T> : T;
type DeepNonNullableArray<T> = Array<DeepNonNullable<NonNullable<T>>>;
type DeepNonNullableObject<T> = {
    [P in keyof T]-?: DeepNonNullable<NonNullable<T[P]>>;
};

type ReactZoomPanPinchContext = typeof TransformContext.prototype;
type ReactZoomPanPinchRef = {
    instance: ReactZoomPanPinchContext;
    state: ReactZoomPanPinchState;
} & ReactZoomPanPinchHandlers;
interface ReactZoomPanPinchState {
    previousScale: number;
    scale: number;
    positionX: number;
    positionY: number;
}
interface ReactZoomPanPinchHandlers {
    zoomIn: ReturnType<typeof zoomIn>;
    zoomOut: ReturnType<typeof zoomOut>;
    setTransform: ReturnType<typeof setTransform>;
    resetTransform: ReturnType<typeof resetTransform>;
    centerView: ReturnType<typeof centerView>;
    zoomToElement: ReturnType<typeof zoomToElement>;
}
interface ReactZoomPanPinchProps {
    children?: React.ReactNode | ((ref: ReactZoomPanPinchRef) => React.ReactNode);
    ref?: React.Ref<ReactZoomPanPinchRef>;
    initialScale?: number;
    initialPositionX?: number;
    initialPositionY?: number;
    disabled?: boolean;
    minPositionX?: null | number;
    maxPositionX?: null | number;
    minPositionY?: null | number;
    maxPositionY?: null | number;
    minScale?: number;
    maxScale?: number;
    limitToBounds?: boolean;
    centerZoomedOut?: boolean;
    centerOnInit?: boolean;
    wheel?: {
        step?: number;
        disabled?: boolean;
        wheelDisabled?: boolean;
        touchPadDisabled?: boolean;
        activationKeys?: Array<string>;
        excluded?: Array<string>;
    };
    panning?: {
        disabled?: boolean;
        velocityDisabled?: boolean;
        lockAxisX?: boolean;
        lockAxisY?: boolean;
        activationKeys?: Array<string>;
        excluded?: Array<string>;
    };
    pinch?: {
        step?: number;
        disabled?: boolean;
        excluded?: Array<string>;
    };
    doubleClick?: {
        disabled?: boolean;
        step?: number;
        mode?: "zoomIn" | "zoomOut" | "reset";
        animationTime?: number;
        animationType?: keyof typeof animations;
        excluded?: Array<string>;
    };
    zoomAnimation?: {
        disabled?: boolean;
        size?: number;
        animationTime?: number;
        animationType?: keyof typeof animations;
    };
    alignmentAnimation?: {
        disabled?: boolean;
        sizeX?: number;
        sizeY?: number;
        animationTime?: number;
        velocityAlignmentTime?: number;
        animationType?: keyof typeof animations;
    };
    velocityAnimation?: {
        disabled?: boolean;
        sensitivity?: number;
        animationTime?: number;
        animationType?: keyof typeof animations;
        equalToMove?: boolean;
    };
    onWheelStart?: (ref: ReactZoomPanPinchRef, event: WheelEvent) => void;
    onWheel?: (ref: ReactZoomPanPinchRef, event: WheelEvent) => void;
    onWheelStop?: (ref: ReactZoomPanPinchRef, event: WheelEvent) => void;
    onPanningStart?: (ref: ReactZoomPanPinchRef, event: TouchEvent | MouseEvent) => void;
    onPanning?: (ref: ReactZoomPanPinchRef, event: TouchEvent | MouseEvent) => void;
    onPanningStop?: (ref: ReactZoomPanPinchRef, event: TouchEvent | MouseEvent) => void;
    onPinchingStart?: (ref: ReactZoomPanPinchRef, event: TouchEvent) => void;
    onPinching?: (ref: ReactZoomPanPinchRef, event: TouchEvent) => void;
    onPinchingStop?: (ref: ReactZoomPanPinchRef, event: TouchEvent) => void;
    onZoomStart?: (ref: ReactZoomPanPinchRef, event: TouchEvent | MouseEvent) => void;
    onZoom?: (ref: ReactZoomPanPinchRef, event: TouchEvent | MouseEvent) => void;
    onZoomStop?: (ref: ReactZoomPanPinchRef, event: TouchEvent | MouseEvent) => void;
    onInit?: (ref: ReactZoomPanPinchRef) => void;
}
interface ReactZoomPanPinchComponentHelpers {
    setComponents: (wrapper: HTMLDivElement, content: HTMLDivElement) => void;
}
type LibrarySetup = Pick<ReactZoomPanPinchProps, "minPositionX" | "maxPositionX" | "minPositionY" | "maxPositionY"> & DeepNonNullable<Omit<ReactZoomPanPinchProps, "ref" | "initialScale" | "initialPositionX" | "initialPositionY" | "minPositionX" | "maxPositionX" | "minPositionY" | "maxPositionY" | "children" | "defaultPositionX" | "defaultPositionY" | "defaultScale" | "wrapperClass" | "contentClass" | "onWheelStart" | "onWheel" | "onWheelStop" | "onPanningStart" | "onPanning" | "onPanningStop" | "onPinchingStart" | "onPinching" | "onPinchingStop" | "onZoomStart" | "onZoom" | "onZoomStop" | "onInit">>;

declare const TransformWrapper: React.ForwardRefExoticComponent<Omit<ReactZoomPanPinchProps, "ref"> & React.RefAttributes<ReactZoomPanPinchRef>>;

declare const useTransformContext: () => ReactZoomPanPinchRef;

export { AnimationType, BoundsType, LibrarySetup, PositionType, ReactZoomPanPinchComponentHelpers, ReactZoomPanPinchContext, ReactZoomPanPinchHandlers, ReactZoomPanPinchProps, ReactZoomPanPinchRef, ReactZoomPanPinchState, SizeType, StateType, TransformComponent, TransformWrapper, VelocityType, useTransformContext };
