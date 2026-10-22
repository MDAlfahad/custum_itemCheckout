export const Price = ({ amount, currency = 'USD', locale = 'en-US' }) => {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);

  return <span>{formattedPrice}</span>;
};
