import * as styled from './styles'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import iconExclusive1 from '../../assets/icons/icon-exclusive-games1.png'
import iconExclusive2 from '../../assets/icons/icon-exclusive-games2.png'
import iconExclusive3 from '../../assets/icons/icon-exclusive-games3.png'
import iconExclusive4 from '../../assets/icons/icon-exclusive-games4.png'
import Logo from '../../assets/logo-blizzard.png'
import Grid from '../../assets/icons/grid.png'


const Exclusive = () => {
    const [listGamesEsclusive, setlistGamesEsclusive] = useState([])

    useEffect(() => {
        api.get('api/blizzard/games').then(({ data }) => {
            setlistGamesEsclusive(data)
        })
    }, [])


    return (
        <styled.ContentExclusiveGames>
            <div className='head-games'>
                <div className='info-games'>
                    <div className='games'>
                        <p>GAMES</p>
                    </div>
                    <div className='exclusive-title'>
                        <p>Jogos <br /> exclusivos</p>
                    </div>
                    <div className='icons'>
                        <img src={iconExclusive1} alt={iconExclusive1} />
                        <img src={iconExclusive2} alt={iconExclusive2} />
                        <img src={iconExclusive3} alt={iconExclusive3} />
                        <img src={iconExclusive4} alt={iconExclusive4} />
                    </div>
                </div>
                <div className='all-games'>
                    <div className='iconAllGames'>
                        <img src={Grid} alt={Grid} />
                    </div>
                    <p>Ver todos os jogos</p>
                </div>
            </div>
            <div className='exclusive-cards'>
                {
                    listGamesEsclusive.length === 0 && (
                        <p>Carregando....</p>
                    )
                }

                {
                    listGamesEsclusive.map(items => (

                        <div className='cards' key={items.name}>
                            <div className='card-image'>
                                <img className='image' src={items.image} alt={items.image} />
                                <img className='logo' src={items.logo} alt={items.logo} />
                            </div>

                            <p className='name'>{items.name}</p>
                            <p className='name-category'>{items.category}</p>
                        </div>
                    ))
                }
                <div className='card-view-all-games'>
                    <div className='img-card-view-all-games'>
                        <img src={Logo} alt={Logo} />
                    </div>
                    <div className='card-view-all-games-grid'>
                        <img src={Grid} alt={Grid} />
                        <p>Ver todos os jogos</p>
                    </div>
                </div>
            </div>
        </styled.ContentExclusiveGames>
    );
}
export default Exclusive;
