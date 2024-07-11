import { Header, Footer } from '@/components/partials'
import { ILayout } from '@/interfaces'
import { ThemeToggleButton } from '../vendors/Buttons/ThemeToggleButton'

export const Master: ILayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ marginTop: '80px' }}>
                {children}
            </main>
            <Footer />
            <ThemeToggleButton />
        </>
    )
}
