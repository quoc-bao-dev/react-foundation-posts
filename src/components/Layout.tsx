import { PropsWithChildren } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen relative">
            <div className="sticky top-0">
                <Header />
            </div>

            {children}

            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Layout