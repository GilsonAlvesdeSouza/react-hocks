import React, {useState} from 'react';
import narutoImg from '../../images/naruto.png'
import {Content, NarutoImg} from "./styles";
import {Quotes} from "../../components";
import {getQuote} from '../../services'

export function App() {

    const [quoteState, setQuoteState] = useState({
        quote: "ok",
        speaker: 'Speaker',
    });

    const onUpdate = async () => {
        const quote = await getQuote();
        setQuoteState(quote);
    };

    return (
        <Content>
            <Quotes
                {...quoteState} onUpdate={onUpdate}/>
            <NarutoImg src={narutoImg} alt="Naruto with a kunai"/>
        </Content>
    );
}
