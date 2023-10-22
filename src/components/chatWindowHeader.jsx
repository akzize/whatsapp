function ChatImg() {
    return ( 
        <div className="chat-window-header-img img-round">
					<img src="images/linus.png" alt="" className="avatar" id="profile-image"/>
				</div>
     );
}

function ChatOptions() {
    return ( 
    <div className="dropdown">
    <img src="icons/menu.svg" alt="" className="icon dropdown-button"/>
    <div className="dropdown-content contact-menu">
        <a href="#">Contact info</a>
        <a href="#">Select messages</a>
        <a href="#">Close chat</a>
        <a href="#">Mute notifications</a>
        <a href="#">Disappearing messages</a>
        <a href="#">Clear messages</a>
        <a href="#">Report</a>
        <a href="#">Block</a>
    </div>
</div> );
}

export default function ChatWindowHeader({name}) {
    return ( 
        <header id="chat-window-header">
				<ChatImg/>
				<div id="active-chat-details">
					<h3>{name}</h3>
					<div className="info">You and 69 others</div>
				</div>
				<img src="icons/search.svg" alt="" className="icon"/>
				<ChatOptions/>
			</header>
     );
}

// export default s;


