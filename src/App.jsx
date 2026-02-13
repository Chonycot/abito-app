import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home.jsx'; // основной компонент со списком товаров
import { Page_1 } from "./pages/PageProduct.jsx";
import { Header } from "./components/Header/Header"

export const App = () => {
  
  return (
    // 3. Оборачиваем всё приложение в Router
    <Router>
      {/* 6. Routes определяет, что рендерить в зависимости от URL */}
      <Routes>
        {/* Основная страница с товарами - ваш существующий Home компонент */}
        <Route path="/" element={<Home />} />

        {/* Страница товара (создадим ниже) */}
        <Route path="/product/:id" element={<Page_1 />} />

        {/* 404 страница */}
        <Route path="*" element={<h1>Страница не найдена (404)</h1>} />
      </Routes>
    </Router>
  );
}

export default App;