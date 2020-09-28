import React, {useState, useContext} from 'react'
import { FaCamera } from "react-icons/fa";
import { Context } from '../Global/Context';
const Create = () => {
    const {create} = useContext(Context)
    const [status, setstatus] = useState('')
    const [image, setimage] = useState("")
    const handleChange = (e) => setimage(e.target.files[0]);
    const createPost = (e) => {
        e.preventDefault();
        create({status, image})
        setimage(null)
        setstatus(null)
    }
    return (
        <div className='border p-3 shadow mb-3'>
            <form onSubmit={createPost}>
                <div className="mb-3">
                    <textarea  required className='form-control w-100' cols="5" rows="5" placeholder='Enter Anything...' onChange={e => setstatus(e.target.value)}></textarea>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <label htmlFor="file" className='pointer'>
                            <FaCamera className='text-danger' style={{fontSize:'24px'}}/>
                        </label>
                        <input required type="file" className='d-none' id="file" onChange={handleChange}/>
                    </div>
                    <button type='submit' className='btnWebsiteThree'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create
