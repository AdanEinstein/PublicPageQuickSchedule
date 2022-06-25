import Footer from "./Footer"
import Header from "./Header"
import styles from '../../styles/Layout.module.css'
import { PropsWithChildren } from "react"
import Nav from "./Nav"

interface ILayoutProps{
    page: string
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({children, page}) => {
    return (
        <div className={styles.Layout}>
            <Header/>
            <Nav pageCurrent={page}/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout