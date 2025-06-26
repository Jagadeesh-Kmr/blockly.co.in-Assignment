import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Content />
      </div>
    </div>
  );
}

export default App;
