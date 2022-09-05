import './App.css';


import Box from '@mui/material/Box';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';

import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';

const setActive = ({isActive}) =>isActive ? 'active-link' : ''


function App () {
    
   

    return (
      
      <div >
               
          <Routes>
            <Route path={'/'} element={<Layout/>}>
              <Route index path={'/'} element={<HomePage/>} />
              <Route path={'/Chat'} element={<ChatPage/>} />
              <Route path={'/Profile'} element={<ProfilePage/>} />
              
            </Route>   
            <Route path={'*'} element={<NotFoundPage/>} />
          </Routes>
        
         
         
         <Box>
          
         </Box>
                
        
     
      </div>
      
    );
    
}

export default App;
