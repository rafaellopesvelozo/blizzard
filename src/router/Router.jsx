import{Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'

function Router (){
    return(
        <Routes>
            <Route path='/login' element={ <Login />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}
export default Router