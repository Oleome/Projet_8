import "./header.scss";
import mer from "../../assets/mer.jpg"

function Header() {
    return (
        <header>
            <img className="sea" src={mer} alt="plage au bord de mer" />
            <nav>
                <h1 className="logo">Hello</h1>
                <ul className="nav">
                    <li className="nav--container">À propos</li>
                    <li className="nav--container">Mes projets</li>
                    <li className="nav--container">Mes services</li>
                    <li className="nav--container">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header