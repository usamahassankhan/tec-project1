import React, { useState, useEffect } from "react";
import laam from "./../assets/alphabets/lam_1.gif";
import hai from "./../assets/alphabets/hai_1.gif";
import tai from "./../assets/alphabets/te_1.jpg";
import kaaf from "./../assets/alphabets/qaf_1.gif";
import hamza from "./../assets/alphabets/hamzah_1.jpg";

import dal from "./../assets/alphabets/dal_1.jpg";
import toe from "./../assets/alphabets/toe_1.gif";
import daal from "./../assets/alphabets/daal_1.gif";
import bai from "./../assets/alphabets/bai_1.gif";
import bareyay from "./../assets/alphabets/bariye_1.jpg";
import seen from "./../assets/alphabets/sin_1.jpg";
import tai1 from "./../assets/alphabets/te_1.jpg";
import gain from "./../assets/alphabets/ghain_1.gif";
import zuad from "./../assets/alphabets/zuad_1.gif";
// const wordsImages = [
//   require("../assets/alphabets/lam_1.jpeg"),
//   require("../assets/alphabets/hai_1.jpeg"),
//   require("../assets/alphabets/te_1.jpg"),
//   require("../assets/alphabets/qaf_1.jpeg"),
//   require("../assets/alphabets/hamzah_1.jpg"),
//   require("../assets/alphabets/dal_1.jpg"),
//   require("../assets/alphabets/toe_1.gif"),
//   require("../assets/alphabets/daal_1.gif"),
//   require("../assets/alphabets/bai_1.gif"),
//   require("../assets/alphabets/bariye_1.jpg"),
//   require("../assets/alphabets/sin_1.jpg"),
//   require("../assets/alphabets/te_1.jpg"),
//   require("../assets/alphabets/ghain_1.gif"),
//   require("../assets/alphabets/zuad_1.jpg"),
// ];
import "./index.css";
import { words } from "lodash";
const Level2 = () => {
  const [state1, setState1] = useState(0);
  const [ans, setans] = useState();
  const [result, setresult] = useState("");
  const incrementbtn = () => {
    setState1(state1 + 1);
    setresult("");
    // st(!t);
  };
  const decrementbtn = () => {
    setState1(state1 - 1);
    setresult("");
    // setResult("");
  };
  const imagesl2 = [
    laam,
    hai,
    tai,
    kaaf,
    hamza,
    dal,
    toe,
    daal,
    bai,
    bareyay,
    seen,
    tai1,
    gain,
    zuad,
  ];
  const wordsToPick = [
    "ل",
    "ح",
    "ٹ",
    "ق",
    "ء",
    "د",
    "ط",
    "ڈ",
    "ب",
    "ے",
    "س",
    "ٹ",
    "غ",
    "ض",
  ];
  const button1 = [
    "ء",
    "ی",
    "ٹ",
    "ض",
    "و",
    "د",
    "ق",
    "ذ",
    "ب",
    "ے",
    "ض",
    "ٹ",
    "غ",
    "ن",
  ];
  const button2 = [
    "ل",
    "و",
    "پ",
    "ی",
    "ی",
    "و",
    "غ",
    "ڈ",
    "ت",
    "ڈ",
    "ش",
    "ت",
    "خ",
    "ض",
  ];
  const button3 = [
    "ظ",
    "ح",
    "ث",
    "ق",
    "ء",
    "ض",
    "ط",
    "ژ",
    "ن",
    "ی",
    "س",
    "ث",
    "ع",
    "س",
  ];
  var a = button3.map((aa) => <p>{aa}</p>);
  console.log(a);
  console.log("dsda", button2[1] == wordsToPick[0]);
  console.log(ans);
  useEffect(() => {
    if (wordsToPick[state1] === ans) {
      setresult("sahe");
    } else if (wordsToPick[state1] !== ans) {
      setresult("galat");
    } else {
      setresult();
    }
    // setresult("");
  }, [ans]);
  console.log("RESULT", result);
  return (
    <section className="bgmain ">
      <div className="container">
        <div className="subcontainer">
          <img className="imgone" src={imagesl2[state1]} />
          <div className=" d-flex justify-content-center m-4">
            <p
              className="bord brd1 mx-3"
              onClick={() => setans(button1[state1])}
            >
              {button1[state1]}
            </p>
            <p
              className="bord brd2 mx-3"
              onClick={() => setans(button2[state1])}
            >
              {button2[state1]}
            </p>
            <p
              className="bord mx-3 brd3"
              onClick={() => setans(button3[state1])}
            >
              {button3[state1]}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            {" "}
            {result == "sahe" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="green"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
              </svg>
            )}
            {result === "galat" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="red"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
              </svg>
            )}
          </div>

          <div className=" d-flex justify-content-center m-4 align-items-center">
            <button
              className="push_button red"
              disabled={state1 < 1 ? true : false}
              style={{
                width: "100px",
                backgroundColor: "blue",
                color: "white",
                margin: 4,
                fontSize: "2em",
                fontWeight: "bold",
              }}
              onClick={decrementbtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="26"
                fill="white"
                class="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                {/*    */}
              </svg>
            </button>
            <button
              className="push_button red"
              disabled={state1 > 12 ? true : false}
              style={{
                width: "100px",
                backgroundColor: "blue",
                color: "white",
                margin: 0,
                fontSize: "2em",
                fontWeight: "bold",
              }}
              onClick={incrementbtn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="26"
                fill="white"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                {/* <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" /> */}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Level2;
