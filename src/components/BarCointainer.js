import React from 'react';
import Bar from './Bar'

export default function BarContainer({queue}) {
    // console.log(queue.map(entry => entry.loggedAt));
    // console.log(queue.map(entry => entry.inQueue));

    return (
        <section className="bar-container">
            <h1>The Distortion Bar</h1>
            <Bar queue={queue}/>
        </section>
    )
}
