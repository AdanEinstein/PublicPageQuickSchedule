import Image from "next/image";
import Layout from "../components/layout/Layout";
import telaLoginCadastro from "../assets/tela-login-cadastro.png";
import telaConfigLogin from "../assets/tela-config-login.png";
import telaFinancas from "../assets/tela-financas.png";
import telaDia from "../assets/tela-agenda-dia.png";
import telaAgendaNovo from "../assets/tela-agenda-novo.png";
import telaAgendaProdutos from "../assets/tela-agenda-produtos.png";
import telaAgendaStatus from "../assets/tela-agenda-status.png";
import telaAgendaConcluido from "../assets/tela-agenda-concluido.png";
import telaAgendaConcluido2 from "../assets/tela-agenda-concluido2.png";
import telaCalendario from "../assets/tela-agenda-calendario.png";
import themeViolet from "../assets/theme-violet.png";
import themeRed from "../assets/theme-red.png";
import themeBlue from "../assets/theme-blue.png";
import themeGreen from "../assets/theme-green.png";
import {
	Carousel,
	CarouselItem,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";

const Tutorial: React.FC = () => {
	return (
		<Layout page="Tutorial">
			<div className="container my-3">
				<div className="row">
					<div className="col-md-9">
						<h2 id="Iniciando">Iniciando...</h2>
						<p>
							O{" "}
							<strong className="text-success">
								Quick Schedule
							</strong>{" "}
							quando acessado pela primeira vez entra na tela de
							Login e para entrar basta digitar um login e uma
							senha para registrar o seu usuário. Uma vez
							registrado basta clicar novamente em Entrar para
							acessar.
						</p>
						<Image src={telaLoginCadastro} layout={"responsive"} />
						<hr className="my-3" />
						<h2 id="Trocando login e senha">Trocando login e senha...</h2>
						<p>
							Para que você troque o login e a senha inicialmente
							cadastrados basta entrar em{" "}
							<strong>Menu {">"} Configurações</strong> e depois
							clique em <strong>Login</strong>
						</p>
						<p>
							Depois, basta clicar em <strong>Editar</strong>,
							digitar um novo login e uma nova senha e confirmar.
							Pronto login recadastrado com sucesso.
						</p>
						<Image src={telaConfigLogin} layout={"responsive"} />
						<hr className="my-3" />
						<h2 id="Trocando o tema">
							Trocando o tema...{" "}
							<i className="bi bi-emoji-wink text-primary"></i>
						</h2>
						<p>
							Você também pode trocar o tema de cores como você
							preferir.
						</p>
						<Carousel>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={themeViolet}
								/>
								<Carousel.Caption>
									<h3>Violet</h3>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={themeRed}
								/>
								<Carousel.Caption>
									<h3>Red</h3>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={themeBlue}
								/>
								<Carousel.Caption>
									<h3>Blue</h3>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={themeGreen}
								/>
								<Carousel.Caption>
									<h3>Green</h3>
								</Carousel.Caption>
							</CarouselItem>
						</Carousel>
						<hr className="my-3" />
						<h2 id="Finanças">Finanças</h2>
						<p>
							Na parte de <strong>Finanças</strong>, você pode
							lançar tanto Entradas (Pagamentos) quanto Saídas
							(Gastos) nas sua contas, Buscá-las, Editá-las e
							também Deletá-las.
						</p>
						<p>
							E para que você tenha melhor visão de foi o seu mês
							financeiramente o{" "}
							<strong className="text-success">
								Quick Schedule
							</strong>{" "}
							calcula o total de receita obtida na listagem acima.
						</p>
						<Image src={telaFinancas} layout={"responsive"} />
						<hr className="my-3" />
						<h2 id="Agenda">Agenda</h2>
						<p>
							Na parte de <strong>Agenda</strong>, você
							inicialmente entrará na agenda do dia atual.
						</p>
						<Image src={telaDia} layout={"responsive"} />
						<p id="Novo agendamento" className="mt-3">
							Aqui você poderá criar um novo agendamento clicando
							em{" "}
							<strong className="text-primary">
								Novo agendamento
							</strong>
							, preencha as informações pedidas e confirmar
							clicando em{" "}
							<strong className="text-success">Novo</strong>. Além
							de poder também deletar e editar um agendamento caso
							seja necessário.
						</p>
						<Image src={telaAgendaNovo} layout={"responsive"} />
						<p className="mt-3">
							Você também pode monitorar de maneira simples quais
							produtos foram requisitados em determinado
							agendamento apenas movendo o mouse na célula da
							coluna <strong>Produtos</strong>.
						</p>
						<Image src={telaAgendaProdutos} layout={"responsive"} />
						<p className="mt-3">
							Trocar o Status também é possível aqui, basta clicar
							na célula da coluna <strong>Status</strong>, onde
							mostrará uma janelinha para modificá-lo.
						</p>
						<Image src={telaAgendaStatus} layout={"responsive"} />
						<p id="Calendário" className="mt-3">
							Navegue de uma maneira mais rápida utilizando o
							calendário, para qual data desejar, clicando em <strong>Calendário</strong> na tela inicial de Agenda
						</p>
						<Image src={telaCalendario} layout={"responsive"} />
						<p className="mt-3">
							O legal é que ao selecionar o status como{" "}
							<strong className="text-success">Concluído</strong>{" "}
							automaticamente o valor obtido pelo Cliente aparece
							na tabela das suas finanças. Para um melhor controle
							de sua receita mensal.
						</p>
						<Carousel>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaAgendaConcluido}
								/>
								<Carousel.Caption>
									<h3>Agenda</h3>
								</Carousel.Caption>
							</CarouselItem>
							<CarouselItem>
								<Image
									className="d-block w-100"
									src={telaAgendaConcluido2}
								/>
								<Carousel.Caption>
									<h3>Finanças</h3>
								</Carousel.Caption>
							</CarouselItem>
						</Carousel>
					</div>
					<div
						className="col-md-3 position-fixed d-md-flex d-none"
						style={{ top: "170px", right: 0 }}
					>
						<ListGroup
							className="flex-grow-1"
							defaultActiveKey="#link1"
						>
							<ListGroupItem variant="dark" action href="#Iniciando">
								Iniciando
							</ListGroupItem>
							<ListGroupItem variant="dark" action href="#Trocando login e senha">
								Trocando login e senha
							</ListGroupItem>
							<ListGroupItem variant="dark" action href="#Trocando o tema">
                                Trocando o tema <i className="bi bi-emoji-wink"></i>
							</ListGroupItem>
							<ListGroupItem variant="dark" action href="#Finanças">
                                Finanças
							</ListGroupItem>
							<ListGroupItem variant="dark" action href="#Agenda">
                                Agenda
							</ListGroupItem>
							<ListGroupItem variant="dark" action href="#Novo agendamento">
                                Novo agendamento
							</ListGroupItem>
							<ListGroupItem variant="dark" action href="#Calendário">
                                Calendário
							</ListGroupItem>
						</ListGroup>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Tutorial;
