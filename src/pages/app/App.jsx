import React, {useEffect, useRef, useState} from 'react';
import narutoImg from '../../images/naruto.png'
import {Content, NarutoImg} from "./styles";
import {Quotes} from "../../components";
import {getQuote} from '../../services'
import jutsoSound from '../../sounds/jutso.mp3'

const audio = new Audio(jutsoSound);

export function App() {

    const [quoteState, setQuoteState] = useState({
        quote: "Loading...",
        speaker: 'Loading speaker...',
    });

    const isMounted = useRef(true);

    const onUpdate = async () => {
        const quote = await getQuote();

        if (isMounted.current) {
            audio.play();
            setQuoteState(quote);
        }
    };

    useEffect(() => {
        onUpdate();
        return () => isMounted.current = false;
    }, []);

    return (
        <Content>
            <Quotes
                {...quoteState} onUpdate={onUpdate}/>
            <NarutoImg src={narutoImg} alt="Naruto with a kunai"/>
        </Content>
    );
}
