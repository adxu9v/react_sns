import { configureStore,createSlice } from '@reduxjs/toolkit'

let listData = createSlice({
    name : 'listData',
    initialState : [
        {
            id : 1,
            profileName : 'Kim',
            profileImage : './first_img.jpeg',
            postImage : './sunny.jpeg',
            postText : 'First!',
            postDate : '2022. 05. 25'
        },
        {
            id : 2,
            profileName : 'Park',
            profileImage : './fog.jpeg',
            postImage : './rain.jpeg',
            postText : 'Hello my name is Park! nice to see you',
            postDate : '2022. 06. 18'
        },
        {
            id : 3,
            profileName : 'Billy',
            profileImage : './bored-cat_img.jpeg',
            postImage : './bored-cat_img.jpeg',
            postText : 'boring...',
            postDate : '2022. 06. 25'
        },
    ],
    reducers:{
        // 새로운 글 목록
        SetData(state,action){
           const date = new Date()
           const newList = {
            id : state.length+1, 
            profileName : action.payload.postName,
            profileImage : './Storm-clouds.jpeg',
            postImage : action.payload.postImg, 
            postText : action.payload.postTextSplit,
            postDate : `${date.getFullYear()}. ${(date.getMonth()+1)}. ${date.getDate()}`}
             return [...state, newList]
        },
        //글 삭제 기능
        DeleteData(state,action){
             return  state.filter((deleteState)=> deleteState.id !== action.payload)
        }
    }  
});
let uploadImgs = createSlice({
    name : 'uploadImg',
    initialState : '',
    reducers : {
         newImg(state, action){
             
            return action.payload
         }
    }
})
let uploadImg = createSlice({
    name : 'uploadImg',
    initialState : '',
    reducers : {
        uploadImgUrl(state, action){
           
            return action.payload
        }
    }
})
export let {uploadImgUrl} = uploadImg.actions
export let {SetData,DeleteData,SetImg} = listData.actions
export let {newImg} = uploadImgs.actions
export default configureStore({
  reducer: { 
    uploadImg : uploadImg.reducer,
    listData : listData.reducer,
    uploadImgs : uploadImgs.reducer
  }
}) 