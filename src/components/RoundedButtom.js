import React from 'react';

export const RoundedButtom = props =>
{
    return(
            <div>
            <button className={ 'text-white font-bold py-2 px-4 rounded ' + ( props.color ) }>{props.text}</button>
            </div>
        );
}