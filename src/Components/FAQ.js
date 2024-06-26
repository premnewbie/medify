import smiley from '../Assets/smiley.png';
import faqmainimage from '../Assets/faqmainimage.png';
import faqheart from '../Assets/faqheart.png';

export default function FAQ() {
  return (
    <div style={{textAlign:'center'}}>
        <h5 style={{color:'#2AA7FF',fontWeight:600}}>Get Your Answer</h5>
        <h1 style={{color:'#1B3C74',fontWeight:600}}>Frequently Asked Questions</h1>
        <div className='faq'>
            <div className='faq-imgs-div'>
                <div className='faq-imgs'>
                    <div className='smiley'>
                        <img src={smiley} alt='smiley' />
                        <div>
                            <h4>84K+</h4>
                            <h6>Happy Patients</h6>
                        </div>
                    </div>
                    <img src={faqmainimage} alt='faqmainimage' className='faqmainimage' />
                    <img src={faqheart} alt='faqheart' className='faqheart' />
                </div>
                <div className='faqs'>
                    <h5 style={{color:'#1B3C74',fontWeight:600}}>Why choose our medical for your family?</h5>              
                    <h5 style={{color:'#1B3C74',fontWeight:600}}>Why we are different from others?</h5>                
                    <h5 style={{color:'#1B3C74',fontWeight:600}}>Trusted & experience senior care & love</h5>              
                    <h5 style={{color:'#1B3C74',fontWeight:600}}>How to get appointment for emergency cases?</h5>                   
                </div>
                <div className='faqs'>
                    <h5 style={{color:'#2AA7FF',fontWeight:600}}>+</h5>              
                    <h5 style={{color:'#2AA7FF',fontWeight:600}}>+</h5>              
                    <h5 style={{color:'#2AA7FF',fontWeight:600}}>+</h5>
                    <h5 style={{color:'#2AA7FF',fontWeight:600}}>+</h5>
                </div>
            </div>
        </div>
    </div>
  )
}
