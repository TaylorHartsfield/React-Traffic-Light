import { useState, useEffect } from 'react';
import Light from './Light.jsx'

export default function TrafficBase() {
    
    const [time, setTime] = useState(1)
    const [red, setRed] = useState('off')
    const [yellow, setYellow] = useState('off')
    const [green, setGreen] = useState('on')

    function on() {
        if (time <= 3){
            setGreen('')
            setYellow('off')
            setRed('off')
        }
        else if (time <= 6 && time > 3){
            setYellow('')
            setRed('off')
            setGreen('off')
            
        } else {
            setRed('');
            setYellow('off')
            setGreen('off')
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 9){
                setTime(0)
                on();
            } else {
                setTime(time + 1);
                on();
                }}, 1000);
        return () => clearInterval(interval)
    }, [time]);

    return (
        <div>
            <div className='base'>
                <Light className={`green ${green}`}/>
                <Light className ={`yellow ${yellow}`}/>
                <Light className={`red ${red}`}/>
            </div>
        </div>
    )
}