import axios from 'axios';

// baseUrl
import { baseURL } from '../configs/constants';

export const api = axios.create({
    baseURL,
});
