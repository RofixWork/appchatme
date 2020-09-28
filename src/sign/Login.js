import React, {useContext} from 'react'
import {Formik,Field,Form} from 'formik'
import { Context } from '../Global/Context';
const Login = () => {
    const {login, closeModel} = useContext(Context)
    const initVal = {
      username: "",
      email: "",
      password: "",
    };
    const userLogin = (values) => {
      login(values);
      closeModel();
    };
    return (
            <Formik initialValues={initVal} onSubmit={userLogin}>
        <Form>
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
          <button type='submit' className='w-100 btnWebsiteTwo'>Login</button>
        </Form>
      </Formik>
    )
}

export default Login
