import React from 'react'
import { useLocation,Navigate} from 'react-router-dom';
import { useAuth } from '../Context'

export const RequiresAuth = ({children}) => {
    const {user:{loginStatus}}=useAuth();
    const location=useLocation();
  return (
    loginStatus? children:<Navigate  to="/loginpage" replace state={{from:location}}/>
    
  )
}


