import { AnimeAnimParams } from "animejs";

export interface IAnimationElement {
    element: string;
    keyframes: AnimeAnimParams[];
}

interface IKeyframeObject {
    [str: string]: string;
}