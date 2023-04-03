import { IAnimationElement } from "@/interfaces/mainPage.interfaces";
import { FlexCol, FlexRow, MainPageButtonContainer, MainPageTitle, MainViewWrapper, MenuElement } from "@/styles/mainPage.styled";
import anime, { AnimeInstance } from "animejs";
import { MutableRefObject, useEffect, useRef } from "react";

const aa = ["#el1", "#el2", "#el3", "#el4"];
const animatedElements : IAnimationElement[] = [
  {
    element: "#el1",
    keyframes: [
      {opacity: .1, duration: 50, easing: 'linear'},
        {translateY: -200, duration: 200, easing: 'easeOutExpo'},
        {opacity: 1, duration: 50, easing: 'linear'},
    ]
  },
  {
    element: "#el2",
    keyframes: [
      {opacity: .1, duration: 50, easing: 'linear'},
        {translateX: 500, duration: 200, easing: 'easeOutExpo'},
        {opacity: 1, duration: 50, easing: 'linear'},
    ]
  },
  {
    element: "#el3",
    keyframes: [
      {opacity: .1, duration: 50, easing: 'linear'},
        {translateY: 200, duration: 200, easing: 'easeOutExpo'},
        {opacity: 1, duration: 50, easing: 'linear'},
    ]
  },
  {
    element: "#el4",
    keyframes: [
      {opacity: .1, duration: 50, easing: 'linear'},
        {translateX: -450, duration: 200, easing: 'easeOutExpo'},
        {opacity: 1, duration: 50, easing: 'linear'},
    ]
  },
]

export default function Home() {

  const animationRef = useRef<AnimeInstance | null>(null);

  useEffect( () => {
    const timelineObject = anime.timeline();
    animatedElements.forEach( (animationElement, index) => {
      timelineObject.add({
        targets: `${animationElement.element}`,
        keyframes: animationElement.keyframes,
      })
    });
    timelineObject.play();
  }, [])

  return (
     <MainViewWrapper>
    
      <MenuElement className="classElement" id="el1">flashcards</MenuElement>
      <MenuElement className="classElement" id="el3">add flashcards</MenuElement>
      <MenuElement className="classElement" id="el4">Menu</MenuElement>
      <MenuElement className="classElement" id="el2">settings</MenuElement>
      <MainPageTitle>voice flashcards</MainPageTitle>

     </MainViewWrapper>
  )
}
