import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";

// Windows
const urlWindows =
	"https://mega.nz/file/uG5iDIKQ#4Q8F-KoCDUWvS3jTHpYW3mXTulU9VWJgSV30kHnidRY";
// MacOS
const urlMac =
	"https://mega.nz/file/qfJjwDAa#EhCVQTZAB_4c_jYgkwY_OXhYPhAo_PwPAhAk_X9n1gM";

const Download: React.FC = () => {
	// const [download, setDownload] = useState<string>();
	return (
		<Layout page="Download">
			<div className="container h-100 d-flex flex-column flex-sm-row justify-content-center align-items-center justify-content-sm-around">
				<div>
					<h1>Efetue o donwload aqui!</h1>
					<p className="fs-5">
						Um ótimo sistema de agenda e finanças para para você!
					</p>
					<p className="fs-5">
						Funciona tanto em sistema operacional{" "}
						<strong className="text-success">Windows</strong> quanto{" "}
						<strong className="text-info">MacOS</strong>
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
					{/* <Button size={"lg"} variant={"success"} className="m-1"
						onClick={() => setDownload(urlWindows)}
						>
						Windows <i className="bi bi-windows"></i>
					</Button>
					<Button size={"lg"} variant={"info"} className="m-1"
						onClick={() => setDownload(urlMac)}
					>
						MacOS <i className="bi bi-apple"></i>
					</Button> */}
				</div>
			</div>
		</Layout>
	);
};

export default Download;
