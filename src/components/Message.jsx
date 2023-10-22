function Message({message}) {
    // console.log(message);
    return ( <div className="chat-message">
                <p>{message.text} </p>
                <span className="chat-message-time">{message.timeStamp}</span>
            </div> );
}
export default Message;