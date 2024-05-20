import { BrowserRouter, Route, Routes } from "react-router-dom"
import { pageRoutes } from "./routes"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {pageRoutes.map((route, index) => {
                    const { path, Component, Layout } = route;
                    return (
                        <Route key={index} path={path} element={(
                            <Layout>
                                <Component />
                            </Layout>
                        )} />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default App
