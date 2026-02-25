import { useState } from "react"



export const Search = (
    { searchValue, onSearchChange, onSearchClick }
) => {
    const inputChangeOmnissia = (e) => {
        onSearchChange(e.target.value)
    };

    const handleButtonClick = () => {
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