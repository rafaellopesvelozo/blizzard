import { useEffect, useState } from 'react'

import * as styled from './styles'

import Battle from '../../assets/logo-battle-net.png'
import AppMini from '../../assets/ilustrations/app-mini.png'
import App from '../../assets/ilustrations/app.png'
import MacOS from '../../assets/ilustrations/macOS.png'
import windows from '../../assets/ilustrations/windows.png'
import linux from '../../assets/ilustrations/linux.png'
import Phone from '../../assets/ilustrations/phone.png'
import IconPlayGames from '../../assets/ilustrations/checkbox.png'
import IconBuy from '../../assets/ilustrations/buy.png'
import IconConnect from '../../assets/ilustrations/three-dots.png'


const Footer = () => {
    const [agent, setAgent] = useState("")

    useEffect(() => {
        const platform = navigator.userAgent.toLocaleLowerCase()
      
        if (platform.includes("mac")) {
            setAgent('mac')
        } else if (platform.includes("windows")) {
            setAgent('win')
        } else if (platform.includes('linux')) {
            setAgent("linux")
        }
        console.log(platform)
    }, [])


    return (
        <styled.ContanerFooter >
            <section className='info-content'>
                <div className='download'>
                    <img src={Battle} alt={Battle} />
                    <p className='info-download'>Baixa agora o <br /> battle.net</p>
                </div>

                <div className='content-icons'>
                    <div className='icon-your-games'>
                        <img src={IconPlayGames} alt="play-your-games" />
                        <p className='info-footer'>  Seus jogos em um só lugar</p>
                    </div>

                    <div className='icon-log-in'>
                        <img src={IconConnect} alt="connect-friends" />
                        <p className='info-footer'>  Conecte-se aos seus amigos</p>
                    </div>

                    <div className='icon-buy-games'>
                        <img src={IconBuy} alt="buy" />
                        <p className='info-footer'>Compre jogos e itens digitais</p>
                    </div>
                </div>

                <div className='system-download'>
                    <button>
                        <div className='info-button'>
                            {agent === "mac" && (
                                <div className='download-for'>
                                    <img src={MacOS} alt={MacOS} />
                                    <p>Baixar para o MacOS</p>
                                </div>
                            )}

                            {agent === "linux" && (
                                <div className='download-for'>
                                    <img src={linux} alt={linux} />
                                    <p>Baixar para o Linux</p>
                                </div>
                            )}

                            {agent === "win" && (
                                <div className='download-for'>
                                    <img src={windows} alt={windows} />
                                    <p>Baixar para o Windows</p>
                                </div>
                            )}
                        </div>
                    </button>
                </div>

                <div className='avaliable'>
                    <img src={Phone} alt={Phone} />
                    <p>  Também disponível como <br /> <span>aplicativo móvel</span></p>
                </div>
            </section>

            <section className='mini'>
                <img className='app' src={App} alt={App} />
                <img className='app-mini' src={AppMini} alt={AppMini} />
            </section>

        </styled.ContanerFooter>
    );
}
export default Footer;
