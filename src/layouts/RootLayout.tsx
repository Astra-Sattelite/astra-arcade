import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import "./RootLayout.css"
import Footer from '../components/Footer/Footer';

function RootLayout() {
  return (
    <div className="rootContainer">
      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout