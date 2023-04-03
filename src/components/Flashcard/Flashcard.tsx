import React, { FC, useEffect } from "react";
import { FlashcardContentField, FlashcardsWord, FlashcardWrapper } from "./Flashcard.styled";
import { useRef, MutableRefObject } from 'react';

export interface IFlashcard {
    zeroSize?: boolean;
}

const Flashcard: FC<IFlashcard> = (props) => {
    const {zeroSize} = props;

    const cardSize = useRef<{width: number, height: number}>({width: 0, height: 0});

    useEffect( () => {
        if(cardSize.current){
            cardSize.current.width = 100;
            cardSize.current.height = 100;
        }
    }, [])

    const isVisible = !!cardSize.current.width || !!cardSize.current.height;
    console.log(cardSize.current);
    return (
        <FlashcardWrapper>
            {cardSize.current && <FlashcardContentField zeroSize={isVisible} height={cardSize?.current.height} width={cardSize.current.width}>
                {isVisible && <FlashcardsWord>Test</FlashcardsWord>}
            </FlashcardContentField>}
            
        </FlashcardWrapper>
    )
}

export default Flashcard;