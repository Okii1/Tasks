import React from 'react';
import CollapsibleSection from './components/CollapsibleSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CollapsibleSection title="About Us" img="/images/about-us.png">
        <CollapsibleSection
          title="How does Parkname separate itself from other domain name parking companies?"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, adipisci! Nostrum maxime quod vitae recusandae est facere eum optio unde, architecto pariatur aliquid ipsa odio dolor dolorum minima non earum."
        />
        <CollapsibleSection
          title="Is Parkname Parking actually free?"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, adipisci! Nostrum maxime quod vitae recusandae est facere eum optio unde, architecto pariatur aliquid ipsa odio dolor dolorum minima non earum."
        />
        <CollapsibleSection
          title="What do you do?"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, adipisci! Nostrum maxime quod vitae recusandae est facere eum optio unde, architecto pariatur aliquid ipsa odio dolor dolorum minima non earum."
        />
        <CollapsibleSection
          title="When was Parkname first founded?"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, adipisci! Nostrum maxime quod vitae recusandae est facere eum optio unde, architecto pariatur aliquid ipsa odio dolor dolorum minima non earum."
        />
      </CollapsibleSection>
    </div>
  );
};

export default App;
