import React, {useContext} from "react";
import Comments from "../components/Comments";
import { Context } from "../Global/Context";

const Posts = () => {
    const {posts} = useContext(Context)
  return (
      <>

      {posts.map(post => {
          return (
            <div key={post.id} className="card shadow mb-3  posts">
              <div className="card-head border-bottom d-flex align-items-center p-2">
                <h5 className="mb-0 firstLetter">{post.username[0]}</h5>
                <h6 className="mb-0 ml-1">{post.username}</h6>
              </div>
              <img src={post.image} className='card-img-top' alt=""/>
              <div className="card-body">
                  <h6 className='card-title text-capitalize font-weight-bold mb-0'>{post.title}</h6>
              </div>
              <Comments id={post.id}/>
            </div>
          );
      })}
      </>
  );
};

export default Posts;
