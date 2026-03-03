// Configuration for API endpoint
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000'
    : 'https://tldr-aggregator-api.onrender.com'; // Replace with your Render URL

export default API_BASE_URL;
