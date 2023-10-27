import './App.css';
import { Route, Routes } from 'react-router-dom';
import TrangChu4 from './pages/trang_chu_4';

import './style.css';

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/demo-4" element={<TrangChu4/>}/>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
