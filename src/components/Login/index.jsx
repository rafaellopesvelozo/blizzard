import * as styled from './styles'
import Battlenet from '../../assets/logo-battle-net.png'
import Facebook from '../../assets/login/facebook.png'
import Apple from '../../assets/login/apple.png'
import Google from '../../assets/login/google.png'

const Login = ({ isOpen, onRequestClose }) => {
    if (!isOpen) {
        return null
    }

    return (
        <styled.ContainerLogin>
            <div className='content-form'>
                <div className='btn-close-modal'>
                    <button onClick={onRequestClose}>
                        X
                    </button>
                </div>
                <div className="form">
                    <div className='logo-battle'>
                        <img src={Battlenet} alt="logo-battlenet" />
                    </div>

                    <form action="#">
                        <input type="text" name="text" id="text" placeholder='E-mail ou telefone' autoFocus />
                        <input type="password" name="password" id="ássword" placeholder='Senha' />
                        <div className='btn-connect-login'>
                            <button>Conectar-se</button>
                        </div>
                    </form>

                    <div className='connect-with'>
                        <p>ou conectar-se com</p>
                    </div>

                    <div className='connect-icons-login'>
                        <div className='login-icons'>
                            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer"><img src={Google} alt="icon-google" /></a>
                        </div>
                        <div className='login-icons'>
                            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer"> <img src={Apple} alt="icon-apple" /></a>

                        </div>
                        <div className='login-icons'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img src={Facebook} alt="icon-facebook" /></a>
                        </div>
                    </div>
                    <div className='create-account'>
                        <p><span>Crie uma conta</span> Battle.net de graça</p>
                        <p>Não consegue logar?</p>
                    </div>
                </div>
            </div>

        </styled.ContainerLogin>

    );
}
export default Login;
