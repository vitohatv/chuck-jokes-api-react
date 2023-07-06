import './Menu.css'
const Menu = ({joke, generateJoke}) => {
    return (
        <div className="header">
            <div className='container'>
                <div className='chuck-jokes-block'> 
                    <div className='header-block-title'>
                        <h1 className='header-title'>Chuck Norris Jokes API</h1>
                        <p className='header-subtitle'>Генерация шуток от Chuck Norris</p>
                    </div>
                    <div className='header-joke-block'>
                        <p className='joke-text'>{joke}</p>
                        <button className='joke-generate-btn' onClick={generateJoke}>Generate New Joke</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;