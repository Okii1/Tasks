import React from 'react';
import styles from './App.module.css';

const data = [
  { src: '/images/The-TLD.png', title: 'The TLD', description: 'Does the domain extension match the language of the domain name?' },
  { src: '/images/Domain-Length.png', title: 'Domain Length', description: 'Is the domain short enough to remember?' },
  { src: '/images/Language.png', title: 'Language', description: 'How complex is the actual domain name?' },
  { src: '/images/International-Recognition.png', title: 'International Recognition', description: 'Can the domain name be used on an international scale?' },
  { src: '/images/Search-Engine.png', title: 'Search Engine', description: 'Does the domain follow search engine guidelines?' },
  { src: '/images/Advertising-Potential.png', title: 'Advertising Potential', description: 'Could the domain be used for advertising campaigns?' },
  { src: '/images/Sales-Opportunities.png', title: 'Sales Opportunities', description: 'Can the domain be used on an international scale?' },
  { src: '/images/Typo-Susceptibility.png', title: 'Typo Susceptibility', description: 'How high is the risk of mistyping the domain name?' },
  { src: '/images/Business-Potential.png', title: 'Business Potential', description: 'Can the domain be used as your company address?' },
];

const App = () => {
  return (
    <div className={styles.dataContainer}>
      {data.map((item, index) => (
        <div key={index} className={styles.dataItem}>
          <img src={item.src} alt={item.title} className={styles.dataImage} />
          <div className={styles.dataTextContainer}>
            <h3 className={styles.dataTitle}>{item.title}</h3>
            <p className={styles.dataDescription}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
