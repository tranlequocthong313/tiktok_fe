import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactModal from 'react-modal';

import { publicRoutes } from './routes';
import { DefaultLayout } from '~/layouts';

ReactModal.setAppElement('#root');

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map(({ path, Component, Layout = DefaultLayout }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    ))}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
