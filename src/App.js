import './App.css';
import MessagesList from "./MessagesList";
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ChatsList from './ChatsList';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import CustomLink from './components/CustomLink';
import { red } from '@mui/material/colors';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';

const setActive = ({isActive}) =>isActive ? 'active-link' : ''


function App () {
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const [chats, setChats] = useState([
       {
         id: 0,
        name: 'друзья'
      }
    ])
    const [messages, setMessages] = useState([
      {
        id: 0,
         text: 'Привет!',
         author: 'Иван'
      }
    ])

    function fetchData() {
        const newId = messages.length
        const newMessage = {
            id: newId,
            text: message,
            author: name,
        }
        const newMessages = [...messages, newMessage]

        setMessages(newMessages)
        setMessage("")
    }

    useEffect(() => {
        const newMessage = messages[messages.length -1]

        if (newMessage.author === "") return

        const newId = messages.length
        const mess = {
            id: newId,
            text: "Ваше сообщение "+newMessage.author+" отправлено",
            author: ''
        }
        const newMessages = [...messages, mess]

        setMessages(newMessages)

    }, [messages])

    const handleSubmit = e => {
        e.preventDefault()
        fetchData()
    }
   

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
        
         
          <ul>
            <li> <ChatsList chats={chats}></ChatsList> </li>
            <li> </li>
            <li> </li>
          </ul>

         <Box>
          
         </Box>
                
         <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
          >

          <TextField
            helperText=" "
            id="demo-helper-text-aligned"
            label="Name"
            onChange={e =>setName(e.target.value)}
          />

          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="message"
            onChange={e =>setMessage(e.target.value)}
            focused
          />

          

         </Box>
         <Button variant="contained" disableElevation onClick={handleSubmit}>
            Отправить
          </Button>
        
    
        <MessagesList messages={messages}></MessagesList>
     
      </div>
      
    );
    
}

export default App;
