import { FlexCol, FlexRow, MainPageButtonContainer, MainPageTitle, MainViewWrapper, MenuElement } from "@/styles/mainPage.styled";
import anime, { AnimeInstance } from "animejs";
import { MutableRefObject, useEffect, useRef } from "react";

export default function Home() {

  const animationRef = useRef<AnimeInstance | null>(null);

  useEffect( () => {
    // animationRef.current = anime(
    //   {
    //   targets: ["#el1"],
    //   translateY: 250,
    //   wifth: "100%",
    //   delay: 50,
    //   loop: false
    // },
    // {
    //   targets: ["#el2"],
    //   translateX: 250,
    //   wifth: "100%",
    //   delay: 50,
    //   loop: false
    // },
    // )

    // setTimeout( () => {
    //   animationRef.current?.play();
    // }, 5000)
    // animationRef.current.play();
  }, [])

  return (
     <MainViewWrapper>
        
        {/* <FlexCol> */}
          {/* <FlexRow> */}
          <MenuElement id="el1">flashcards</MenuElement>
          {/* </FlexRow> */}
          {/* <FlexRow> */}
            <MainPageTitle>voice flashcards</MainPageTitle>
            {/* </FlexRow> */}
          {/* <FlexRow> */}
            <MenuElement id="el4">add flashcards</MenuElement>
            <MenuElement id="el2">Menu</MenuElement>
            <MenuElement id="el3">settings</MenuElement>
          {/* </FlexRow> */}
        {/* </FlexCol> */}

     </MainViewWrapper>
  )
}
