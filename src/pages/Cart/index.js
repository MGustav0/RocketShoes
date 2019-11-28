/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import * as CarActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
  function incrementAmount(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrementAmount(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QDT</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title} </strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => decrementAmount(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => incrementAmount(product)}
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 480,30</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1440,90</strong>
        </Total>
      </footer>
    </Container>
  );
}

/** Pega informações do estado e mapeia em formato de propriedades POR componente. */
const mapStateToProps = state => ({
  /** cria a propriedade neste componente, chamada "cart", que recebe todasd as informações do reducer em quesatão: ./store/modules/cart/reducer.js */
  cart: state.cart,
});

/** Converte "Actions" do Redux em propriedades do componente atual. */
const mapDispatchToProps = dispatch => bindActionCreators(CarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
