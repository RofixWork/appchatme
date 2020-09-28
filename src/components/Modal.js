import React, {useState, useContext} from 'react'
import { Context } from '../Global/Context'
import Login from '../sign/Login'
import Register from '../sign/Register'
const Modal = () => {
    const {closeModel} = useContext(Context)
    const [forms, setforms] = useState({
        register: true,
        login: false
    })
    const {register, login} = forms;

    const toggleForms =() => {
        setforms({
            ...forms,
            register: !register,
            login: !login
        })
    }
    const stopPropagation = e => {
        e.stopPropagation();
    }   

    

    /* const login = () => {

    } */
    return (
      <div className="model" onClick={() => closeModel()}>
        <div onClick={stopPropagation} className="model__box w-75 p-3 rounded-sm shadow bg-white">
            {register ? <Register/> : <Login/>}
          <span className="instruction mt-1 pointer text-muted" onClick={toggleForms}>
              {register ? 'Already Have an account?' : 'Create a new account.'}
          </span>
        </div>
      </div>
    );
}

export default Modal
