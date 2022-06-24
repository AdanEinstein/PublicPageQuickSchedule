import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "../../styles/Nav.module.css";

interface INavProps {
	pageCurrent: string;
}

const Nav: React.FC<PropsWithChildren<INavProps>> = ({ pageCurrent }) => {
	return (
		<nav className={styles.Nav}>
			<Link href={"#"}>
				<a className={pageCurrent === "Home" && styles.selected}>Home</a>
			</Link>
			<Link href={"#"}>
				<a className={pageCurrent === "Download" && styles.selected}>
					Download
				</a>
			</Link>
			<Link href={"#"}>
				<a className={pageCurrent === "Tutorial" && styles.selected}>
					Tutorial
				</a>
			</Link>
		</nav>
	);
};

export default Nav;
