import ReactDOM from 'react-dom'
import React from 'react'
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';


const App = () => {
  console.log(React.version);
  return (
    <div>
      <p>yo</p>
      <Header />
      <HomePage />
    </div>
  );
}


export default App;
