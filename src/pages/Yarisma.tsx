import React from 'react'
import GameBall from '../component/atoms/GameBall'

function Yarisma() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">
                <GameBall isFill={true} teamNumber={1} />
                <GameBall isFill={false} teamNumber={1} />
                <GameBall isFill={true} teamNumber={2} />
                <GameBall isFill={false} teamNumber={2} />
            </div>
            <div className="col-3">

            </div>
        </div>
    </div>
  )
}

export default Yarisma