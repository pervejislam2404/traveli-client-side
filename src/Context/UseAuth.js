import { useContext } from 'react';
import { travelContext } from './AuthContext';

const UseAuth = () => {
    return useContext(travelContext)
};

export default UseAuth;