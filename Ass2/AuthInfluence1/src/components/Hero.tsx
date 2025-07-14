import imageBackground from '../../public/background.webp';

const Hero = () => {
  return (
    <div className="p-5 bg-yellow-50 text-blue-700 text-2xl font-medium " style={{ backgroundImage: `url(${imageBackground})` }}>
        <h1> Hero Componenet is being renderd here guys</h1>
        <img/>
        <p> Hello guys, whats up?</p>
    </div>
  )
}

export default Hero