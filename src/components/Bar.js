import React from 'react';
import { Chart, LineAdvance, Tooltip } from 'bizcharts';

export default function Bar({queue}) {
    const data = [];    
    queue.forEach(entry => {
        const newDate = entry.loggedAt.substring(entry.loggedAt.indexOf(" ")+1);
        data.push({inQueue: entry.inQueue, date: newDate})
    });
    
    
    let latestQueue = {
        inQueue: 0,
        date: "00:00:00",
    };
    if(data.length !== 0) {
        console.log(data);
        latestQueue = data[data.length-1]
        console.log(latestQueue);
    }
    

    return (
        <div className="bar">
            <p>Current people in queue: {latestQueue.inQueue}</p>
            <p className="last-update">Updates every 5 seconds (last update: {latestQueue.date})</p>
            <Chart padding={[10, 20, 60, 40]} autoFit width={700} height={300} data={data} interactions={['active-region']} scale={{ inQueue: { min: 0, max: 25 }}}>
                <Tooltip shared />
                <LineAdvance
                    shape="smooth"
                    point
                    area
                    position="date*inQueue"
                    color="rebeccapurple"
                />
            </Chart>
        </div>
    )
}