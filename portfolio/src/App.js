import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from './pages/MainLayout';
import CodeWord from './pages/CodeWord';
import CodeKiosk from './pages/CodeKiosk';
import CodeHealth from './pages/CodeHealth';
import CodeAlcohol from './pages/CodeAlcohol';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout></MainLayout>}></Route>
        <Route path='/code/word' element={<CodeWord></CodeWord>}></Route>
        <Route path='/code/kiosk' element={<CodeKiosk></CodeKiosk>}></Route>
        <Route path='/code/health' element={<CodeHealth></CodeHealth>}></Route>
        <Route path='/code/alcohol' element={<CodeAlcohol></CodeAlcohol>}></Route>
      </Routes>
    </div>
  );
}

export default App;
