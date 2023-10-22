import React, { useState } from "react";
export default function MessageGetter({onSendMessage}) {
		const [message, setMessage] = useState("");	

	function handleMessage() {
		if (message.trim() === "") return;
		// console.log(message);
		onSendMessage(message);
		setMessage("");
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
		  handleMessage();
		}
	  };
    return ( 
        <footer id="chat-window-footer">
				<img src="icons/emoji.svg" alt="" className="icon"/>
				<img src="icons/attachment.svg" alt="" className="icon"/>
				<input type="search" name="message" id="compose-chat-box" placeholder="Type a message" 
				value={message} autoComplete="off" onChange={(e)=>setMessage(e.target.value)}
				onKeyDown={handleKeyDown}/>
				<img src="icons/mic.svg" alt="" className="icon msg_send" onClick={handleMessage}/>
			</footer>
     );
}
// export default MessageGetter;