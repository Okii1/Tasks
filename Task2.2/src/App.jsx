import React from 'react';
import Collapsible from './components/Collapsible';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Collapsible
        title="Why park a domain name in Parkname?"
        content="Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success."
      />
    </div>
  );
};

export default App;
