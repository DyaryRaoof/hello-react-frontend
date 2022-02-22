import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMessage from '../api/messages';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(getMessage);
  }, []);
  return (
    <div>
      Greeting
      {greeting.message}
    </div>
  );
};

export default Greeting;
