import React from 'react'
import GameBall from '../component/atoms/GameBall'
import GameLine from '../component/molecules/GameLine'
import TeamCard from '../component/molecules/TeamCard';

function Yarisma() {
    const aTeamList = [true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    const bTeamList = [true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <TeamCard teamName='A Takımı' teamNumber={1} />
            </div>
            <div className="col-6 d-flex flex-wrap align-content-around" style={{minHeight:'400px'}}>
                <GameLine teamNumber={1} pointList={aTeamList} />
                <GameLine teamNumber={2} pointList={bTeamList.reverse()} />
            </div>
            <div className="col-3">
                <TeamCard teamName='B Takımı' teamNumber={2} />
            </div>
        </div>
    </div>
  )
}

export default Yarisma