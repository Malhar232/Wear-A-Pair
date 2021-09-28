import React,{useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import { ContactShadows,  OrbitControls } from "@react-three/drei"
import Nav from './Nav';
import Showcase from './Showcase';
import '../styles/IntroScreen.scss';
import Model from './Model'

function IntroScreen(){
    const [color,setColor]=useState("white");

    return(
        <div className="HomePage-Main">
        <Nav/>
        <div className="HomePage-Wrapper">
            
            <div className="tagLine">
                <div >
                    <div>Nike
                    <br/>Air Zoom  
                    <br/>Pegasus 36</div>    
                </div>
                <button>ADD TO BAG</button>
            </div>
            <div className="backDrop"></div>

            <div className="canvas_div">

            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 3.3], fov: 43 }}>
                
                <ambientLight intensity={0.7} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Suspense fallback={null}>
               
                <Model color={color}/>
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.5} width={10} height={10} blur={1.5} far={0.8} />
                </Suspense>
                {/* autoRotate={true} autoRotateSpeed={10} */}
                <OrbitControls minPolarAngle={0} maxPolarAngle={4* Math.PI} enableZoom={false} enablePan={false}  />
            </Canvas>
            </div>
            
            <div className="Available-colors">
                <button onClick={()=>setColor("purple")}></button>
                <button onClick={()=>setColor("red")}></button>
                <button onClick={()=>setColor("white")}></button>
            </div>
        </div>
        <Showcase/>
        </div>
    )
}
export default IntroScreen;