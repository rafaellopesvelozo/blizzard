import * as styled from './styles'
import Battle from '../../assets/logo-battle-net.png'
import AppMini from '../../assets/ilustrations/app-mini.png'
import App from '../../assets/ilustrations/app.png'
import MacOS from '../../assets/ilustrations/macOS.png'
import Phone from '../../assets/ilustrations/phone.png'

const Footer = () => {

    return (
        <styled.ContanerFooter >
            <div className='info-content'>
                <div className='download'>
                    <img src={Battle} alt={Battle} />
                    <p className='info-download'>Baixa agora o <br /> battle.net</p>
                </div>

                <div className='content-icons'>
                    <div className='icon-your-games'>
                        <img src="" alt="" />
                        <p className='info-footer'>  Seus jogos em um só lugar</p>
                    </div>

                    <div className='icon-log-in'>
                        <img src="" alt="" />
                        <p className='info-footer'>  Conecte-se aos seus amigos</p>
                    </div>

                    <div className='icon-buy-games'>
                        <img src="" alt="" />
                        <p className='info-footer'>Compre jogos e itens digitais</p>
                    </div>
                </div>

                <div className='system-download'>
                    <button>
                        <img src={MacOS} alt={MacOS} />
                        <p className='info-button'>Baixar para MacOS</p>
                    </button>
                </div>

                <div className='avaliable'> 
                    <img src={Phone} alt={Phone} />
                    <p>  Também disponível como <br /> <span>aplicativo móvel</span></p>
                </div>
            </div>
                
            <div className='mini'>
                 <img className='app' src={App} alt={App} />
                 <img className='app-mini' src={AppMini} alt={AppMini} />
            </div>

        </styled.ContanerFooter>
    );
}
export default Footer;
