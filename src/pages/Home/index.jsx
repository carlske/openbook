import NavAuthors from "../../layouts/NavAuthors/NavAuthors";
import logo from '../../assets/img/logo.webp'
import book from '../../assets/img/book.webp'
import calendar from '../../assets/img/calendar.webp'

function Home () {
    return (
      <div className='app'>
        <section className='app-content'>
            <div className="content__logo">
                <img src={logo} alt="open book logo"/>;
            </div>
            <div className="content__title">
                <h1 className="tangerine-bold">OPEN BOOK</h1>
            </div>
        </section>
        <section className="app__welcome">
            <p className="welcome__text">Welcome to Open Library</p>
        </section>
        <section className="app__info">
            <div className="info__online">
                <img src={book} alt="book free books" />
                <div className="online__text">
                    <p className="text__titile">Read Free Library Books Online</p>
                    <p className="text__description">Millions of books available through Controlled Digital Lending</p>
                </div>
            </div>
        </section>
        <section className="app__info">
            <div className="info__online">
                <div className="online__text">
                    <p className="text__titile">Read Free Library Books Online</p>
                    <p className="text__description">Millions of books available through Controlled Digital Lending</p>
                </div>
                <img src={calendar} alt="book free books" />
            </div>
        </section>
        
      </div>
    )
}

export default Home