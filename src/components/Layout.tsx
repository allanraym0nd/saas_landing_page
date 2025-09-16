import { NavBar } from './elements/NavBar.tsx'
import { Footer } from './elements/Footer.tsx'
import { useEffect } from 'react'

interface LayoutProps {
    title: string,
    children: React.ReactNode
}

export const Layout = ({title,children}: LayoutProps) => {

    useEffect(() => {
        document.title = title

    }, [title])
    
    return (
    <>

    <NavBar />

    <main className = "flex flex-col gap-y-20 md:gap-y-32 overflow-hidden" >{children}</main>

    <Footer />

    </>
    )

}