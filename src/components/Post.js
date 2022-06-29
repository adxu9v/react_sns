import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {DeleteData} from '../store'
function Post(){
    let listData = useSelector((state)=>{return state.listData})
    let dispatch= useDispatch()
  return (
    <div>
        {listData.map((post,i) =>  <div  className='post' key={listData[i].id}>
            <div className='profileBox' >
                <img src={post.profileImage} alt="" className='profileImg' />
                <p className='profileName'>{post.profileName}</p>
            </div>
           <div className='postBox'>
               <img src={listData[i].postImage} alt="" className='postImg'/>
               <div className='postContentBox'>
            <p className='postText'>{post.postText}</p>
            <p className='postDate'>{post.postDate}</p>
            <input type="button" value="Delete" className='postDeleteBtn' onClick={()=>{dispatch(DeleteData(post.id))}}/>
               </div>
           </div>
        </div>)}
    </div>
  )
}
export default Post