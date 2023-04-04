import React, { FC, useEffect, useState } from "react";
import { ButtonContainer, FlashcardContentField, FlashcardsWord, FlashcardWrapper } from "./Flashcard.styled";
import { useRef, MutableRefObject } from 'react';
import anime from "animejs";
import { Button } from "../Button/Button";
import { icons } from '@/utils/icons';

export interface IFlashcard {
    zeroSize?: boolean;
    flashcardState: string[];
}

const Flashcard: FC<IFlashcard> = (props) => {
    const {flashcardState} = props;

    const [flashCardContentState, setFlashCardContentState] = useState<string[]>([]);
    const cardSize = useRef<{width: number, height: number}>({width: 0, height: 0});

    useEffect( () => {
        setFlashCardContentState(flashcardState);
    }, [flashcardState]);

    useEffect( () => {
        if(flashCardContentState.length === 0){
            newFlashcardAnimation();
        }else if(flashCardContentState.length === 1){
            rotateFlashcard();
        }
    }, [flashCardContentState])
    const newFlashcardAnimation = () => {
        anime({
            targets: ".flashcard-id",
            width: "100%",
            height: "100%",
            duration: 1000,
            easing: 'easeOutCirc'
        })
        anime({
            targets: ".flashcard-id-content",
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInBack'
        })
    }

    const rotateFlashcard = () => {
        anime({
            targets: ['#flashcard-id', '.flashcard-element'],
            rotateY: [{ value: "180deg", duration: 1800 }]
        })
    }


    const onInputChange = (e: any) => {
        const value = e.target.value;
    }

    const isVisible = !!cardSize.current.width || !!cardSize.current.height;
    console.log(cardSize.current);
    return (
        <FlashcardWrapper>
            <FlashcardContentField className="flashcard-id">
                <FlashcardsWord className="flashcard-element flashcard-id-content" onChange={onInputChange}/>
                <ButtonContainer className="flashcard-element flashcard-id-content"><Button text="Accept" icon={icons.accept} iconColor="green" onClick={() => console.log()}/></ButtonContainer>     
            </FlashcardContentField>
        </FlashcardWrapper>
    )
}

export default Flashcard;