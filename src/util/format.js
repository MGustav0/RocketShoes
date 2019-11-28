/** Desestrutura e renomaia para formatPrice, podendo ser chamada assim. */
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
