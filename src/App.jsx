// ═══════════════════════════════════════════════════════════
// 13. APP ROUTER
// ═══════════════════════════════════════════════════════════
 
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './redux/store';
import Navbar   from './components/layout/NavBar';
import { Footer }  from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
// import { Lightbox } from './components/ui/Lightbox';
import  Home     from './pages/Home';
import  Portfolio  from './pages/Portfolio';
import  PortfolioCollection from './pages/PortfolioCollection';
import  Contact  from './pages/Contact';
import AboutUs from './pages/AboutUs';
// import './styles/globals.css';
 
export default function App() {
  // Application root sets up SEO, Redux store, and client-side routing
  return (
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:collectionId" element={<PortfolioCollection />} />
              <Route path="/about"     element={<AboutUs />} />
              <Route path="/contact"   element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          {/* <Lightbox /> */}
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
}