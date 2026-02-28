import { Header } from "../components/Header/Header"
import { Card } from "../Card/Card"
import { Search } from "../components/Header/Search.jsx"
import { useState, useRef, useEffect } from "react"
import { data } from "react-router-dom"

export const Home = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const searchQueryRef = useRef('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        searchQueryRef.current = searchQuery;
    }, [searchQuery]);

    useEffect(() => {
        const firstRequest = async () => {
            try {
                let request = await fetch('https://fakestoreapi.com/products');
                const requestJson = await request.json();
                console.log(requestJson)
                setProducts(requestJson);           // сохраняем полученные товары
                setFilteredCards(requestJson);

            } catch (err) {
                console.log('ОШИБКА В ПЕРВОМ', err)
            }

        }

        firstRequest()

    }, [])

    const handleSearchClick = (query) => {
        if (!query.trim()) {
            setFilteredCards(products);
            return;
        }

        const filtered = products.filter(product => {
            const cardTitle = product.title.toLowerCase();
            const searchTerm = query.toLowerCase();
            const includes = cardTitle.includes(searchTerm);

            return includes;
        });

        setFilteredCards(filtered);
    };


    return (
        <>

            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <Search
                            searchValue={searchQuery}
                            onSearchChange={setSearchQuery}
                            onSearchClick={handleSearchClick}
                        />
                    </div>
                </section>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main_title">Рекомендации для вас</h2>
                                <div className="content-main_list">
                                    {products.map(card => (
                                        <Card
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            price={card.price}
                                            adress={card.adress}
                                            date={card.date}
                                            image={card.image}
                                        />
                                    ))}
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
    )
}