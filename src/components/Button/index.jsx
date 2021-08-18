import React from "react";
import {string, func} from 'prop-types';
import {StyleBtn} from "./style";

const Button = ({children, onUpdate}) => {
    return <StyleBtn onClick={onUpdate}>{children}</StyleBtn>
};

Button.propTypes = {
    children: string,
    onUpdate: func,
};

export default Button;