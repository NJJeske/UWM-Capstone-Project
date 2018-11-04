
export default process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production'
    ? {
        'serverURL': 'https://app.uwm-nm-te-capstone.com/api',
    } : {
        'serverURL': 'http://localhost:4000/api',
    };
