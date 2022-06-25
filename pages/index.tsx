import Image from "next/image";
import Layout from "../components/layout/Layout";
import logo100 from "../assets/icon.png";
import telaLogin from "../assets/tela-login.png";
import telaInicial from "../assets/tela-inicial.png";
import telaConfigLogin from "../assets/tela-config-login.png";
import telaFinancas from "../assets/tela-financas.png";
import telaCalendario from "../assets/tela-agenda-calendario.png";
import telaDia from "../assets/tela-agenda-dia.png";
import { Carousel, CarouselItem } from "react-bootstrap";

const Home: React.FC = () => {
	return (
		<Layout page="Home">
			<div className="container d-flex flex-column">
				<div className="row">
					<div className="d-flex align-items-center justify-content-center my-4">
						<h1 className="text-center me-3">
							Sistema Quick Schedule
						</h1>
						<Image src={logo100} width={50} height={50} />
					</div>
				</div>
				<div className="d-flex flex-grow-1 flex-column">
					<div className="row flex-grow-1">
						<Carousel>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaLogin}
								/>
								<Carousel.Caption>
									<h3>Tela de login</h3>
									<p>
										Para que sua agenda esteja tenha mais
										segurança.
									</p>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaInicial}
								/>
								<Carousel.Caption>
									<h3>Tela de inicial</h3>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaConfigLogin}
								/>
								<Carousel.Caption>
									<h3>Tela de Configurações - Login</h3>
									<p>
										Para que você possa mudar seu login e
										senha.
									</p>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaFinancas}
								/>
								<Carousel.Caption>
									<h3>Tela de Finanças</h3>
									<p>
										Tenha uma outra visão das suas finanças.
									</p>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaCalendario}
								/>
								<Carousel.Caption>
									<h3>Tela de Agenda Geral</h3>
									<p>
										Navegue pela sua agenda de uma maneira
										mais inteligente.
									</p>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaDia}
								/>
								<Carousel.Caption>
									<h3>Tela de Agenda Específico</h3>
									<p>
										Entre no dia desejado e ministre sua
										agenda como desejar.
									</p>
								</Carousel.Caption>
							</CarouselItem>
						</Carousel>
					</div>
					<div className="row flex-grow-1 my-3">
						<div className="col-md-2"></div>
						<div className="col-md-8 col-lg-8 col-12 my-3">
							<p className="fs-5">
								O sistema <strong>Quick Schedule</strong> foi
								projetado para ajudar profissionais que desejam
								ter um controle maior tanto da sua agenda quanto
								de suas finanças.
							</p>
							<p className="fs-5">
								{" "}
								Na tela de <strong>Finanças</strong> você pode
								registrar entradas e saídas de suas contas com
								um layout simples e intuitivo.
							</p>
							<p className="fs-5">
								Já na tela de <strong>Agenda</strong>, como a
								você já deve estar imaginando, é aonde você terá
								um controle da sua agenda tendo uma visão geral
								de todos os seus clientes assim como o status e
								valor de todos o (produtos / serviços) foram
								agendados.
							</p>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
