import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'Alan Sharp ',
            address: 'Elgin',
            review: "These guys renovated our work office and I was impressed so much by their work that I have used them to complete jobs in my own house. All work was completed to an exceptionally high standard and I would thoroughly recommend them."
        },
        {
            name: 'Adelle Bradley',
            address: 'Kilmanock',
            review: 'I had a small job done with this company today and would recommend them for anything. Between the friendliness of the workers and the quick replies made this so easy for me to get my job done. Will be using them again for further projects 🙌🏼'
        },
        {
            name: 'Darryl White ',
            address: 'Ayr',
            review: 'We contacted doon joinery and building ltd to carry out the job of  fitting the skirtings and facings in a 2 bedroom flat we were working on. This company is very reliable and carries out the work to a professional manor.'
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.testimonial} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">TESTIMONIALS</div>
                <h2>What Customers Say About Doon Joinery & Building Ltd</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <a href='#'>{review.name}</a>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                <a className='facebook-review' href="https://web.facebook.com/CTLLANDSCAPING/reviews" target='_blank'><img src={Images.facebookReviews} alt="" /></a>
            </div>
        </div>
    )
}

export default Testimonial;