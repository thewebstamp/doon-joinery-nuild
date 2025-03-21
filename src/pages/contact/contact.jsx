import "./contact.css";
import ContactComp from '../../components/contactComp/contactComp';
import ContactForm from '../../components/contactForm/contactForm';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function Contact() {
    return (
        <div className="contact-page">
            <Header contact='active' />
            <ContactComp />
            <h2 className="c-page-h2">Get in Touch with Us Today for a Free Consultation and Estimate</h2>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;