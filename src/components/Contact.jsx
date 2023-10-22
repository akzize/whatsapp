function Contact({name, timeStamp, text, onClick}) {
	
	return ( 
		// here is the thing if want to add an event to child from the parent u'll use onClick in the parent bu it the child as props
		// so you should do it twice 
		// the teacher says no
        <div className="chat-tile" onClick={onClick}>
						<img src="images/linus.png" alt="" className="chat-tile-avatar"/>
						<div className="chat-tile-details">
							<div className="chat-tile-title">
								<span>{name}</span>
								<span>{timeStamp}</span>
							</div>
							<div className="chat-tile-subtitle">
								<span>{text}</span>
								<span className="chat-tile-menu">
									<img src="icons/pin.svg" alt="" className="pin"/>
								</span>
							</div>
						</div>
					</div>
     );
}

export default Contact;