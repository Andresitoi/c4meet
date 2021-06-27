import React, { useEffect, useState } from "react";
import io from 'socket.io-client';

import { Palette } from "./Palette";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";

const connectSocketServer = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  });
  return socket;
}

function App() {
  const [socket] = useState(connectSocketServer())
  const [online, setOnline] = useState(false);
  

  useEffect(() => {
    // console.log(socket)
    setOnline( socket.connected);
  }, [socket]);

  useEffect(() =>{
    socket.on('connect',() =>{
      setOnline( true );
    })
  },[socket]);

  useEffect(() =>{
    socket.on('disconnect',() =>{
      setOnline( false );
    })
  },[socket]);

  return (
    <div className="app">
      
      <Palette online={online} socket={socket}/>
      <Canvas />
      <PropertiesPanel />
    </div>
  );
}

export default App;
