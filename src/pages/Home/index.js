import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-mirai-feminino/89/D16-1968-189/D16-1968-189_zoom1.jpg"
          alt="Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa"
        />
        <strong>Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa</strong>
        <span>R$ 240,15</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-mirai-feminino/89/D16-1968-189/D16-1968-189_zoom1.jpg"
          alt="Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa"
        />
        <strong>Tênis Mizuno Wave Mirai Feminino</strong>
        <span>R$ 240,15</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-mirai-feminino/89/D16-1968-189/D16-1968-189_zoom1.jpg"
          alt="Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa"
        />
        <strong>Tênis Mizuno Wave Mirai Feminino</strong>
        <span>R$ 240,15</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-mirai-feminino/89/D16-1968-189/D16-1968-189_zoom1.jpg"
          alt="Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa"
        />
        <strong>Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa</strong>
        <span>R$ 240,15</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-mirai-feminino/89/D16-1968-189/D16-1968-189_zoom1.jpg"
          alt="Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa"
        />
        <strong>Tênis Mizuno Wave Mirai Feminino</strong>
        <span>R$ 240,15</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-mirai-feminino/89/D16-1968-189/D16-1968-189_zoom1.jpg"
          alt="Tênis Mizuno Wave Mirai Feminino - Grafite e Rosa"
        />
        <strong>Tênis Mizuno Wave Mirai Feminino</strong>
        <span>R$ 240,15</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
