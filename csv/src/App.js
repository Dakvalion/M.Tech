
import './app.css';
import  {FileUploader} from './components/FileUploader.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FileUploader/>}/>
      </Routes>
    </>
  );
}

export default App;
