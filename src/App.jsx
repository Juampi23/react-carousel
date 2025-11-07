import Carousel from './components/Carousel'
import reactLogo from './assets/react.svg'
import githubLogo from './assets/github.svg'
import sparqLogo from './assets/sparq.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const carouselItems = [
    <a key="vite" href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>,
    <a key="react" href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>,
    <a key="sparq" href="https://www.teamsparq.com/" target="_blank">
    <img src={sparqLogo} className="logo sparq" alt="Sparq logo" />
    </a>,    
    <a key="github" href="https://github.com/Juampi23/react-carousel" target="_blank">
      <img src={githubLogo} className="logo github" alt="GitHub logo" />
    </a>,
  ];

  return (
    <>
      <div>
        {/* { carouselItems } */}
      </div>
      <Carousel delay={1500}>{carouselItems}</Carousel>
    </>
  )
}

export default App
