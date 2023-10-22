import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../../screens/login'
import SignUp from '../../screens/signup'
import BloodDonor from '../../BloodDonor'
import BloodAcceptor from '../../BloodAcceptor'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='BloodDonor' element={<BloodDonor />} />
                <Route path='BloodAcceptor' element={<BloodAcceptor />} />
            </Routes>
        </Router>
    )
}