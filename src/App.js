import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';

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
