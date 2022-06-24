import Footer from "./Footer"
import Header from "./Header"
import styles from '../../styles/Layout.module.css'
import { PropsWithChildren } from "react"
import Nav from "./Nav"

interface ILayoutProps{

}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({children}) => {
    return (
        <div className={styles.Layout}>
            <Header/>
            <Nav pageCurrent="Home"/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout