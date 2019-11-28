import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

/** Recebe o state (estado) do Header, retorna as informações que serão acessadas dentro do componente.
 * Neste caso retorna para o componente o cart (carrinho de compras), do reducer (state.cart) que está na pasta store/modules/cart/reducer.js, será retornada a quantidade de elementos (length).
 * Cada reducer cadastrado, pode ser acessado pelo state.
 * Renderiza novamente todo componente quando o estado muda.
 */
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
