import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { publicRoutes } from './routes/routes';
import { DefaultLayout } from 'Layout';

// Configure Firebase.

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/data')

            .then((res) => setData(res.data))
            .catch((e) => {
                console.log(e);
                console.log('Lỗi tải dữ liệu!');
            });
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page data={data} />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
