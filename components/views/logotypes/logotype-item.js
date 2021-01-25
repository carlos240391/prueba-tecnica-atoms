import React from 'react';
import { LogotypesItem } from './logotypes-styles';

const LogotypeItem = (props) => {

    const {item} = props

    return (
        <>
            <img src={item.logo} alt=""/>
        </>
    );
};

export default LogotypeItem;