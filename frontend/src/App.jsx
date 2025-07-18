import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import react-router-dom
import { AppProvider } from "./context/AppContext"
import StudentRegister from './components/auth/StudentRegister'; // Your StudentRegister component
import Home from './components/home/Home';
import { ToastContainer } from 'react-toastify'; // To show toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles
import Login from './components/auth/Login';
import TeacherRegister from './components/auth/TeacherRegoster';
import TeacherClassroom from './components/classroom/TeacherClassroom';
import StudentClassroom from './components/classroom/StudentClassroom';
import Chats from './components/Chat/Chats';
import PlacementCell from './components/plcementCell/PlacementCell';


const App = () => {
  return (

      <Router>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/register" element={<StudentRegister />} /> 
            <Route path='/login' element={<Login/>} />
            <Route path='/teacherRegister' element= {<TeacherRegister/>} />
            <Route path='/teacherclassroom' element = {<TeacherClassroom />} />
            <Route path='/studentclassroom' element ={<StudentClassroom/>} />
            <Route path='/student/:id/chat' element={<Chats/>}/>
          </Routes>
      </Router>
  );
};

export default App;
