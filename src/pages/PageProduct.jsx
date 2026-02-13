import "./product.css";
import "../index.css";
import { Header } from "../components/Header/Header"
import { cardArray } from "../constants"
import { useParams } from 'react-router-dom';


export const Page_1 = () => {
    const { id } = useParams();
    const currentProduct = cardArray.find(item => item.id === Number(id));
    console.log('id из URL:', id);
    console.log('Тип id:', typeof id);
    console.log('Все id товаров:', cardArray.map(item => item.id));
    console.log('Поиск по id (строгое равенство):', cardArray.find(item => item.id === id));
    console.log('Поиск по id (с приведением к числу):', cardArray.find(item => item.id === Number(id)));
    return (
        <>
            <Header />
            <main>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="page content-main">
                                <div>
                                    <h2 className="content-main_title">
                                        {currentProduct.title}
                                    </h2>
                                    <img src={`${currentProduct.img}`} alt="Самокат электричесий" id="page_img" />
                                    <p id="page_txt">{currentProduct.txt}</p>
                                </div>
                                <div className="page_inf">
                                    <p className="price">
                                        {currentProduct.price}
                                    </p>
                                    <button className="price_Btn">Показать телефон</button>
                                    <div className="seller">
                                        <h5>ООО "Зеленоглазое такси"</h5>
                                        <p className="seller_check">Проверенный продавец</p>
                                    </div>
                                </div>
                            </div>

                            <div className="content-side">
                                <h3 className="content-side_title">Сервисы и услуги</h3>
                                <div className="content-side_box">
                                    <div className="content-side_list">
                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item-img" src="/images/img_3.png" alt="side-info" />
                                            <h5 className="content-side_list-item-title">Доставка</h5>
                                            <p className="content-side_list-item-text">
                                                Проверка при получении и возможность бесплатно вернуть товар
                                            </p>
                                        </div>
                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item-img" src="/images/img_4.png" alt="side-info" />
                                            <h5 className="content-side_list-item-title">Автотека</h5>
                                            <p className="content-side_list-item-text">
                                                отчет с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                            </p>
                                        </div>
                                        <div className="content-side_list-item">
                                            <img className="content-side_list-item-img" src="/images/img_5.png" alt="side-info" />
                                            <h5 className="content-side_list-item-title">Онлайн бронирование жилья</h5>
                                            <p className="content-side_list-item-text">
                                                Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                            </p>
                                        </div>
                                    </div>

                                    <div className="content-side_footer">
                                        <p className="content-side_footer-item">
                                            © ООО "Абито" 2011-2025
                                        </p>
                                        <a href="#!" className="content-side_footer-item">
                                            Политика конфиденциальности
                                        </a>
                                        <a href="#!" className="content-side_footer-item">
                                            Обработка данных
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}