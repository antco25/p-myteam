import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import AnimRoutes from '../AnimRoutes/AnimRoutes';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='*' element={<AnimRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
