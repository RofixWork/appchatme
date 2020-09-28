import React, {useContext} from 'react'
import Create from '../components/Create'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import { Context } from '../Global/Context'

const Home = () => {
    const {loader, user} = useContext(Context)
    return (
        <>
            <Navbar/>
            {!loader && user ?
            <div style={{padding:'80px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ">
                            <Create/>
                            <Posts/>
                        </div>
                    </div>
                </div>
            </div>
            :''}
        </>
    )
}

export default Home
