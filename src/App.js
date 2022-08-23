import './App.css';
import MessagesList from "./MessagesList";
import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ChatsList from './ChatsList';


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
      <div>
        <Box>
        <ChatsList chats={chats}></ChatsList>
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
      <Button variant="contained" disableElevation onClick={handleSubmit}>
      Отправить
     </Button>
     </Box>
     
    
     <MessagesList messages={messages}></MessagesList>
     
      </div>
      
    )
    
}

export default App;
