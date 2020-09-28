import React,{useState, useContext} from 'react'
import { auth, db } from '../config/config'
import { Context } from '../Global/Context'

const Comments = (props) => {
    const {puplishComment} = useContext(Context)
    const [comment, setcomment] = useState('')
    const [comments, setComments] = useState([])
    const {id} = props
    const postCommenter = (event) => {
        event.preventDefault();
        puplishComment({id, comment})
        setcomment('')
    }
    React.useEffect(() => {
        db.collection('posts').doc(id).collection('comments').orderBy('currentTime', 'desc').onSnapshot(snp => {
            setComments(
                snp.docs.map(doc => ({
                    id: doc.id,
                    username: doc.data().username,
                    comment: doc.data().comment
                }))
            )
        })
    }, [])
    return (
        <div>
            {comments.map(c => {
                return(
                    <div className='py-1 px-3 d-flex align-items-center' key={c.id}>
                        <h6 className='mb-0 text-muted font-italic font-weight-bold text-capitalize'>{c.username}</h6>
                        <h6 className='mb-0 ml-2'>{c.comment}</h6>
                    </div>
                )
            })}
            <form onSubmit={postCommenter}>
                <div className="mb-0 mt-2">
                    <input type="text" className='form-control shadow-none rounded-0' placeholder="Comment..." value={comment} onChange={e => setcomment(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default Comments
