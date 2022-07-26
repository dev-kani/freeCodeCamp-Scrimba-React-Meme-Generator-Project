import logoImage from '../assets/images/trollface_logo.png'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className='nav-content'>
          <div className='logo-div'>
            <img src={logoImage} alt="" />
            <h1>Meme Generator</h1>
          </div>
          <h2>Scrimba React Course - 3</h2>
        </div>
      </div>
    </nav>
  )
}
export default Header