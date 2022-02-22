import axios from 'axios';
import { fetchMessage } from '../redux/messages/messages';

const BASE_URL = 'http://localhost:3001/api/v1/greetings';

const getMessage = async (dispatch) => {
  const response = await axios.get(BASE_URL, { headers: { 'Access-Control-Allow-Origin': '*' } });
  dispatch(fetchMessage(response.data));
};

export default getMessage;
