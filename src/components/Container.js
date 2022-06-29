import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
function Container(){
  let listData = useSelector((state)=>{return state.listData})
  
  return (
    <div className='container'>
      {listData[0] == undefined ? <div className='wi'>게시물이 없습니다...</div> :  <Post></Post>}
    {/* {listData[0] == undefined ? <div>1</div> : <div>2</div>} */}
       
    </div>
    
  )
}
export default Container