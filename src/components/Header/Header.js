import "./style.css";

import image from "./../../image/Male.png";

const Header =() =>{
    return(
        <header>
        <div>
            <div class="image">
                <img src={image}/>
                <h1>Lorem ipsum</h1>
                <p class="Lorem">Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit</p>
            </div>
            <button>Приступить к обучению</button>
                </div>
            </header>
    )
}

export default Header;