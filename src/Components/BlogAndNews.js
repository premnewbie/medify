import blogcard from '../Assets/blogcard.png';
import rebeccalee from '../Assets/rebeccalee.png';

export default function BlogAndNews() {
  return (
    <div className='blog-and-news'>
        <p className='blog-and-news-p' style={{fontWeight:600}}>Blog & News</p>
        <h1>Read Our Latest News</h1>
        <div className='blog-cards'>
            <div className='blog-card'>
                <img src={blogcard} alt="blogcard" className='blog-card-img' />
                <div className='card-date-and-title'>
                    <h6>Medical</h6>
                    <h6>March 31,2022</h6>
                </div>
                <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <div className='card-doctor'>
                    <img src={rebeccalee} alt="rebeccalee" />
                    <p>Rebecca Lee</p>
                </div>
            </div>
            <div className='blog-card'>
                <img src={blogcard} alt="blogcard" className='blog-card-img' />
                <div className='card-date-and-title'>
                    <h6>Medical</h6>
                    <h6>March 31,2022</h6>
                </div>
                <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <div className='card-doctor'>
                    <img src={rebeccalee} alt="rebeccalee" />
                    <p>Rebecca Lee</p>
                </div>
            </div>
            <div className='blog-card'>
                <img src={blogcard} alt="blogcard" className='blog-card-img' />
                <div className='card-date-and-title'>
                    <h6>Medical</h6>
                    <h6>March 31,2022</h6>
                </div>
                <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <div className='card-doctor'>
                    <img src={rebeccalee} alt="rebeccalee" />
                    <p>Rebecca Lee</p>
                </div>
            </div>
        </div>
    </div>
  )
}
