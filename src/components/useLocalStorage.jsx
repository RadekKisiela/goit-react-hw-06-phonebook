import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../redux/actions';

const useLocalStorage = key => {
  const dispatch = useDispatch();
  const storedContacts = useSelector(state => state.contacts);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        const parsedContacts = JSON.parse(item);
        dispatch(setContacts(parsedContacts));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, dispatch]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedContacts));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedContacts]);

  return storedContacts;
};

export default useLocalStorage;
