import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import '../styles/graph.css';

export default function Graph(props) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue; //reducer for summing an array
    const avg = Math.round(props.data.reduce(reducer) / props.data.length );

    return (
        <div>
            <Sparklines data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average: {avg} {props.units}</div>
        </div>        
    );
}