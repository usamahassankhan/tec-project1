import React, { useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import { useIsMobileOrTablet } from "./../../src/utils/isMobileOrTablet";
import "./index.css";
// static defaultProps = {
//     onChange: null
//     loadTimeOffset: 5,
//     lazyRadius: 30,
//     brushRadius: 12,
//     brushColor: "#444",
//     catenaryColor: "#0a0302",
//     gridColor: "rgba(150,150,150,0.17)",
//     hideGrid: false,
//     canvasWidth: 400,
//     canvasHeight: 400,
//     disabled: false,
//     imgSrc: "",
//     saveData: null,
//     immediateLoading: false,
//     hideInterface: false
//   };
const Paints = (props) => {
  const isMobOrTab = useIsMobileOrTablet();
  const clear = () => {
    firstcanvas.current.clear();
    // secondcanvas.current.clear();
  };
  const clear2 = () => {
    firstcanvas1.current.clear();
    // secondcanvas.current.clear();
  };

  console.log("d", props.t);
  const firstcanvas = useRef(null);
  const firstcanvas1 = useRef(null);

  useEffect(() => {
    clear();
  }, [props.t]);
  useEffect(() => {
    clear2();
  }, [props.t]);
  return (
    <div className="container-fluid">
      <div className="paint row d-flex justify-content-center">
        {/* <button onClick={clear}>clear</button> */}
        <div className="col-6">
          <CanvasDraw
            // className="col-5 canva1"
            brushColor={props.color}
            hideGrid={true}
            onChange="null"
            brushRadius="4"
            ref={firstcanvas}
            style={{
              border: "1px solid gray",
              onChange: null,
              brushColor: "#444",
              boxShadow:
                "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
              width: "100%",
              // margin: "auto",
              // width: "500px",
              // display: "flex",
              // height: "550px",
              // width: "500px",
              // justifyContent: "center",
            }}
          />
        </div>
        <div style={{ position: "relative" }} className="col-6">
          <CanvasDraw
            className="canva2"
            brushColor={props.color}
            hideGrid={true}
            onChange="null"
            ref={firstcanvas1}
            brushRadius="4"
            style={{
              border: "1px solid gray",
              onChange: null,
              brushColor: "#444",
              boxShadow:
                "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
              width: "100%",
              // position: "relative",

              // height: "550px",
              // width: "500px",
              // margin: "auto",
              // width: "500px",

              // justifyContent: "center",
            }}
          />
          <img
            className="dotimg"
            src={props.alif}
            style={
              {
                // height: "200px",
                // width: "200px",
                // position: "absolute",
                // left: "35%",
                // top: "20%",
                // zIndex: 999999,
              }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Paints;
