import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {SetData,SetLikes,SetImg,newImg} from '../store'
function Write(){
    const navigate = useNavigate()
const uploadImgs = useSelector((state)=>{return state.uploadImgs})
const writeSubmit = (e)=>{
    e.preventDefault();
    const postName = e.target.writeName.value;
    const postText = e.target.writeText.value;
    const postTextSplit = postText.split('\n').map( line => {
        return (<span>{line}<br/></span>)
      })
    const uploadimg =  e.target.writeImg.files[0];
    if(uploadimg){}else{alert('사진을 업로드 해주세요')}
    const postImg = URL.createObjectURL(uploadimg)
    navigate('/');
    dispatch(newImg(''))
    dispatch(SetData({postName, postTextSplit,postImg}));
    };
    const writeImg = (e)=>{
      //업로드 파일 저장소로 보내기
      const uploadimg =  e.target.files[0];
      const uploadImgUrl = URL.createObjectURL(uploadimg);
      dispatch(newImg(uploadImgUrl));
  }
// let uploadImg = useSelector((state)=>{return state.uploadImg})
const dispatch = useDispatch()
  return (
    <div className='writeContainer'>
        <form onSubmit={writeSubmit}>
                {/* 업로드 사진 미리보기 */}
            <img src={uploadImgs ? uploadImgs : './empty_img.png'} alt="" className='moreImg'/> 
            
            <div className='writeBox'></div>
            <label htmlFor="writeName">name :</label>
            <input type="text" className='writeName' id='writeName' name='writeName'/> <br />
            <label htmlFor="writeText">Post : </label>
            <textarea  className='writeText' id='writeText' name='writeText' cols="30" rows="10"></textarea>
            <br></br>
            <input onChange={writeImg} accept='image/*' name='writeImg' type="file" id='filterUpload' />
            <label htmlFor='filterUpload' className='filterUploadBtn'>이미지 업로드</label> <br />
            <input type="submit" className='writeSubmit' value="글쓰기"/>
        </form>
    </div>
  )
}
export default Write
