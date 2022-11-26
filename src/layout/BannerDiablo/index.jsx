import * as styled from './styles'
import Game1 from '../../assets/icons-banner-herro/game-1.png'
import Game2 from '../../assets/icons-banner-herro/game-2.png'
import Game3 from '../../assets/icons-banner-herro/game-3.png'
import Game4 from '../../assets/icons-banner-herro/game-4.png'
import Game5 from '../../assets/icons-banner-herro/game-5.png'
import IconDiablo from '../../assets/banners/diablo-icon.png'
import GifDiablo from '../../assets/banners/diablo-gif.gif'
import DiabloPreview from '../../assets/banners/diablo-preview.png'

import BannerHeartStone from '../../components/BannerHeartstone'
import BannerWorldWarCraft from '../../components/BannerWWC'
import { useState } from 'react'

const BannerDiablo = () => {
    const [visibleDiablo, setVisibleDiablo] = useState(true)
    const [visibleHeartStone, setvisibleHeartStone] = useState(false)
    const [visibleWWc, setvisibleWWc] = useState(false)
   

    const handleDiablo = () => {
        setVisibleDiablo(true)
        if (visibleHeartStone === true) {
            setvisibleHeartStone(false)
        }
        if (visibleWWc === true) {
            setvisibleWWc(false)
        }
    }

    const handleHeartStone = () => {
        setvisibleHeartStone(true)
        if (visibleDiablo === true) {
            setVisibleDiablo(false)
        }
        if (visibleWWc === true) {
            setvisibleWWc(false)
        }
    }

    const handleWWC = () => {
        setvisibleWWc(true)
        if (visibleDiablo === true) {
            setVisibleDiablo(false)
        }
        if (visibleHeartStone === true) {
            setvisibleHeartStone(false)
        }
    }

    return (
        <>
            <styled.C >
                <div className='banner-logo'>
                    <img onClick={handleDiablo} className={`${visibleDiablo? "": ""}`} src={Game1} alt={Game1} />
                    <img onClick={handleHeartStone} src={Game2} alt={Game2} />
                    <img onClick={handleWWC} src={Game3} alt={Game3} />
                    <img src={Game4} alt={Game4} />
                    <img src={Game5} alt={Game5} />
                </div>
            </styled.C>

            <styled.ContainerBanner >
                <div className={`${visibleDiablo ? "banner-content" : "transition"}`} >
                    <div className='info-banner'>
                        <div className='banner-title'>
                            <div className='title'>
                                <h1>Retorna à escuridão com o game diablo IV</h1>
                                <p>O retorno de Lilith uma era de escuridão e sofrimento</p>
                            </div>
                            <div className='banner-btn'>
                                <button>Jogue agora</button>
                            </div>
                        </div>

                        <div className='play-now'>
                            <div className='icon'>
                                <img src={IconDiablo} alt={IconDiablo} />
                            </div>
                            <div className='play'>
                                <div className='title-play'>
                                    <p>ASSISTA O TRAILLER</p>
                                </div>
                                <div className='play-gif'>
                                    <img autoPlay="" src={GifDiablo} alt={GifDiablo} width="280" height="158" />
                                    <div
                                        className="img-preview">
                                        <img src={DiabloPreview} alt="diablo-preview" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <BannerHeartStone visibleHeartStone={visibleHeartStone ? true : false} />
                </div>
                <div>
                    <BannerWorldWarCraft visibleWWc={visibleWWc ? true : false} />
                </div>
            </styled.ContainerBanner>
        </>
    );
}

export default BannerDiablo;