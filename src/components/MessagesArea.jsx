import React from "react";
import Message from "./Message";

function MessagesArea({chatMessages}) {
    // console.log(chatMessages);
    return ( 
        <div className="chat-message-group">
        <div className="img-round">
            <img src="images/linus.png" alt="" className="chat-message-avatar"/>
        </div>
        <div className="chat-messages">
            <div className="chat-message-container">
                {/* <div className="chat-message chat-message-first">
                    <div className="chat-message-sender">ahmed</div>
                    Hey there, how are you doing?
                    <span className="chat-message-time">7:22 am</span>
                </div>
                <div className="emoji-toolbar">
                    <img src="icons/emoji.svg" alt="" className="icon reaction-button"/>
                    <div className="reaction-emoji-selector">
                        <a href="#" className="icon">👍🏻</a>
                        <a href="" className="icon">💖</a>
                        <a href="" className="icon">😂</a>
                        <a href="" className="icon"></a>
                        <a href="" className="icon"></a>
                        <a href="" className="icon"></a>
                    </div>
                </div>
            </div> */}
            {/* {console.log(chatMessages)} */}
            {chatMessages && chatMessages.map((message, index) => <Message key={index} message={message}/>)}
            {/* <div className="chat-message">
                Are you up to some fun this weekend?
                <span className="chat-message-time">7:22 am</span>
            </div>
            <div className="chat-message">
                I'm thinking of going to the beach
                <span className="chat-message-time">7:23 am</span>
            </div> */}
        </div>
        </div>
    </div>
     );
}

export default MessagesArea;