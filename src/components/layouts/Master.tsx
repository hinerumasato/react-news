import { Header, Footer } from '@/components/partials'
import { ILayout } from '@/interfaces'
import {GoTopButton} from "@/components/partials/GoTopButton.tsx";

export const Master: ILayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ marginTop: '140px' }}>
                {children}
            </main>
            <GoTopButton/>
            <Footer />
        </>
    )
}
