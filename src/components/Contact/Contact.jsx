import { useEffect } from "react";
import "./Contact.css"



function Contact() {

    /* 
        * Similaire à componentDidMount et componentDidUpdate :
        * Met à jour le titre du document
    */

    useEffect(() => {
        document.title = "Portfolio | Contact"
    }, [])

    return (
        <div className="contact">
            Contact
        </div>
    )
}

export default Contact;