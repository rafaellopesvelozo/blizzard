import * as styled from './styles'

import HeartStone from '../../assets/esports/heart-stone.png'
import OverWatch from '../../assets/esports/Overwatch-World-Cup.png'
import OverWatchLeague from '../../assets/esports/Overwatch-League.png'
import ArenaWorldCupr from '../../assets/esports/awc.png'
import StarCraft from '../../assets/esports/star-craft.png'

const ListEsports = ({esports, open}) => {
    if(!esports){
        return null
    }
    return (
        <styled.Container>
            <ul>
                <div >
                   <img src={HeartStone} alt="heart-stone" />
                   <p>Heartstone masters</p>
                </div>
                <div >
                   <img src={ArenaWorldCupr} alt="arena-world-cup" />
                   <p>Campeonato Muncial de Arena WoW</p>
                </div>
                <div >
                   <img src={StarCraft} alt="star-craft" />
                   <p>StarCraft II WCS</p>
                </div>
                <div >
                   <img src={OverWatch}alt="overwatch" />
                   <p>Copa Mundial de Overwatch</p>
                </div>
                <div >
                   <img src={OverWatchLeague} alt="over-watch-league" />
                   <p>Liga de Overwatch</p>
                </div>
            </ul>
        </styled.Container>

    );
}

export default ListEsports;