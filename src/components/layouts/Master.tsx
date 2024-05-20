import { Header } from '../partials/Header'
import { Footer } from '../partials/Footer'
import { ILayout } from '../../interfaces'

export const Master: ILayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
