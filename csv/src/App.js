
import './table.css';
import  {FileUploader} from './components/FileUploader';
import { Table } from './components/Table';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Table/>}/>
      </Routes>
    </>
  );
}

export default App;
