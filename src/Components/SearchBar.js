import searchlogo from '../Assets/searchlogo.png';

export default function SearchBar() {
  return (
    <div className='searchbars-and-button'>
        <div>
            <img src={searchlogo} alt='searchlogo' />
            <input type='text' placeholder='State'/>
        </div>
        <div>
            <img src={searchlogo} alt='searchlogo' />
            <input type='text' placeholder='City' />
        </div>
        <div>
            <button>Search</button>
        </div>
    </div>
  )
}
