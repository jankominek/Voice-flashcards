import { Button } from "@/components/Button/Button";
import Flashcard from "@/components/Flashcard/Flashcard";
import { FlashcardButtonContainer, FlashcardContentWrapper, FlashcardPageWrapper } from "@/styles/FlashcardPage.styled";
import { icons } from "@/utils/icons";
import React from "react";

const AddFlashCardPage = () => {

    return (
        <FlashcardPageWrapper>
            <FlashcardContentWrapper>
                <Flashcard />
                <FlashcardButtonContainer>
                    <Button text='Clear' onClick={() => console.log()} icon={icons.cancel} iconColor="red"/>
                    <Button text='Record' onClick={() => console.log()} icon={icons.recordIcon} iconColor="red"/>
                    <Button text='Save' onClick={() => console.log()} icon={icons.accept} iconColor="green"/>
                </FlashcardButtonContainer>
            </FlashcardContentWrapper>
        </FlashcardPageWrapper>
    )
}

export default AddFlashCardPage;