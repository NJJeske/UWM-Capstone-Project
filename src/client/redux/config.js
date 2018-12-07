
export default {
    serverURL: (process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production') ? 'https://app.uwm-nm-te-capstone.com/api' : 'http://localhost:4000/api',
    headers: () => ({ headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } }),
};
