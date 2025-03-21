import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.p10} />
                    <img className='ah-img-2' src={Images.p3} />
                    <img className='ah-img-height' src={Images.p10} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>ABOUT DOON JOINERY & BUILDING LTD</div>
                <h2>We Provide the Best Joinery and Construction Service</h2>
                <p>Doon Joinery and Building Ltd is a trusted, Ayr-based company offering comprehensive joinery and building services. Specialising in all aspects of joinery, the company caters to both residential and commercial clients, providing high-quality craftsmanship and tailored solutions for every project. From custom furniture, kitchen installations, and cabinetry to full-scale building and renovation services, Doon Joinery and Building Ltd combines skill, reliability, and attention to detail to exceed customer expectations</p>
            </div>
        </div>
    )
}

export default AboutHero;