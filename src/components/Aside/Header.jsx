const SearchBar = () => {
    return (
        <form id="search-toolbar">
				<input type="search" name="" id="search-input" placeholder="Search or start a new chat"/>
				<img src="icons/filter.svg" alt="" className="icon"/>
			</form>
    );
}

const ToolBar = () => {
    return (
        <div className="toolbar">
                <img src="icons/communities.svg" alt="" className="icon"/>
                <img src="icons/status.svg" alt="" className="icon"/>
                <img src="icons/new-chat.svg" alt="" className="icon"/>
                <div className="dropdown">
                <img src="icons/menu.svg" alt="" className="icon dropdown-button"/>
                <div className="dropdown-content">
                    <a href="#">New group</a>
                    <a href="#">New community</a>
                    <a href="#">Archived</a>
                    <a href="#">Starred messages</a>
                    <a href="#">Select chats</a>
                    <a href="#">Settings</a>
                    <a href="#">Log out</a>
                </div>
                </div>
            </div>
    )
}

function Header() {
    return ( 
        <>
            <header id="sidebar-header">
            <div className="sidebar-header-img img-round">
                <img src="images/linus.png" alt="" className="avatar" id="profile-image"/>
            </div>
            <ToolBar/>
            </header>

            <SearchBar/>    
        </>
     );
}

export default Header;