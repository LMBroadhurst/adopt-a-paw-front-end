import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./AccountPage.css";
import { Link } from "react-router-dom";



const AccountPage = () => {

    const handleLogIn = event => {
        event.preventDefault()
    }

  return (
    <>
        <section className="ap__background--color">
            <h2>Join us, and begin your adoption journey...</h2>
            <main id="Account-Main-Page">
                <section className="LogIn-Section">
                    <h3>Adopt A Paw <FontAwesomeIcon icon={faPaw} /> </h3>

                    <form>
                        <input type="text" placeholder="Email Address" />
                        <input type="text" placeholder="Password" />
                        <button type="submit" onClick={handleLogIn}><Link to="/account/admin">Log In</Link></button>
                    </form>

                    <span className="Forgot-Password-Acc"><Link to="/account/userLandPage">Forgot your password?</Link></span>

                    <button className="New-Acc-BTN" type="button"><Link to="/account/createAccount">Create New Account</Link></button>
                </section>

                <section className="Animal-Image-Acc">
                    <img src="https://placedog.net/600/600" alt="" />
                </section>
            </main>
        </section>
    </>
  )
}

export default AccountPage