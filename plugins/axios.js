import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true
axios.defaults.baseURL = 'http://localhost:8000'

// axios.defaults.headers.common['Accept'] = 'application/json';
// axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest'
// };
export default axios
