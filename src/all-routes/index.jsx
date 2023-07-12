import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Auth from '../pages/auth'
import TaskList from '../pages/taskList'
import Task from '../pages/task'
import Payment from '../pages/payments'
import Profile from '../pages/profile'

export default function AllRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/auth" element={<Auth/>}/>
    <Route path="/tasklist" element={<TaskList/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/task/:id" element={<Task/>}/>    
    <Route path="/profile" element={<Profile/>}/>    
    <Route path="*" element={<Home/>}/>
    </Routes>
  )
}
