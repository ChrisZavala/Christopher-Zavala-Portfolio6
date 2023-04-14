import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About, Contact, Experience, Hero,
  Navbar, Works, StarsCanvas, Footer,
} from './components';
import Resume from './components/resume/Resume';

const App = () => {
  const PageWithFooter = ({ children }) => (
    <>
      {children}
      <div id="footer-bottom">
        <Footer />
      </div>
    </>
  );
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#212428] bg-cover'>
        <div className='bg-[#212428] bg-cover gb-no-repeat bg-center'>
          <Navbar />
          <div className="relative z-50"></div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<PageWithFooter><About /></PageWithFooter>} />
            <Route path="/experience" element={<PageWithFooter><Experience /></PageWithFooter>} />
            <Route path="/resume" element={<PageWithFooter><Resume /></PageWithFooter>} />
            <Route path="/works" element={<PageWithFooter><Works /></PageWithFooter>} />
            <Route path="/contact" element={<PageWithFooter><Contact /></PageWithFooter>} />
          </Routes>
        </div>
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
