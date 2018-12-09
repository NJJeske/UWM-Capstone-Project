
const isProduction = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production';

export const serverURL = isProduction ? 'https://app.uwm-nm-te-capstone.com/api' : 'http://localhost:4000/api';
export const logoutReturnURL = isProduction ? 'https://app.uwm-nm-te-capstone.com' : 'http://localhost:8080/';
export const headers = () => ({ headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } });
