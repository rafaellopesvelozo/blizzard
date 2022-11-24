import * as styled from './styles'
import logo from "../../assets/logo-blizzard.png"
import ListGames from '../../components/listGames';
import { useState } from 'react';
import ListEsports from '../../components/listEsports';


const Menu = () => {
    const [gamesVisible, setGamesVisible] = useState(false)
    const [esportsVisible, setEsportsVisible] = useState(false)

    const handleGames = () => {
        setGamesVisible(!gamesVisible)
        if (esportsVisible === true) {
            setEsportsVisible(false)
        }
    }

    const handleEsports = () => {
        setEsportsVisible(!esportsVisible)
        if (gamesVisible === true) {
            setGamesVisible(false)
        }
    }
    return (
        <styled.Content>
            <styled.Header>
                <styled.ContainerNav>
                    <div>
                        <img src={logo} alt={logo} />
                    </div>
                    <styled.Links>
                        <ul>
                            <li onClick={handleGames} >Jogos</li>
                            <li onClick={handleEsports}>Esportes</li>
                            <li>Loja</li>
                            <li>Notícia</li>
                            <li>Suporte</li>
                        </ul>
                    </styled.Links>

                </styled.ContainerNav>

                <styled.Login>
                    <styled.crateAccount>
                        <button>Criar conta</button>
                    </styled.crateAccount>
                    <styled.Enter>
                        <button>Logar</button>
                    </styled.Enter>
                    <div>

                    </div>
                </styled.Login>
            </styled.Header>

            <hr />

            <div>
                <ListGames game={gamesVisible ? true : false} />
            </div>

            <div>
                <ListEsports esports={esportsVisible ? true : false} />
            </div>
        </styled.Content>


    );
}
export default Menu;
