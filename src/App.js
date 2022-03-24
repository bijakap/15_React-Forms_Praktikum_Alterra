import React, {useRef, useState} from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: ""
  }
  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  }
  const suratKesungguhan = useRef('')
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState(baseError);
 
  return (
    <div className='App'>
      <Form data={data} errorMassage={errorMassage} suratKesungguhan={suratKesungguhan} setData={setData} setErrorMassage={setErrorMassage}/>
    </div>
  );
}

export default App;
