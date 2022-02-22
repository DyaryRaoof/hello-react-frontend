const FETCH_MESSAGE = 'hello-react-backend/messages/FETCH_MESSAGE';

export const fetchMessage = (payload) => ({
  type: FETCH_MESSAGE,
  payload,
});

const initialState = {
  message: '',
  loading: false,
  error: null,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE:
      return { ...state, message: action.payload.greeting.message };
    default:
      return state;
  }
};

export default messageReducer;
