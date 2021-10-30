import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

    return (
        <Nav>
            <h1>Music-eo</h1>
            <button>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </Nav>
    )
}

export default Nav;
