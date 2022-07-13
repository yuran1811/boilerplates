import MainLayout from '@cpns/layouts/MainLayout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const App = () => (
  <div className="App">
    <MainLayout>
      <HomePage />
      <AboutPage />
    </MainLayout>
  </div>
);

export default App;
