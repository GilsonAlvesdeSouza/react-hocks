import React from "react";
import {string, func} from 'prop-types';
import {Quote, Speaker, Wrapper} from "./style";
import Button from "../Button";

export const Quotes = ({
                           quote, speaker, onUpdate
                       }) => {
    return (
        <Wrapper>
            <Quote>{quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button onUpdate={onUpdate}>Quote No Jutsu</Button>
        </Wrapper>
    );
};

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
};

export default Quotes;
