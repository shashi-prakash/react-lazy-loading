
import { Suspense,lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
const Home = lazy(() => import("./components/Home")) 
const About = lazy(() => import("./components/About")) 
function App() {
  return (


  <Suspense fallback={
    <div id="loading"></div>
  }>
     <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/about' element={<About/>}/>
  </Routes>
  </Suspense>

 
  );
}

export default App;
