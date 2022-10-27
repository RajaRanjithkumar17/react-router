import logo from './logo.svg';
import { BrowserRouter,Routes,Route , MemoryRouter} from 'react-router-dom';


import './App.css';
import Navebar from './pages/Navebar';
import Options from './pages/options/Options';
import Timeline from './timeline';
import Notification from './pages/Notification';
// import Navebar from './pages/nav/Navebar.js';
// import Options from './pages/options/Options.js';
// import Notification from './pages/notice/Notification.js';
// import Timeline from './timeline';
function App() {
  return (
  //   <MemoryRouter initialEntries={["/users/mjackson"]}>
  //   <Routes>
  //     <Route path="users" element={<Users />}>
  //       <Route path=":id" element={<UserProfile />} />
  //     </Route>
  //   </Routes>
  // </MemoryRouter>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Navebar/>}></Route>
      <Route path='options' element={<Options/> }></Route>
      <Route path='timeline' element={<Timeline/>}></Route>
      <Route path='notification' element={<Notification/>}></Route>
    </Routes>
    
    </BrowserRouter>
  

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
