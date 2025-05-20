import './Header.css';

function Header() {
    return (
        <>
            <div >
                <div className='conatnier BorderBottom'>
                    <div className='header'>
                        <div className='header-logo'>
                            <h3>My Activity</h3>
                        </div>
                        <div className='header-icons'>
                            <div className='header-iconsmenu'><img src='/assets/images/user1.png' alt='user img'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header