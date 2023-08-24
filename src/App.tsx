import "./App.css";
import { Icon } from "@iconify/react";
import Logo from "./image/logo.svg";

function App() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="navigation_section logo_section">
                        <div>
                            <a className="logo">
                                <img src={Logo} alt="" id="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="navigation_section search_section">
                        <div className="search_box">
                            <input
                                className="search_input"
                                type="text"
                                name=""
                                placeholder="なにをお探しですか？"
                            />
                            <a href="#" className="search_btn">
                              <Icon icon="circum:search"  width="20" height="20"/>
                            </a>
                        </div>
                    </div>
                    <div className="navigation_section nav" style={{ flex: 1 }}>
                        <ul className="nav_list">
                            <li>
                                <a href="">ログイン</a>
                            </li>
                            <li>
                                <a href="">会員登録</a>
                            </li>
                            <li>
                              <Icon icon="bx:bell" width="30" height="30" />
                            </li>
                            <li>
                                <a className="button" href="">
                                    出品
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default App;
