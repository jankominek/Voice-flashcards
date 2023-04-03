import React, { FC } from "react"
import { IconType } from "react-icons";
import { ButtonText, ButtonWrapper, IconWrapper } from "./Button.styled"


export interface IButton {
    icon?: React.ReactElement<IconType>;
    text: string;
    iconColor?: string;
    onClick: () => void;
    small?: boolean;
    medium?: boolean;
    large?: boolean
}

export const Button: FC<IButton> = (props) => {

    const {text, icon, iconColor} = props;
    return (
        <ButtonWrapper>
            {icon && <IconWrapper color={props?.iconColor}>{icon}</IconWrapper>}
            <ButtonText>{text}</ButtonText>
        </ButtonWrapper>
    )
}
