import styles from '../../styles/Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={styles.Header}>
            <h1 className='d-sm-block d-none'><i className="bi bi-journal-check"></i> Quick Schedule</h1>
            <h1 className='d-sm-none d-block'>Quick Schedule</h1>
        </header>
    )
}

export default Header