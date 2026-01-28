import { useState } from "react"



export const Search = (
    { searchValue, onSearchChange, onSearchClick }
) => {
    console.log('Search значения', searchValue, onSearchChange, onSearchClick);
    const inputChangeOmnissia = (e) => {
        console.log('Input изменился на:', e.target.value);
        onSearchChange(e.target.value)
    };

    const handleButtonClick = () => {
        console.log('Кнопка нажата! Передаём значение:', searchValue);
        onSearchClick(searchValue);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Поиск по объявлениям"
                value={searchValue}
                onChange={inputChangeOmnissia}
            />
            <button
                type="button"
                className="btn btn-primary search-btn"
                onClick={handleButtonClick}
            >
                <img className="search-btn_icon" src="/images/lupa.png" alt="search" />
                <span className="search-btn_text">Найти</span>
            </button>
        </div>
    )
}