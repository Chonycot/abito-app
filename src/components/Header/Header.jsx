import './Header.css'

export const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header-box">
                        <div className="header-logo">
                            <img src="/images/logo.svg" alt=""/>
                                <span>Abito</span>
                        </div>
                        <div className="header-controls">
                            <button className="btn btn-outline">Вход и регистрация</button>
                            <button className="btn btn-primary">Подать заявление</button>
                        </div>
                        <div className="header-burder">
                            <img src="/images/burger.png" alt="burger"/>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}