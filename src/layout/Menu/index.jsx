import { useState } from 'react';
import * as styled from './styles'

import ListGames from '../../components/listGames';
import ListEsports from '../../components/listEsports';

import User from '../../assets/icons/user.png'
import MenuMobile from '../../assets/icons/menu-mobile.png'
import logo from "../../assets/logo-blizzard.png"
import Open from '../../assets/icons/up-arrow.png'
import Close from '../../assets/icons/down-arrow.png'
import Login from '../../components/Login'

const Menu = () => {
    const [gamesVisible, setGamesVisible] = useState(false)
    const [esportsVisible, setEsportsVisible] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)

    const handleOpenLogin = () => {
        setLoginOpen(true)
        if (gamesVisible === true || esportsVisible === true) {
            setEsportsVisible(false)
            setGamesVisible(false)
        }
    }
    const handleCloseLogin = () => {
        setLoginOpen(false)
    }

    
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
                            <li onClick={handleGames} >
                                Jogos
                                <img className={`${gamesVisible ? "arrow-up" : "arrow-down Arrow-Closed"}`} src={Open} alt="" />
                                <img className={`${gamesVisible ? "arrow-up Arrow-Closed" : "arrow-down Arrow-Open"}`} src={Close} alt="" />
                            </li>
                            <li onClick={handleEsports}>
                                Esportes
                                <img className={`${esportsVisible ? "arrow-up" : "arrow-down Arrow-Closed"}`} src={Open} alt="" />
                                <img className={`${esportsVisible ? "arrow-up Arrow-Closed" : "arrow-down Arrow-Open"}`} src={Close} alt="" />

                            </li>

                            <li>Loja</li>
                            <li>Notícias</li>
                            <li>Suporte</li>
                        </ul>
                    </styled.Links>
                </styled.ContainerNav>

                <styled.Login>
                    <styled.crateAccount>
                        <button>Criar conta</button>
                    </styled.crateAccount>
                    <styled.Enter>
                        <button onClick={handleOpenLogin}>
                            <img src={User} alt="user" />
                            Logar
                        </button>
                    </styled.Enter>
                    <div onclick={handleOpenLogin} className='menu-mobile'> 
                        <img src={MenuMobile} alt="icon-menu-mobile" />  
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

            <div>
                <Login
                    isOpen={loginOpen}
                    onRequestClose={handleCloseLogin}
                />
            </div>
        </styled.Content>

    );
}
export default Menu;
