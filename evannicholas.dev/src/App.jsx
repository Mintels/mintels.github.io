import Front from './Front.jsx'
import Footer from './Footer.jsx' 
import Cards from './Cards.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <main>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
