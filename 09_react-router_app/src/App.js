import { Route, Routes, useNavigate } from 'react-router-dom';
import { ROUTES, SECTIONS } from './constants.js';
import { AppBar, Container, Toolbar } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';

import "./App.css";

import About from './components/About.jsx';
import Mission from './components/Mission.jsx';
import Products from './components/Products.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            <div 
              className="name-wrapper" 
              style={{ cursor: 'pointer' }} 
              onClick={() => navigate('/')}
            >
                <TerminalIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <p>
                  LANDING PAGE
                </p>
            </div>
            <div className="sections-wrapper">
              {SECTIONS.map((section) => {
                return (
                    <div 
                      className='section'
                      key={section.name} 
                      onClick={() => navigate(section.route)} 
                    >
                        {section.name}
                    </div>
                  )
                })}
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <div>
        <Routes>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.MISSION} element={<Mission />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.PRODUCT_DETAILS} element={<div>Product Details</div>}/>
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;