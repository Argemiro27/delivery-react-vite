
import NavbarComponent from './components/Navbar'
import { StyledSectionCardapio, StyledSectionDetails, StyledSectionPresentation } from './components/Section'
import { StyledButtonBuy, StyledCard, StyledCardFood } from './components/Card'
import LottieComponent from './components/Lottie'
import arrow from '../../assets/arrowdown.png'
import chat from '../../assets/chat.png'
import styled from 'styled-components'
import paulistana from '../../assets/pizza-paulistana.jpg'
import calabresa from '../../assets/pizza-calabresa.jpg'
import quatroqueijos from '../../assets/Pizza-4queijos.jpg'
import { CardMedia, Grid } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DevicesIcon from '@mui/icons-material/Devices';
import { StyledFooter } from './components/Footer'


const ArrowDown = styled.div`
    height: 100px;
    width: 100px;
    background-image: url(${arrow});
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    margin: 10px;
    bottom: 0;
    left: 0;
    z-index: 1;
`

const Contato = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    color: #b1b1b1;
    background-image: url(${chat});
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

function LandingPage() {
    return (
        <>
            <ArrowDown />

            <Contato />
            <StyledSectionPresentation>
                <NavbarComponent />
            </StyledSectionPresentation>
            <StyledSectionCardapio>
                <div className="cardapio-wrapper d-block">

                    <Grid container direction="row" alignItems="center" justifyContent="center" className='title'>
                        <MenuBookIcon style={{marginRight: "10px"}}/> CARDÁPIO
                    </Grid>
                    <div className="cards d-flex">
                        <StyledCardFood>
                            <h4>PIZZA PAULISTANA</h4>
                            <CardMedia
                                component="img"
                                height="140"
                                image={paulistana}
                                alt="Imagem da Pizza Mineira"
                                className='card-image'
                            />
                            <p><span className='subtitle'>Ingredientes: </span><br />Feita com queijo Minas frescal, linguiça calabresa, milho verde e temperada com orégano, é uma explosão de sabores que vai conquistar o seu paladar. Experimente uma fatia e mergulhe na tradição culinária de Minas Gerais!</p>
                            <p>Preço: <span id="preco_paulista">R$45,00</span></p>

                            <StyledButtonBuy><AddShoppingCartIcon />Adicionar ao carrinho</StyledButtonBuy>
                        </StyledCardFood>

                        <StyledCardFood>
                            <h4>PIZZA CALABRESA</h4>
                            <CardMedia
                                component="img"
                                height="140"
                                image={calabresa}
                                alt="Imagem da Pizza Calabresa"
                                className='card-image'
                            />
                            <p><span className='subtitle'>Ingredientes: </span><br />Feita com deliciosas fatias de linguiça calabresa defumada, queijo derretido, molho de tomate caseiro e temperada com orégano, é a escolha perfeita para os amantes de pizza que buscam um toque de sabor defumado e uma textura irresistível. Experimente uma fatia e deixe-se levar pelo prazer da pizza!</p>
                            <p>Preço: <span id="preco_paulista">R$36,00</span></p>

                            <StyledButtonBuy><AddShoppingCartIcon />Adicionar ao carrinho</StyledButtonBuy>
                        </StyledCardFood>

                        <StyledCardFood>
                            <h4>PIZZA QUATRO QUEIJOS</h4>
                            <CardMedia
                                component="img"
                                height="140"
                                image={quatroqueijos}
                                alt="Imagem da Pizza Quatro Queijos"
                                className='card-image'
                            />
                            <p><span className='subtitle'>Ingredientes: </span><br />Feita com uma generosa camada de queijo mussarela, queijo gorgonzola, queijo parmesão e queijo provolone, esta pizza é uma festa de sabores para os amantes de queijo. Cada mordida é uma experiência única, com a cremosidade e o aroma dos melhores queijos. Experimente uma fatia e renda-se ao prazer dos queijos!</p>
                            <p>Preço: <span id="preco_paulista">R$32,00</span></p>

                            <StyledButtonBuy><AddShoppingCartIcon />Adicionar ao carrinho</StyledButtonBuy>
                        </StyledCardFood>
                    </div>
                </div>
            </StyledSectionCardapio>
            <StyledSectionDetails>
                <div className='d-block'>
                    <div className='title d-block text-center'>
                        <h1 className='card-title'>SOBRE NÓS</h1>
                    </div>
                    <div className='sobre-nos-content d-block'>

                        <div className='d-flex'>
                            <div className='d-block'>
                                <StyledCard className='m-3'><h2 className='card-title'>
                                    É gostoso!</h2>
                                    <LocalPizzaIcon className='icon-card-details' style={{color:"orange"}}/>
                                    <div className='w-75 mx-auto text-center text-card'>
                                        <p className='text-card'>Nossos produtos são cuidadosamente preparados e selecionados, garantindo a melhor qualidade e sabor.</p>
                                    </div>
                                </StyledCard>

                                <StyledCard className='m-7'>
                                    <h2 className='card-title'>É barato!</h2>
                                    <AttachMoneyIcon className='icon-card-details bg-success rounded'/>
                                    <div className='w-50 mx-auto text-center text-card'>
                                        <p className='text-card'>Compartilhe com seus amigos e ganhe desconto na sua próxima compra!</p>
                                    </div>
                                </StyledCard>
                            </div>
                            <div className='d-flex'>
                                <LottieComponent />
                                <StyledCard className='mr-3'>
                                    <h2 className='card-title'>É fácil!</h2>
                                    <DevicesIcon className='icon-card-details'/>
                                    <div className='w-50 mx-auto text-center text-card'>
                                        <p className='text-card w-100'>Acesse de qualquer lugar, disponível em todas as plataformas!</p>
                                    </div>

                                </StyledCard>
                            </div>

                        </div>
                    </div>
                </div>
            </StyledSectionDetails>
            <StyledFooter>
                Desenvolvido por Miro Jr. ©️ Todos os direitos reservados.
            </StyledFooter>
        </>
    )
}

export default LandingPage