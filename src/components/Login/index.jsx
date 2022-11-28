import * as styled from './styles'

const Login = ({ isOpen, onRequestClose }) => {
    if (!isOpen) {
        return null
    }

    return (
        <styled.ContainerLogin>
            <div>
                <button onClick={onRequestClose}>
                    close modal X
                </button>
            </div>

            <form action="#">
                <input type="text" name="" id="" />
                <input type="password" name="" id="" />
                <div>
                    <button>Conectar-se</button>
                </div>
            </form>

            <div>
                <p>ou conectar-se com</p>
            </div>
            <div>
                <p><span>Crie uma conta</span> Battle.net de graça</p>
                <p>Não consegue logar ?</p>              
            </div>
            <h1>login</h1>



        </styled.ContainerLogin>

    );
}
export default Login;
