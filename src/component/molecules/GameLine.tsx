import React from 'react'
import GameBall from '../atoms/GameBall'
interface IGameLineProps{
    teamNumber: number, // takım numarası 1-2
    pointList: boolean[] // bildikleri soru adedi  [true,true,false,false......]
}
function GameLine(props: IGameLineProps) {
  return (
    <div className='col-12 p-2 shadow rounded-4' >
        {
            // bize gelen true,false listesini dönerek topları listeliyoruz.
            props.pointList.map((data,index)=>{
                return <GameBall isFill={data} teamNumber={props.teamNumber}/>
            })
        }
        
    </div>
  )
}

export default GameLine