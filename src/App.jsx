import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {

  const [taskData, setTaskData] = useState ([])
  
  function Task(date){
    this.date = date;
    // Will use this to create task description
    this.type = "";
  }

  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default App;
