import { hex2rgb, validHex } from '../../utils';
import classes from './main.module.css';

import React, { useState } from 'react'

export const Main = () => {
    const [valueColor, setValueColor] = useState('#');
    const [valueRgb, setValueRgb] = useState('rgb');
    const [valueClass, setValueClass] = useState('#fffff')

    function handlerColor({target}: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue = target.value;
        setValueColor(inputValue);

        if (inputValue.length >= 7 && !validHex(inputValue)) {
            setValueRgb('Ошибка');
            setValueClass('#FA8072');
        } else if (inputValue.length === 7 && validHex(inputValue)) {
            setValueRgb(hex2rgb(inputValue));
            setValueClass(inputValue);
        } else {
            setValueRgb('rgb');
            setValueClass('#ffff');

        }

    }

  return (
    <div 
        className={classes.container}
        style={{backgroundColor: `${valueClass}`}}
    >
        <input 
            type="text" 
            value={valueColor}
            onChange={handlerColor}
        />
        <div className={classes.rgb}>
            {valueRgb}
        </div>
    </div>
  )
}
