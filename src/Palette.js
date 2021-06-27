import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";

const handleDragStart = (event) => {
  const type = event.target.dataset.shape;

  if (type) {
    // x,y coordinates of the mouse pointer relative to the position of the padding edge of the target node
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;

    // dimensions of the node on the browser
    const clientWidth = event.target.clientWidth;
    const clientHeight = event.target.clientHeight;

    const dragPayload = JSON.stringify({
      type,
      offsetX,
      offsetY,
      clientWidth,
      clientHeight,
    });

    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload);
  }
};

const refrescarSocket = ()=>{

}

export function Palette({online, socket}) {
  return (
    <aside className="palette">
      {console.log(socket)}
      <p>
        Service status:
      {online 
        ?<span className="text-success"> Online</span>
        :<span className="text-danger"> offline</span>        
      }
      </p>
      <h2>Elementos</h2>
      <div
        data-shape={SHAPE_TYPES.RECT}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={()=>console.log("soltamos")}
      >
      <Icon.Square size={96}/>
      </div>
      <br/>
      <div
        data-shape={SHAPE_TYPES.CIRCLE}
        draggable
        onDragStart={handleDragStart}
        >
        <Icon.Circle size={96}/>
      </div>
      <br/>
      <div
        data-shape={SHAPE_TYPES.ARROW}
        draggable
        onDragStart={handleDragStart}
      >
      <Icon.ArrowRight size={96}/>
      </div>
    </aside>
  );
}
