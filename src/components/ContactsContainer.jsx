import React from 'react';
import Contact from './Contact';
function ContactContainer({contacts, setActiveChat}) {
    const handleClick = (id)=>{
        // console.log(id);
        // alert()
        setActiveChat(contacts[id]);
    }
    return ( 
        <section id="sidebar-contents">
          <div id="chats-list">
            {contacts.map(({name, timeStamp, text}, index) => <Contact key={index} name={name} timeStamp={timeStamp} text={text} onClick={()=>handleClick(index)}/> )}
          </div>
        </section>
     );
}

export default ContactContainer;