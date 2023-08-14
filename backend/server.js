// Di komponen atau file yang memanggil permintaan login
import axios from 'axios';

// ...

const onLogin = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', user);
    console.log('Login response:', response.data);
  } catch (error) {
    console.error('Login error:', error);
  }
};
