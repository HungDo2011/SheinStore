import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import axios from 'axios';

import { publicRoutes } from './routes/routes';
import { DefaultLayout } from 'Layout';
import config from 'config';

// Configure Firebase.

firebase.initializeApp(config.firebaseConfig);

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_BASE_URL)

            .then((res) => {
                return setData(res.data);
            })
            .catch((e) => alert('Lỗi tải dữ liệu! '));
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
