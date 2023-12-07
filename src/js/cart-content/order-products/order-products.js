document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.querySelector('.order-products-form');
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailInput = event.target.querySelector('#email');
      const email = emailInput.value;

      console.log('Order Details:');
      console.log('Email:', email);

      orderForm.reset();
    });
  });