import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";

// Windows
const urlWindows =
	"https://drive.google.com/file/d/12SJ2sOQvNAUCUSaRw9Q15zPkVJazGgAS/view";
// MacOS
const urlMac =
	"https://drive.google.com/file/d/1XcOeKPxMjpRH6sI6U1vU5sZbBrThiTPZ/view";

const urlLinux = 
	"https://drive.google.com/file/d/1rBtixqXlAC84VA-_TTTggB3k3BvvoN2L/view"

const Download: React.FC = () => {
	// const [download, setDownload] = useState<string>();
	return (
		<Layout page="Download">
			<div className="container h-100 d-flex flex-column flex-sm-row justify-content-center align-items-center justify-content-sm-around">
				<div>
					<h1>Efetue o download aqui!</h1>
					<p className="fs-5">
						Um ótimo sistema de agenda e finanças para para você!
					</p>
					<p className="fs-5">
						Sistemas operacionais{" "}
						<strong className="text-success">Windows</strong> {" "},{" "}
						<strong className="text-info">MacOS</strong> e{" "}
						<strong className="text-secondary">Linux</strong>
					</p>
					<h4>Aproveite!</h4>
				</div>
				<div className="d-flex">
					<Link href={urlWindows}>
						<a
							target={"_blank"}
							className="btn btn-lg btn-success m-1"
						>
							Windows <i className="bi bi-windows"></i>
						</a>
					</Link>
					<Link href={urlMac}>
						<a
							target={"_blank"}
							className="btn btn-lg btn-info m-1"
						>
							MacOS <i className="bi bi-apple"></i>
						</a>
					</Link>
					<Link href={urlLinux}>
						<a
							target={"_blank"}
							className="btn btn-lg btn-secondary m-1"
						>
							Linux <i className="bi bi-ubuntu"></i>
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default Download;
