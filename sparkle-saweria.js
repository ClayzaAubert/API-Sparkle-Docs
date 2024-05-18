const axios = require('axios');

async function login(email, password) {
   try {
      const response = await axios.post('https://SERVER_DOMAIN/api/saweria/login', { email, password });
      return response.data;
   } catch (error) {
      return error.response.data;
   }
}

async function createPayment(user_id, amount, msg) {
   try {
      const response = await axios.post('https://SERVER_DOMAIN/api/saweria/createPayment', { user_id, amount, msg });
      return response.data;
   } catch (error) {
      return error.response.data;
   }
}

async function checkPayment(user_id, payment_id) {
   try {
      const response = await axios.get(`https://SERVER_DOMAIN/api/saweria/checkPayment/${user_id}/${payment_id}`);
      return response.data;
   } catch (error) {
      return error.response.data;
   }
}

async function getBalance(email, password) {
   try {
      const response = await axios.post('https://SERVER_DOMAIN/api/saweria/balance', { email, password });
      return response.data;
   } catch (error) {
      return error.response.data;
   }
}

// Usage examples:

// Login

const email = '';
const password = '';

login(email, password)
   .then(response => console.log('Login Response:', response))
   .catch(error => console.error('Login Error:', error));

// Create Payment, Minimum Rp 10.000
//createPayment('USER ID', 10000, 'MESSAGE')
//   .then(response => console.log('Create Payment Response:', response))
//   .catch(error => console.error('Create Payment Error:', error));

// Check Payment Status
//checkPayment('USER ID', 'PAYMENT ID')
//   .then(response => console.log('Check Payment Response:', response))
//   .catch(error => console.error('Check Payment Error:', error));

// Get Balance
//getBalance(email, password)
//   .then(response => console.log('Balance Response:', response))
//   .catch(error => console.error('Balance Error:', error));
