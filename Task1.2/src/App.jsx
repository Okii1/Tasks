import React from 'react';
import Cards from './components/Cards.jsx';
import './App.css'

function App() {

  const cardData = [
    {
      version: "3.3.0",
      date: "14/05/2018",
      status: "new",
      programmer: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive. Various bug fixes and stability improvements. Share permission redesigned and optimization.",
      programmerImage: "/images/IMG_0062.JPG"
    },
    {
      version: "3.1.0",
      date: "20/05/2015",
      status: "fix",
      programmer: "Kevin Joe",
      description: "Introducing Host Cloud Drive - virtual drive functionality.  New Share options and management. New, more user friendly design. Sync optimizations. Various performance improvements and bug fixes",
      programmerImage: "/images/IMG_0062.JPG"
    },
    {
      version: "3.1.0",
      date: "20/05/2015",
      status: "improvement",
      programmer: "Kevin Joe",
      description: "Added settings for Auto Start. Added update notifications. Speed optimization. Bug Fixes.",
      programmerImage: "/images/IMG_0062.JPG"
    },
    {
      version: "3.3.0",
      date: "14/05/2018",
      status: "new",
      programmer: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive. Various bug fixes and stability improvements. Share permission redesigned and optimization.",
      programmerImage: "/images/IMG_0062.JPG"
    },
    {
      version: "3.1.0",
      date: "20/05/2015",
      status: "fix",
      programmer: "Kevin Joe",
      description: "Introducing Host Cloud Drive - virtual drive functionality. New Share options and management. New, more user friendly design. Sync optimizations. Various performance improvements and bug fixes",
      programmerImage: "/images/IMG_0062.JPG"
    },
    {
      version: "3.1.0",
      date: "20/05/2015",
      status: "improvement",
      programmer: "Kevin Joe",
      description: "Added settings for Auto Start. Added update notifications. Speed optimization. Bug Fixes.",
      programmerImage: "/images/IMG_0062.JPG"
    }
  ];

  return (
    <div className="container">
      <Cards cardData={cardData} />
    </div>
  )
}

export default App
