import Link from "next/link";
import styles from "../../styles/Footer.module.css";

const Footer: React.FC = () => {
	return (
		<footer className={styles.Footer}>
			<p>
				<span className='d-md-inline d-none'>&copy; Todos os direitos reservados a Adan Einstein</span>
				<span className='d-md-none d-inline'>&copy; Direitos a Adan Einstein</span>
				<Link href={"https://linkedin.com/in/adaneinstein"}>
					<a className="mx-2 btn btn-primary" target={"_blank"}>
						<i className="bi bi-linkedin"></i>
					</a>
				</Link>
				<Link href={"https://github.com/adaneinstein"}>
					<a className="btn btn-secondary" target={"_blank"}>
						<i className="bi bi-github"></i>
					</a>
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
