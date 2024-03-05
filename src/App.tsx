
import './App.css'
import AnimationSection from './components/AnimationSection'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {


  return (
    <>
    <div className='firstSection'>
      <div className='containerHeaderHero'>
        <Header />
        <Hero />
      </div>
      <AnimationSection />    
    </div>

    {/*  <SecondSection />
     <ThirdSection />
     <Footer /> */}
    </>
  )
}

export default App
