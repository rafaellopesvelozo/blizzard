import * as styled from './styles'

import IconWWC from '../../assets/banners/world-warcraft-icon.png'
import GifWWC from '../../assets/banners/world-warcraft.gif'
import PreviewWWC from '../../assets/banners/worldwarcraft-preview.png'

import IconPlayPolygon from '../../assets/icons-play/Polygon.png'
import IconPlayEllipse from '../../assets/icons-play/Ellipse.png'

const BannerWorldWarCraft = ({visibleWWc}) => {
    if(!visibleWWc){
        return null
    }
    return (
        <styled.ContainerBanner>
            <div className='banner-content'>
                <div className='info-banner'>
                    <div className='banner-title'>
                        <div className='title'>
                            <h1>Desbrabe as terras sombrias em Shadowlands!</h1>
                            <p>O que jaz além do mundo que você conhece?</p>
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

                                <div className='button-play'>
                                    <img className='icon-play-polygon' src={IconPlayPolygon} alt="icon-play-polygon" />
                                    <img className='icon-play-ellipse' src={IconPlayEllipse} alt="icon-play-ellipse" />
                                </div>

                                <div className="img-preview">
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