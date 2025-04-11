import { useEffect,useState } from 'react'
import viteLogo from '/vite.svg'
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import Header from './components/Header'
import MainPage from './components/MainPage'
import particlesOptions from "./particles.json";
import  "./app.css"

function App() {

    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
      <>
          {init && <Particles options={particlesOptions}/>}
          <Header></Header>
          <MainPage></MainPage>
      </>
  )
}

export default App
