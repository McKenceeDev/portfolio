import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Layout/Navbar';
import PageTransition from './components/shared/PageTransition';
import CVSection from './components/sections/CVSection';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// Componente para manejar las rutas animadas
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } 
        />
        <Route 
          path="/skills" 
          element={
            <PageTransition>
              <Skills />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
            <AnimatedRoutes />
          </main>
          {/* Footer */}
          <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} Oscar Leandro González. All rights reserved.
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="/contact" 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </footer>
          {/* CV Section floating button */}
          <CVSection />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;