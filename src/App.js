import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Portfolio', description: 'Portraits of people in my life' },
    { name: 'Contact', description: 'Delicious delicacies' },
    { name: 'Resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      <main>
      {currentCategory.name == "About Me" ? <About/> : currentCategory.name == "Portfolio" ? <Portfolio/>: currentCategory.name == "Contact" ? <Contact /> : <Resume></Resume>}
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
