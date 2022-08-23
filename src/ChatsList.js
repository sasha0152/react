function ChatsList(props) {
    return (
        <div>
            {props.chats.map((item : {id: number, name: string} ) => {
                return (
                    <div key={item.id}>
                     {item.name}
                    </div>
                )
            } )}
        </div>
    )
}

export default ChatsList;