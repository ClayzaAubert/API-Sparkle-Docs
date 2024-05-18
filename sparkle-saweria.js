const axios = require('axios');
/* LIST SERVER DOMAIN
 * https://rosalyn.my.id
 * https://aubert.my.id
 * https://clayza.biz.id
 */
const SERVER_DOMAIN = 'https://clayza.biz.id';

async function login(email, password) {
   try {
      const response = await axios.post(`${SERVER_DOMAIN}/api/saweria/login`, { email, password });
      return response.data;
   } catch (error) {
      return error.response ? error.response.data : { error: 'Unknown error occurred' };
   }
}

async function createPayment(user_id, amount, name, email, msg) {
   try {
      const response = await axios.post(`${SERVER_DOMAIN}/api/saweria/createPayment`, { user_id, amount, name, email, msg });
      return response.data;
   } catch (error) {
      return error.response ? error.response.data : { error: 'Unknown error occurred' };
   }
}

async function checkPayment(user_id, payment_id) {
   try {
      const response = await axios.get(`${SERVER_DOMAIN}/api/saweria/checkPayment/${user_id}/${payment_id}`);
      return response.data;
   } catch (error) {
      return error.response ? error.response.data : { error: 'Unknown error occurred' };
   }
}

async function getBalance(email, password) {
   try {
      const response = await axios.post(`${SERVER_DOMAIN}/api/saweria/balance`, { email, password });
      return response.data;
   } catch (error) {
      return error.response ? error.response.data : { error: 'Unknown error occurred' };
   }
}

// module.exports = { login, createPayment, checkPayment, getBalance };

// Usage examples:
const email = '';
const password = '';

// Login
login(email, password)
   .then(response => console.log('Login Response:', response))
   .catch(error => console.error('Login Error:', error));

// Create Payment, Minimum Rp 1.000
//createPayment('USER ID', 1000, 'NAME_DONATUR', 'EMAIL_DONATUR', 'MESSAGE')
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
