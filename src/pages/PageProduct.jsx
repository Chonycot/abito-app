import "./product.css";
import "../index.css";
import { Header } from "../components/Header/Header"
import { cardArray } from "../constants"
import { data, useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from "react"


export const Page_1 = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('пока все работает');
    

    useEffect(() => {
        const secondeRequest = async () => {
            try {
                setLoading(true);
                let requestProd = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await requestProd.json();
                
                if (!requestProd.ok) throw new Error('Товар не найден');
                setError(null);
                setProduct(data);


            } catch (err) {
                console.log('ОШИБКА ВО ВТОРОМ', err)
                setError(err.message);
                setProduct(null);
            } finally {
                setLoading(false);
            }

        }

        secondeRequest()

         console.log('Я ЖИВ 2!')

    }, [id])

    console.log('Я ЖИВ!')
    console.log(data)


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
                                        {product.title}
                                    </h2>
                                    <img src={`${product.image}`} alt="Самокат электричесий" id="page_img" />
                                    <p id="page_txt">{product.description}</p>
                                </div>
                                <div className="page_inf">
                                    <p className="price">
                                        {product.price} €
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