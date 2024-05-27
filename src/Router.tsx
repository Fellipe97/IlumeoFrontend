import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { PointRegister } from './pages/PointRegister';


export function Router() {

    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />
            
            <Route
                path="/pointRegister/:code"
                element={<PointRegister />}
            />


            <Route path="*"
                element={<Home />}
            />
        </Routes>
    )
}


///    24=(:S}3K9x?