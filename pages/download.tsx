import Link from "next/link";
import Layout from "../components/layout/Layout";

// Windows https://drive.google.com/u/0/uc?id=1ICLEz_OWwnDVKWhViZE9xtXbG30oYXFV&export=download
// MacOS https://drive.google.com/u/0/uc?id=16AN71VlXf5Ukr9XwfMh-NSPEG7o0YQ84&export=download

const Download: React.FC = () => {
	return (
		<Layout page="Download">
			<div className="container h-100 d-flex flex-column flex-sm-row justify-content-center align-items-center justify-content-sm-around">
				<div>
					<h1>Efetue o donwload aqui!</h1>
					<p className="fs-5">Um ótimo sistema de agenda e finanças para para você!</p>
					<p className="fs-5">
						Funciona tanto em sistema operacional{" "}
						<strong className="text-success">Windows</strong> quanto{" "}
						<strong className="text-info">MacOS</strong>
					</p>
					<h4>Aproveite!</h4>
				</div>
				<div className="d-flex">
					<Link
                        target={"_blank"}
						href={
                            "https://drive.google.com/u/0/uc?id=1ICLEz_OWwnDVKWhViZE9xtXbG30oYXFV&export=download"
						}
                        >
						<a className="btn btn-lg btn-success m-1">
							Windows <i className="bi bi-windows"></i>
						</a>
					</Link>
					<Link
                        target={"_blank"}
						href={
							"https://drive.google.com/u/0/uc?id=16AN71VlXf5Ukr9XwfMh-NSPEG7o0YQ84&export=download"
						}
					>
						<a className="btn btn-lg btn-info m-1">
							MacOS <i className="bi bi-apple"></i>
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default Download;
