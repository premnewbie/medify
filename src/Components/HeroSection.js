import heroimage from '../Assets/heroimage.png';

const HeroSection = () => {
    return ( 
        <div className="hero-section">
            <div className='hero-text'>
                <h5>Skip the Travel! Find Online</h5>
                <div className='medical-center-text'>
                    <div>
                        <h1>Medical</h1>
                        <h1 id='centers-blue'>Centers</h1>
                    </div>
                    <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                    <button>Find Centers</button>
                </div>
            </div>
            <img src={heroimage} alt='heroimage' />
        </div>
     );
}
 
export default HeroSection;