

import Form from './components/Form';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentData from './components/StudentData';
// import Test from './components/Test';
import Update from './components/Update';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    {/* <Route element={<Test />} path='/test' /> */}
    <Route element={<Home />} path='/'></Route>
    <Route element={<Form />} path='/form'></Route>
    <Route element={<StudentData />} path='/studentdata'></Route>
    <Route element={<Update />} path='/studentdata/update/:id'></Route>
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
