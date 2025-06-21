import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import store from './redux/store';
import { Provider } from 'react-redux';
import Blogpage from './Pages/Blogpage';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/createBlogPost' element={<Blogpage/>}/>
        </Routes>
      </BrowserRouter>
  </Provider>
  </StrictMode>,
)
