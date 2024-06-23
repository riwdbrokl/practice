import "./style.css";
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Progress');
  };

  return (
    <main>
      <div className="vacancies">
        <h2>ВАКАНСИИ</h2>
        <p>Актуальные вакансии в салонах Цирюльникъ</p>
        <div className="city-selector">
          <div className="select_wrp">
            <select className="js-chosen" name="city">
              <option value="">Выберите город</option> 
              <option value="365">Москва</option>
              <option value="366">Санкт-Петербург</option>
              <option value="234">Новосибирск</option>
              <option value="292">Екатеринбург</option>
              <option value="314">Казань</option>
              <option value="222">Нижний Новгород</option>
              <option value="103">Красноярск</option>
              <option value="346">Челябинск</option>
              <option value="277">Самара</option>
              <option value="67">Калининград</option>
              <option value="338">Комсомольск-на-Амуре</option>
              <option value="17">Уфа</option>
              <option value="262">Ростов-на-Дону</option>
              <option value="92">Краснодар</option>
              <option value="237">Омск</option>
              <option value="249">Пермь</option>
            </select>
          </div>
        </div>
        <div className="vacancy-grid">
          <div className="vacancy">
            <h3>Женский парикмахер</h3>
            <p>Советский проспект, 2а</p>
            <button onClick={handleClick}>Пройти обучение</button>
          </div>
          <div className="vacancy">
            <h3>Мужской парикмахер</h3>
            <p>Советский проспект, 2а</p>
            <button onClick={handleClick}>Пройти обучение</button>
          </div>
          <div className="vacancy">
            <h3>Администратор</h3>
            <p>Советский проспект, 2а</p>
            <button onClick={handleClick}>Пройти обучение</button>
          </div>
          <div className="vacancy">
            <h3>Мастер маникюра</h3>
            <p>Советский проспект, 2а</p>
            <button onClick={handleClick}>Пройти обучение</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

