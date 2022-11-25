import * as styled from './styles'
import IconHeartstone from '../../assets/banners/heartstone-icon.png'
import Gifheartstone from '../../assets/banners/heartstone-gif.gif'
import HeartstonePreview from '../../assets/banners/heartstone-preview.png'

const BannerHeartStone = () => {

    return (
        <styled.ContainerBanner>
            <div className='banner-content'>
               
                <div className='info-banner'>
                    <div className='banner-title'>
                        <div className='title'>
                            <h1>Novo pacote de extensão de Heartstone</h1>
                            <p>A horda e a Aliança se encontram no Vale Alterac para lutar</p>
                        </div>
                        <div className='banner-btn'>
                            <button>Reserve agora na pré-venda</button>
                        </div>
                    </div>

                    <div className='play-now'>
                        <div className='icon'>
                            <img src={IconHeartstone} alt="IconSeartstone" />
                        </div>
                        <div className='play'>
                            <div className='title-play'>
                                <p>ASSISTA O TRAILLER</p>
                            </div>
                            <div className='play-gif'>
                                <img src={Gifheartstone} alt="Gifheartstone" width="280" height="158" />
                                <div
                                    className="img-preview">
                                    <img src={HeartstonePreview} alt="HeartstonePreview" />
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

export default BannerHeartStone;