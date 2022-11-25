import * as styled from './styles'

import IconWWC from '../../assets/banners/world-warcraft-icon.png'
import GifWWC from '../../assets/banners/world-warcraft.gif'
import PreviewWWC from '../../assets/banners/worldwarcraft-preview.png'

const BannerWorldWarCraft = () => {
    return (
        <styled.ContainerBanner>
            <div className='banner-content'>
                <div className='info-banner'>
                    <div className='banner-title'>
                        <div className='title'>
                            <h1>Desnrabe as terras sombrias em Shadowlands!</h1>
                            <p>O que jaz alpem do mundo que você conhece</p>
                        </div>
                        <div className='banner-btn'>
                            <button>Reserve agora na pré-venda</button>
                        </div>
                    </div>

                    <div className='play-now'>
                        <div className='icon'>
                            <img src={IconWWC} alt="world-warcraft" />
                        </div>
                        <div className='play'>
                            <div className='title-play'>
                                <p>ASSISTA O TRAILLER</p>
                            </div>
                            <div className='play-gif'>
                                <img src={GifWWC} alt="world-warcraft" width="280" height="158" />
                                <div
                                    className="img-preview">
                                    <img src={PreviewWWC} alt="world-warcraft" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>

            </div>

        </styled.ContainerBanner>
    );
}

export default BannerWorldWarCraft;