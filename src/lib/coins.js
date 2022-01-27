import axios from 'axios';

export const getCoins = async () => {
    try {
        const result = await axios.get('http://34.72.242.45:3050/crypto/get')
        return result.data;
    } catch (err) {
        throw err;
    }
}

export const postCoin = async (body) => {
    try {
        const result = await axios.post('http://34.72.242.45:3050/crypto/post', body)
        return result.data;
    } catch (err) {
        throw err;
    }
}