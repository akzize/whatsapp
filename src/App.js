// import logo from './logo.svg';
import './App.css';
import './chat-tile.css';
import './chat-message.css';
import './chat-window.css';
import './core.css';
import './sidebar.css';
import './style.css';
// components
import MessageGetter from './components/MessageGetter';
import MessagesArea from './components/MessagesArea';
import ChatWindowHeader from './components/chatWindowHeader';
// import ContactContainer from './components/ContactsContainer';
import Header from './components/Aside/Header';
import ContactContainer from './components/ContactsContainer';
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState([
    { id: 0, name: 'Linus Torvalds' },
    { id: 1, name: 'Bill Gates' },
    // Add more contacts here
  ]);
  const [chatMessages, setChatMessages] = useState({
    0: [
      {
        timeStamp: new Date().toLocaleString(),
        text: 'Hello Linus!',
      },
      {
        timeStamp: new Date().toLocaleString(),
        text: 'hi Linus!',
      }
    ],

    1: [
      {
        timeStamp: new Date().toLocaleString(),
        text: 'Hello bill!',
      },
    ]
    
  });
  
  const [activeContact, setActiveContact] = useState(null); // Set the default active contact
  
  const handleSendMessage = (text)=>{
    // defind the message blueprint
    // console.log({text});
    // console.log(contacts[(activeContact-1)]);
    const newMessage = {
      timeStamp: new Date().toLocaleString(),
      text,
    };

    // update the messages history
    // console.log(newMessage);
    console.log('active',chatMessages[activeContact]);
    setChatMessages((chatMessages) => {
      // Create a copy of the previous chatMessages
      const updatedChatMessages = { ...chatMessages };
      
      updatedChatMessages[activeContact.id] = [
        ...(updatedChatMessages[activeContact.id]),
        newMessage,
      ];
      return updatedChatMessages;
    });

    // the first parm in the list is messages with the activeContact
    // the second parm is the new message, it's like removing the old list and adding a new one with the new message
    // console.log(chatMessages);
    // console.log(activeContact);
    // console.log({...chatMessages}[activeContact.id]);
    // debugger
    // console.log([...({...chatMessages}[activeContact.id]),newMessage]);
    // setChatMessages([(({...chatMessages})[activeContact.id]), [...({...chatMessages}[activeContact.id]),newMessage]]);

  }
  return (
    <main className="App">
    <aside id="sidebar">
      <Header/>
			{/* <div className="connectivity-notification">
				<img src="icons/warning.svg" alt="Offline warning"/>
				<div>
					<div className="connectivity-notification-title">
						Computer not connected
					</div>
					<span>
						Make sure your computer has an active Internet connection
					</span>
				</div>
			</div> */}
        <ContactContainer contacts={contacts} setActiveChat={setActiveContact}/>
    </aside>
    {activeContact && 
    <section id="chat-window">
			<ChatWindowHeader name={contacts[activeContact.id].name}/>
      <div id="chat-window-contents">

				{/* <div className="datestamp-container">
					<span className="datestamp">
						03/05/2023
					</span>
				</div> */}
				<MessagesArea chatMessages={chatMessages[activeContact.id]}/>
      </div>
        <MessageGetter onSendMessage={handleSendMessage}/>
        
      </section>}
      
    </main>
  );
}

export default App;
