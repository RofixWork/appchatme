import React, {useContext} from 'react';
import Modal from './Modal';
import {Context} from '../Global/Context'

const Navbar = () => {
    const {model, openModel, user, loader, logout} = useContext(Context)

    //logout
    const userLogout = () => {
        logout();
    }

    //new Component => InLine C 
    const CheckUser = () => {
        return (
          <>
            {!loader && user ? (
              <div className="dropdown">
                <button
                  className="text-capitalize btnWebsiteOne dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.displayName}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <span className="dropdown-item pointer" onClick={userLogout}>
                      Log Out
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => openModel()}
                className="text-capitalize btnWebsiteOne"
              >
                register / login
              </button>
            )}
          </>
        );
    }

    return (
        <>
            {model ? <Modal/> : null}
            <div className='navbar fixed-top'>
                <div className="container">
                    <a href="#" className="navbar-brand">
                        AppChat
                    </a>
                    <div>
                        <CheckUser/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;