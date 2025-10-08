import React from 'react'
import Login from './pages/authPages/Login'



import ThemeSwitcher from './components/common/ThemeSwitcher'
import CheckInput from './components/common/testingcutomComponent/CheckInput'
import CardExample from './components/common/testingcutomComponent/CardExample'
import ExampleToast from './components/common/testingcutomComponent/ExampleToast'
import LoaderComponent from './components/common/testingcutomComponent/LoaderComponent'
import LandingPage from './pages/LandingPage'


const App = () => {
  
  return (
    <div>
 
 <LandingPage/>

   {/* <ThemeSwitcher/>
  <LoaderComponent/>
     <Login/>
     <CheckInput/>
     <CardExample/>
      <ExampleToast/> */}
    </div>
  )
}

export default App
