import './footer.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer({home, about, contact }) {
    const navigate = useNavigate();

    return (
        <div className="footer-comp">
            <div className="f-top-1">
                <a className='ft-img' href="#" onClick={()=>{navigate("/")}}><img src={Images.doon_logo} alt="" /></a>
                <p>Masters of Craft</p>
                <a href="mailto:doonjoineryandbuilding@gmail.com?Subject=Project Enquiry" target='_blank'><span>Email:</span>&nbsp; doonjoineryandbuilding @gmail.com</a>
                <a href="https://www.bing.com/maps?q=2+Kintyre+Ave%2C+Doonfoot%2C+Ayr+KA7+4GB&FORM=HDRSC6&cp=55.433105%7E-4.661396&lvl=16.1" target='_blank'>Ayr, United Kingdom</a>
            </div>

            <div className="f-top-2">
                <div className="company">Company</div>
                <ul>
                    <li className={home}><a href="#" onClick={()=>{navigate("/")}}>Home</a></li>
                    <li className={about}><a href="#" onClick={()=>{navigate("/about")}}>About us</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#services">Our services</a></li>
                    <li className={home} onClick={()=>{navigate("/")}}><a href="#portfolio">Portfolio</a></li>
                    <li className={contact}><a href="#" onClick={()=>{navigate("/contact")}}>Contact us</a></li>
                </ul>
            </div>

            <div className="f-top-3">
                <div className="social-media">Social Media</div>
                <div className="sm-app">
                    <a href="#"><FontAwesomeIcon className='med-app' icon={faInstagram} /></a>
                    <a href="https://web.facebook.com/CTLLANDSCAPING" target='_blank'><FontAwesomeIcon className='med-app' icon={faFacebookF} /></a>
                </div>
            </div>

            <p className="copyright">&copy;{new Date().getFullYear()} All Rights Reserved By Doon Joinery & Building Ltd</p>
        </div>
    )
}

export default Footer;