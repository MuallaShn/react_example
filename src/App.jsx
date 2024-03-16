import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './components/Course'
import './css/Course.css' ;
import './css/Header.css'


function App() {

  return (
    <>
     <Header/>  
     <div className='course-main'>
     {
      courses?.map((course)=>(
        <Course key={course.id} course={course}/>
      ))
     }  
     </div>
    </>
  )
}

export default App
