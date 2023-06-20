import { Suspense } from "react";
import RoomModel from "../models/RoomModel";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";


const Home = () => {
  const portfolioText = {
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "center",
    padding: "3em",
  };
  return (
    <div>
      <div style={portfolioText}>Welcome To My Portfolio</div>
      <div style={{height: '40em'}}> 
      <Canvas>
        <Suspense fallback={null}>
          <axesHelper />
          <pointLight position={[2,2,0]}/>
          {/* <pointLight position={[-10,2,10]} /> */}
          <RoomModel position={[0,-2,0]} scale={0.07}/>
          {/* <OrbitControls /> */}
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
 </div>
    </div>
  );
};

export default Home;
