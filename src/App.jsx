import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Home from './page/Home/Home';

import { HashRouter, Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout/Layout';
// import Work from './page/Work/Work';
import History from './page/History/History';
import Location from './page/Location/Location';

import Head from './layouts/Head/Head';
import Notification from './page/Notification/Notification';
import Profile from './page/Profile/Profile';
import List from './page/LIstwork/List1/List';
import List2 from './page/LIstwork/List2/List2';
import PageOne from './page/Work/PageOne/PageOne';
import PageTwo from './page/Work/PageTwo/PageTwo';
import  Rates from './page/Rates/rates';
import Status from "./page/Status/status";
import Complete from "./page/Complete/Complete";
import Loading from "./page/Loading/Loading";
import Check from "./page/check/Check";

const intTab = 'home'
function App() {
  const [tab, setTab] = useState('');

  useEffect(() => {
    setTab(intTab);
  },[])
  


  

  return (
   <div className='app'>
    <div className='app-continer'>
   <HashRouter>
    <Routes>
      
      <Route element={<Layout tab={tab} setTab={setTab}/>}>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home  />} />
      <Route path='/head' element={<Head />} />
      <Route path='/list' element={<List />} />
      <Route path='/list2/:id' element={<List2 />} />
      <Route path='/history' element={<History />} />
      <Route path='/location' element={<Location />} />
      <Route path='/status' element={<Status />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/pageone' element={<PageOne />} />
      <Route path='/pageTwo/:id' element={<PageTwo />} />
      <Route path="/rates" element={<Rates />} />
      <Route path="/status" element={<Status />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/check" element={<Check />} />
      </Route>
    </Routes>
  </HashRouter>
  </div>
   </div>
  )
}

export default App



