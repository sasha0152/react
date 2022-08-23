function MessagesList(props) {
    return (
        <div>
            {props.messages.map((item : {id: number, text: string, author: string} ) => {
                return (
                    <div>
                        {item.id} {item.author}: {item.text}
                    </div>
                )
            } )}
        </div>
    )
}

export default MessagesList;