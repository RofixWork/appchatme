import React, {useContext} from 'react'
import {Formik, Field, Form} from 'formik'
import { Context } from '../Global/Context'
const Register = () => {
    const { register, closeModel } = useContext(Context);
    const initVal = {
        username: '', email:'', password:''
    }
    const userRegister = (values) => {
        register(values);
        closeModel();
    }
    return (
      <Formik initialValues={initVal} onSubmit={userRegister}>
        <Form>
          <div className="mb-3">
            <Field
              className="form-control shadow-none "
              placeholder="Username"
              name="username"
              type='text'
              required
            />
          </div>
          <div className="mb-3">
            <Field
              className="form-control shadow-none "
              placeholder="Email"
              name="email"
              type='email'
              required
            />
          </div>
          <div className="mb-3">
            <Field
              className="form-control shadow-none "
              placeholder="Password"
              type='password'
              name="password"
              required
            />
          </div>
          <button type='submit' className='w-100 btnWebsiteTwo'>Register</button>
        </Form>
      </Formik>
    );
}

export default Register
