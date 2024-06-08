import { Header, Footer } from '@/components/partials'
import { ILayout } from '@/interfaces'

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
