import axios from 'axios';

export const getCoins = async () => {
    try {
        const result = await axios.get('crypto/get')
        return result.data;
    } catch (err) {
        throw err;
    }
}

export const postCoin = async (body) => {
    try {
        const result = await axios.post('crypto/post', body)
        return result.data;
    } catch (err) {
        throw err;
    }
}