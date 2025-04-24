



import React, { useState,Suspense, useEffect } from 'react'
import {Routes,Route, useLocation, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {setPosts} from './Redux/FollowSlice'
import Login from './Compunnent/Login'
import Mypage from './Compunnent/Mypage'
import Myprofile from './Compunnent/Myprofile'
import Allpost from './Compunnent/Allpost'
import Singup from './Compunnent/Singup'
import AllUserApi from './Compunnent/AllUserApi'
import Setting from './Compunnent/Setting'
import UserDetails from './Compunnent/UserDetails'
import PostItem from './Compunnent/PostItem'
import AlluserShow from './Compunnent/AlluserShow'
import Newprofile from './Compunnent/profile'
//import SideBar from './Page/SideBar'
import SideBar from './Page/SideBar'
import Create from './Compunnent/Create'
import { dicrement,remove } from './Redux/PostsSlice'
import Myallfolowin from './Compunnent/Myallfolowin'
import MysaveMark from './Compunnent/MysaveMark'
function App() {
 
  const {posts} = useSelector(store=>store.pose);
console.log(posts)
  const user=useSelector((state)=>state.profile.user)
  console.log(user)
const showdata=useSelector((state)=>state)
       console.log(showdata)
const dispatch=useDispatch()

  return (
    <div className=''>


{
user?
<div>
  <SideBar/>
  <Myprofile/>
     <Routes>
    <Route  path="/login" element={<Login/>} /> 
    <Route  path="/reg" element={<Singup/>} /> 
   <Route  path="/" element={<Allpost/>} />
   <Route  path="/page" element={<Mypage/>} />
   <Route  path="/profile" element={ <Newprofile/>}/>
   <Route  path="/postcreate" element={ <Create/>}/>
   <Route  path="/setting" element={ <Setting/>}/>
   <Route  path="/details/:id" element={<UserDetails/>}/>
   <Route  path="/following" element={<Myallfolowin/>}/>
   <Route  path="/bookmark" element={ <MysaveMark/>}/>
   

  </Routes>  
</div>:"loading..."

}
  </div> 


  )
}

export default App









