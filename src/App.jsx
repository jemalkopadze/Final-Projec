import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticDataProvider } from 'global/context/StaticDataContext';
import { UserDataProvider } from 'global/context/UserDataContext';
import {CartDataProvider} from 'global/context/CartDataContext'
import { Footer, Header } from './components';
import { routes } from "./global/routes"
import { languageList } from "./global/config"
import './sass/style.scss'

function App() {

  const checkLanguage = () => {
    let windowsUrl = window.location.href;
    let windowUrlArray = windowsUrl.split('/');
    let index = languageList.indexOf(windowUrlArray[3]);
    if (index === -1) {
      window.location.href = `/${languageList[0]}`
    }
  }

  checkLanguage();

  return (


    <div>
      <BrowserRouter>
        <StaticDataProvider>
          <UserDataProvider>
            <CartDataProvider>
              <Header />
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
              <Footer />
            </CartDataProvider>
          </UserDataProvider>
        </StaticDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
