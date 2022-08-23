import './App.css';
import MessagesList from "./MessagesList";
import {useState, useEffect} from "react";

const AUTHOR = "Игорь"

function App () {
    const [message, setMessage] = useState("")
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
            author: AUTHOR
        }
        const newMessages = [...messages, newMessage]

        setMessages(newMessages)
        setMessage("")
    }

    useEffect(() => {
        const newMessage = messages[messages.length -1]

        if (newMessage.author !== "Игорь") return

        const newId = messages.length
        const mess = {
            id: newId,
            text: "HELLO",
            author: 'robot'
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
        <form onSubmit={handleSubmit}>
          <label>Сообщение:</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} />
          <input type="submit" value="Отправить"/>
        </form>
        <MessagesList messages={messages}></MessagesList>
      </div>
    )
}

export default App;
