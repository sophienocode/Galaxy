// App.jsx
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene.jsx";
import Sidebar from "./Sidebar.jsx";

export default function App() {
  return (
    <div className="h-screen w-full bg-black text-white relative overflow-hidden">
      
      {/* Background (galaxy) */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* Conteúdo acima */}
      <div className="relative z-10 flex h-full">
        
        {/* Sidebar */}
        <Sidebar  />

        {/* Conteúdo principal */}
        <main className="flex-1 p-10">
          <h1 className="text-4xl font-bold">
            
          </h1>
        </main>

      </div>

    </div>
  );
}