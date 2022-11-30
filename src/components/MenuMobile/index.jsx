import * as styled from './styles'
import LogoMenu from '../../assets/logo-blizzard.png'
const MenuMob = ({menu}) => {
    if(!menu){
        return null
    }

    return (
        <styled.ContentMobile >
            
            <ul className={`${menu? "ul hover ":"ul hover"}`}>
                <img src={LogoMenu} alt="logo-menu-mobile" />
                <li>Jogos</li>
                <li>Esportes</li>
                <li>Loja</li>
                <li>Notícias</li>
                <li>Suporte</li>
            </ul>
        </styled.ContentMobile>
    );
}

export default MenuMob;