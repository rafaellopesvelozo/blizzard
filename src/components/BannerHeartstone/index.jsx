import * as styled from './styles'
import IconHeartstone from '../../assets/banners/heartstone-icon.png'
import Gifheartstone from '../../assets/banners/heartstone-gif.gif'
import HeartstonePreview from '../../assets/banners/heartstone-preview.png'

import IconPlayPolygon from '../../assets/icons-play/Polygon.png'
import IconPlayEllipse from '../../assets/icons-play/Ellipse.png'
import IconUser from '../../assets/icons/user.png'

const BannerHeartStone = ({visibleHeartStone}) => {
    if(!visibleHeartStone){
        return null
    }

    return (
        <styled.ContainerBanner>
            <section className='banner-content'>
                <div className='info-banner'>
                    <div className='banner-title'>
                        <div className='title'>
                            <h1>Novo pacote de extensão de Heartstone</h1>
                            <p>A horda e a Aliança se encontram no Vale Alterac para lutar</p>
                        </div>
                        <div className='banner-btn'>
                          <button>
                                <img src={IconUser} alt="icon-user" />
                                 Reserve agora na pré-venda
                          </button>
                        </div>
                    </div>
                    <div className='play-now'>
                        <div className='icon'>
                            <img src={IconHeartstone} alt="IconSeartstone" />
                        </div>
                        <section className='play'>
                            <div className='title-play'>
                                <p>ASSISTA O TRAILLER</p>
                            </div>
                            <div className='play-gif'>
                                <img src={Gifheartstone} alt="Gifheartstone" width="280" height="158" />
                                <div className='button-play'>
                                    <img className='icon-play-polygon' src={IconPlayPolygon} alt="icon-play-polygon" />
                                    <img className='icon-play-ellipse' src={IconPlayEllipse} alt="icon-play-ellipse" />
                                </div>
                                <div className="img-preview">
                                    <img src={HeartstonePreview} alt="HeartstonePreview" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div id="current-arrow"></div>
            </section>
        </styled.ContainerBanner>
    );
}

export default BannerHeartStone;