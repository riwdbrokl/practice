import "./style.css";

import social from "./../../image/Social Icons (1).png";

const Footer =()=>{
    return(
        <footer>
        <div class="footer">
            <p>© Цирюльникъ. Все права защищены</p>
            <img src={social} alt="ВКонтакте"/>
        </div>

    <div id="loginModal" class="mobile">
        <div class="telegramy">
            <span class="close" id="loginClose">&times;</span>
            <h2>Войти с помощью Telegram</h2>
            <button id="loginButton" class="TgBtn">Войти</button>
        </div>
    </div>
</footer>

    )
};

export default Footer;