export const SHAPE_TYPES = {
  RECT: "rect",
  CIRCLE: "circle",
  ARROW: "arrow",
};

export const DEFAULTS = {
  RECT: {
    STROKE: "#000000",
    FILL: "#ffffff",
    WIDTH: 150,
    HEIGHT: 100,
    ROTATION: 0,
    CORNERRADIUS: 20,
  },
  CIRCLE: {
    STROKE: "#000000",
    FILL: "#ffffff",
    RADIUS: 50,
  },
  ARROW:{
    // POINTS: [0,0,VALORARROW,0],
    STROKE: "#000000",
    STROKEWIDTH: 0.5,
    FILL: "#000000",
    ROTATION: 0,
  }
};

export const LIMITS = {
  RECT: {
    MAX: 1000,
    MIN: 100,
  },
  CIRCLE: {
    MAX: 500,
    MIN: 5,
  },
  ARROW:{
    MAX: 1000,
    MIN: 10,
  }
};

export const DRAG_DATA_KEY = "__drag_data_payload__";
