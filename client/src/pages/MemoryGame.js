import React, { useState } from 'react';
import Card from '../components/Card';

const MemoryGame = () => {
  const [signs, setsigns] = useState([
    { id: 1, img: '/img/numbers/asl-number-1.png', stat : "" },
    { id: 1, img: '/img/numbers/number-1.png', stat : "" },
    { id: 2, img: '/img/numbers/asl-number-2.png', stat : "" },
    { id: 2, img: '/img/numbers/number-2.png', stat : "" },
    { id: 3, img: '/img/numbers/asl-number-3.png', stat : "" },
    { id: 3, img: '/img/numbers/number-3.png', stat : "" },
    { id: 4, img: '/img/numbers/asl-number-4.png', stat : "" },
    { id: 4, img: '/img/numbers/number-4.png', stat : "" },
    { id: 5, img: '/img/numbers/asl-number-5.png', stat : "" },
    { id: 5, img: '/img/numbers/number-5.png', stat : "" },
    { id: 6, img: '/img/numbers/asl-number-6.png', stat : "" },
    { id: 6, img: '/img/numbers/number-6.png', stat : "" },
    // { id: 7, img: '/img/asl-number-7.png', stat: "" },
    // { id: 7, img: '/img/number-7.png', stat: "" },
    // { id: 8, img: '/img/asl-number-8.png', stat: "" },
    // { id: 8, img: '/img/number-8.png', stat: "" },
  ].sort(() => Math.random() - 0.5))

const [prev, setPrev] = useState(-1)

    function check(current){
        if(signs[current].id === signs[prev].id){
            signs[current].stat = "correct"
            signs[prev].stat = "correct"
            setsigns([...signs])
            setPrev(-1)
        }else{
            signs[current].stat = "wrong"
            signs[prev].stat = "wrong"
            setsigns([...signs])
            setTimeout(() => {
                signs[current].stat = ""
                signs[prev].stat = ""
                setsigns([...signs])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            signs[id].stat = "active"
            setsigns([...signs])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { signs.map((sign, index) => (
                <Card 
                key={index} 
                sign={sign} 
                id={index} 
                handleClick={handleClick} 
                />
            )) }
        </div>
    )
}

export default MemoryGame;