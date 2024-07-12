import { Header, Footer } from '@/components/partials'
import { ILayout } from '@/interfaces'

export const Master: ILayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ marginTop: '140px' }}>
                {children}
            </main>
            <Footer />
        </>
    )
}
