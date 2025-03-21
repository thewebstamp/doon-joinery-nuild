import './serviceComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function ServiceComp() {
    const navigate = useNavigate();
    const [ourServices, setOurServices] = useState([
        {
            title: 'New Builds',
            description: 'We construct new homes with precision and attention to detail',
            image: Images.new_build
        },
        {
            title: 'Timber Frame Erecting',
            description: 'We ensure durable and efficient timber frame construction',
            image: Images.framing
        },
        {
            title: 'Extension & Conversion',
            description: 'Our team delivers seamless extensions and conversions',
            image: Images.extension_conversion
        },
        {
            title: 'Joinery Installation',
            description: 'Our skilled craftsmen handle all aspects of joinery',
            image: Images.joinery
        },
        {
            title: 'Full Renovation',
            description: 'Complete transformations to modernize and improve your property',
            image: Images.renovation
        },
        {
            title: 'General Maintenance',
            description: 'Reliable repairs & maintenance to keep your property in top condition',
            image: Images.maintenance
        },
        {
            title: 'Fencing & Decking',
            description: 'High-quality fencing & decking solutions to enhance outdoor spaces',
            image: Images.decking_fencing
        },
        {
            title: 'Windows & Doors',
            description: 'Professional installation of high-quality windows and doors',
            image: Images.door_window
        },
        {
            title: 'Media Walls',
            description: 'Stylish & functional media walls for a modern touch to your interiors',
            image: Images.media_wall
        }
    ]);

    function scrollLeft() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.push(o[0]);
            o.shift();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-left");
            setTimeout(() => {
                item.classList.remove("s-slide-left");
            }, 400);
        })
    }

    function scrollRight() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.unshift(o[o.length-1]);
            o.pop();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-right");
            setTimeout(() => {
                item.classList.remove("s-slide-right");
            }, 400);
        })
    };

        const serviceT = useRef();
        const serviceB = useRef();
    
        function slideUp() {
            if (window.location.pathname == "/") {
                if (window.innerHeight * 0.9 >= serviceT.current.getBoundingClientRect().top) {
                    serviceT.current.classList.add("slide-up");
                } else {
                    serviceT.current.classList.remove("slide-up");
                }
    
                if (window.innerHeight * 0.9 >= serviceB.current.getBoundingClientRect().top) {
                    serviceB.current.classList.add("slide-up");
                } else {
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }
    
        useEffect(() => {
            window.addEventListener("scroll", slideUp);
    
            return () => {
                if (window.location.pathname == "/") {
                    serviceT.current.classList.remove("slide-up");
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }, []);

    return (
        <div className="service-comp" id='services'>
            <div className="s-up" ref={serviceT}>
                <div className="s-heading">
                    <div className="s-headline">DOON JOINERY & BUILDING LTD</div>
                    <h2>Expert Solutions for All Your Joinery and Building Needs</h2>
                </div>
                <div className="s-text">
                    <p>From start to finish of your project, our team of expert is here to provide you with top-quality solutions that combine functionality, durability, and aesthetic appeal. <span>WE&nbsp; OFFER&nbsp; THE&nbsp; FOLLOWING&nbsp; RANGE&nbsp; OF&nbsp; SERVICES:</span></p>
                    <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
                </div>
            </div>

            <div className="s-base-wrap" ref={serviceB}>
                <div className="s-base">
                    <div className="top">
                        <div className="s-top-case">
                            {ourServices.map((item, i) => (
                                <div key={i} className="items">
                                    <div className="item-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="control">
                        <FontAwesomeIcon id='s-control-l' icon={faArrowLeft} onClick={scrollRight} />
                        <FontAwesomeIcon id='s-control-r' icon={faArrowRight} onClick={scrollLeft} />
                    </div>
                </div>
                <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceComp;