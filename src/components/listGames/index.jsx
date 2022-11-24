import { useEffect, useState } from 'react'

import * as styled from './styles'
import { api } from '../../services/api'
import Forum from "../../assets/icons/forum.png"
import Menu from "../../assets/icons/menu.png"
import Download from "../../assets/icons/download.png"
import Spinner from "../../assets/icons/spinner.png"

const ListGames = ({ game, esports }) => {
    const [listGames, setListGames] = useState([])

    useEffect(() => {
        api.get('api/blizzard/games').then(({ data }) => {
            setListGames(data)
        })
    }, [])

    if (!game) {
        return null
    }

    return (
        <styled.contentGames>
            <ul>
                {
                    listGames.length === 0 && (
                        <div>
                            <p>Carregando...</p>
                        </div>
                    )
                }
                {
                    listGames.map(games => (
                        <styled.Cards key={games.name}>
                            <img src={games.logo} alt={games.logo} />
                            <p>{games.name}</p>
                        </styled.Cards>
                    ))
                }
            </ul>

            <styled.menuContent >
                <div>
                    <img src={Menu} alt={Menu} />
                    <p>Ver todos os jogos</p>
                </div>
                <div>
                    <img src={Spinner} alt={Spinner} />
                    <p>Aplicativo battle.net</p>
                </div>
                <div>
                    <img src={Download} alt={Download} />
                    <p>Downloads</p>
                </div>
                <div>
                    <img src={Forum} alt={Forum} />
                    <p>Forum dos jogos</p>
                </div>
            </styled.menuContent >

        </styled.contentGames>
    );
}

export default ListGames;