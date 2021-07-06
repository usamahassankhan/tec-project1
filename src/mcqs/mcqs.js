import React, { useState, useEffect } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { makeStyles } from '@material-ui/core/styles';

// import data from "./../question.json";
import "./index.css";
// import im0 from "./../assets/alphabets/alif.png";
// import im1 from "./../assets/alphabets/alif_1.gif";
// import im2 from "./../assets/alphabets/bai.png";
// import im3 from "./../assets/alphabets/bai_1.gif";
// import im4 from "./../assets/alphabets/pai.png";
// import im5 from "./../assets/alphabets/pai_1.gif";
// import im6 from "./../assets/alphabets/tai.png";
// import im7 from "./../assets/alphabets/tai_1.jpg";

import im0 from "./../assets/alphabets/alif.jpg";
import im1 from "./../assets/alphabets/bai.jpg";
import im2 from "./../assets/alphabets/pai.jpg";
import im3 from "./../assets/alphabets/tai.jpg";
import im4 from "./../assets/alphabets/te.jpg";
import im5 from "./../assets/alphabets/se.jpg";
import im6 from "./../assets/alphabets/jim.jpg";
import im7 from "./../assets/alphabets/ce.jpg";
import im8 from "./../assets/alphabets/hai.jpg";
import im9 from "./../assets/alphabets/khai.jpg";
import im10 from "./../assets/alphabets/dal.jpg";
import im11 from "./../assets/alphabets/daal.jpg";
import im12 from "./../assets/alphabets/zal.jpg";
import im13 from "./../assets/alphabets/re.jpg";
import im14 from "./../assets/alphabets/ade.jpg";
import im15 from "./../assets/alphabets/ze.jpg";
import im16 from "./../assets/alphabets/zhe.jpg";
import im17 from "./../assets/alphabets/sin.jpg";
import im18 from "./../assets/alphabets/shin.jpg";
import im19 from "./../assets/alphabets/suad.jpg";
import im20 from "./../assets/alphabets/zuad.jpg";
import im21 from "./../assets/alphabets/toe.jpg";
import im22 from "./../assets/alphabets/zoe.jpg";
import im23 from "./../assets/alphabets/ain.jpg";
import im24 from "./../assets/alphabets/ghain.jpg";
import im25 from "./../assets/alphabets/fe.jpg";
import im26 from "./../assets/alphabets/qaf.jpg";
import im27 from "./../assets/alphabets/kaf.jpg";
import im28 from "./../assets/alphabets/gaf.jpg";
import im29 from "./../assets/alphabets/lam.jpg";
import im30 from "./../assets/alphabets/meem.jpg";
import im31 from "./../assets/alphabets/noon.jpg";
import im32 from "./../assets/alphabets/wao.jpg";
import im33 from "./../assets/alphabets/chotihe.jpg";
import im34 from "./../assets/alphabets/hamzah.jpg";
import im35 from "./../assets/alphabets/ye.jpg";
import im36 from "./../assets/alphabets/bariye.jpg";

import ima0 from "././../assets/alphabets/alif_1.gif";
import ima1 from "./../assets/alphabets/bai_1.gif";
import ima2 from "./../assets/alphabets/pai_1.png";
import ima3 from "./../assets/alphabets/tai_1.gif";
import ima4 from "./../assets/alphabets/te_1.jpg";
import ima5 from "./../assets/alphabets/se_1.gif";
import ima6 from "./../assets/alphabets/jim_1.gif";
import ima7 from "./../assets/alphabets/ce_2.gif";
import ima8 from "./../assets/alphabets/hai_1.gif";
import ima9 from "./../assets/alphabets/khai_1.gif";
import wao from "./../assets/sounds/he.mp3";
import ima10 from "./../assets/alphabets/dal_1.gif";
import ima11 from "./../assets/alphabets/daal_1.gif";
import ima12 from "./../assets/alphabets/zal_1.jpg";
import ima13 from "./../assets/alphabets/re_1.jpg";
import ima14 from "./../assets/alphabets/ade_1.gif";
import ima15 from "./../assets/alphabets/ze_1.gif";
import ima16 from "./../assets/alphabets/zhe_1.gif";
import ima17 from "./../assets/alphabets/sin_1.gif";
import ima18 from "./../assets/alphabets/shin_1.gif";
import ima19 from "./../assets/alphabets/suad_1.gif";
import ima20 from "./../assets/alphabets/zuad_1.gif";
import ima21 from "./../assets/alphabets/toe_1.gif";
import ima22 from "./../assets/alphabets/zoe_1.gif";
import ima23 from "./../assets/alphabets/ain_1.gif";
import ima24 from "./../assets/alphabets/ghain_1.gif";
import ima25 from "./../assets/alphabets/fe_1.gif";
import ima26 from "./../assets/alphabets/qaf_1.gif";
import ima27 from "./../assets/alphabets/kaf_1.gif";
import ima28 from "./../assets/alphabets/gaf_1.gif";
import ima29 from "./../assets/alphabets/lam_1.gif";
import ima30 from "./../assets/alphabets/meem_1.gif";
import ima31 from "./../assets/alphabets/noon_1.gif";
import ima32 from "./../assets/alphabets/wao_1.gif";
// import ima33 from "./../assets/alphabets/he.jpeg";
import ima34 from "./../assets/alphabets/hamzah_1.jpg";
import ima35 from "./../assets/alphabets/ye_1.gif";
import ima36 from "./../assets/alphabets/bariye_1.jpg";
import a from "./../assets/Output/alif.mp3";
import b from "./../assets/Output/bili.mp3";
import c from "./../assets/Output/pai.mp3";
import d from "./../assets/Output/tai.mp3";
import e from "./../assets/Output/ta.mp3";
import f from "./../assets/Output/sai.mp3";
import g from "./../assets/Output/jeem.mp3";
import h from "./../assets/Output/chai.mp3";
import i from "./../assets/Output/hai.mp3";
import j from "./../assets/Output/khai.mp3";
import k from "./../assets/Output/daal.mp3";
import l from "./../assets/Output/daaal.mp3";
import m from "./../assets/Output/zaal.mp3";
import n from "./../assets/Output/rai.mp3";
import o from "./../assets/Output/rtai.mp3";
import p from "./../assets/Output/zee.mp3";
import q from "./../assets/Output/zaala.mp3";
import r from "./../assets/Output/seen.mp3";
import s from "./../assets/Output/sheen.mp3";
import ta from "./../assets/Output/suad.mp3";
import u from "./../assets/Output/duad.mp3";
import v from "./../assets/Output/toa.mp3";
import w from "./../assets/Output/zoa.mp3";
import x from "./../assets/Output/aen.mp3";
import y from "./../assets/Output/gen.mp3";
import z from "./../assets/Output/fa.mp3";
import a1 from "./../assets/Output/kaf.mp3";
import a2 from "./../assets/Output/kaaf.mp3";
import a3 from "./../assets/Output/gaaf.mp3";
import a4 from "./../assets/Output/laam.mp3";
import a5 from "./../assets/Output/meem.mp3";
import a6 from "./../assets/Output/noon.mp3";
import a7 from "./../assets/Output/wao.aac";
import a8 from "./../assets/Output/h.mp3";
import a9 from "./../assets/Output/hamza.mp3";
import a10 from "./../assets/Output/yae.mp3";
import a11 from "./../assets/Output/bareyay.mpeg";

import Paints from "./../paints/paints";

const Mcqs = () => {
  const data = [
    {
      alif: im0,
      img: ima0,
      falif: "ا",
      sentence: "انار",
      sound: a,
    },
    {
      alif: im1,
      img: ima1,
      falif: "ب",
      sentence: "بلی",
      sound: b,
    },
    {
      alif: im2,
      img: ima2,
      falif: "پ",
      sentence: "پتنگ",
      sound: c,
    },
    {
      alif: im3,
      img: ima3,
      falif: "ت",
      sentence: "تتلی",
      sound: d,
    },
    {
      alif: im4,
      img: ima4,
      falif: "ٹ ",
      sentence: "ٹماٹر",
      sound: e,
    },
    {
      alif: im5,
      img: ima5,
      falif: "ث",
      sentence: "ثمر",
      sound: f,
    },
    {
      alif: im6,
      img: ima6,
      falif: "ج",
      sentence: "جہاذ",
      sound: g,
    },
    {
      alif: im7,
      img: ima7,
      falif: "چ",
      sentence: "چوہا",
      sound: h,
    },
    {
      alif: im8,
      img: ima8,
      falif: "ح",
      sentence: "حجام",
      sound: i,
    },
    {
      alif: im9,
      img: ima9,
      falif: "خ",
      sentence: "خرگوش",
      sound: j,
    },
    {
      alif: im10,
      img: ima10,
      falif: "د",
      sentence: "درزی",
      sound: k,
    },
    {
      alif: im11,
      img: ima11,
      falif: "ڈ",
      sentence: "ڈھول",
      sound: l,
    },
    {
      alif: im12,
      img: ima12,
      falif: "ذ",
      sentence: "ذخیرہ",
      sound: m,
    },
    {
      alif: im13,
      img: ima13,
      falif: "ر",
      sentence: "ریل گاڑی",
      sound: n,
    },
    {
      alif: im14,
      img: ima14,
      falif: "ڑ",
      sentence: "پہاڑ",
      sound: o,
    },
    {
      alif: im15,
      img: ima15,
      falif: "ز",
      sentence: "زمین",
      sound: p,
    },
    {
      alif: im16,
      img: ima16,
      falif: "ژ",
      sentence: "ژالہ باری",
      sound: q,
    },
    {
      alif: im17,
      img: ima17,
      falif: "س",
      sentence: "سانپ",
      sound: r,
    },
    {
      alif: im18,
      img: ima18,
      falif: "ش",
      sentence: "شیر",
      sound: s,
    },
    {
      alif: im19,
      img: ima19,
      falif: "ص",
      sentence: "صندوق",
      sound: ta,
    },
    {
      alif: im20,
      img: ima20,
      falif: "ض",
      sentence: "ضعیف",
      sound: u,
    },
    {
      alif: im21,
      img: ima21,
      falif: "ط",
      sentence: "طوطا",
      sound: v,
    },
    {
      alif: im22,
      img: ima22,
      falif: "ظ",
      sentence: "ظروف",
      sound: w,
    },
    {
      alif: im23,
      img: ima23,
      falif: "ع",
      sentence: "عینک",
      sound: x,
    },
    {
      alif: im24,
      img: ima24,
      falif: "غ",
      sentence: " غبارہ",
      sound: y,
    },
    {
      alif: im25,
      img: ima25,
      falif: "ف",
      sentence: "فوارہ",
      sound: z,
    },
    {
      alif: im26,
      img: ima26,
      falif: "ق",
      sentence: "قالین",
      sound: a1,
    },
    {
      alif: im27,
      img: ima27,
      falif: "ک",
      sentence: "کتاب",
      sound: a2,
    },
    {
      alif: im28,
      img: ima28,
      falif: "گ",
      sentence: "گڑیا",
      sound: a3,
    },
    {
      alif: im29,
      img: ima29,
      falif: "ل",
      sentence: " لیموں",
      sound: a4,
    },
    {
      alif: im30,
      img: ima30,
      falif: "م",
      sentence: "مور",
      sound: a5,
    },
    {
      alif: im31,
      img: ima31,
      falif: "ن",
      sentence: "ناریل",
      sound: a6,
    },
    {
      alif: im32,
      img: ima32,
      falif: "و",
      sentence: "ورق",
      sound: a7,
    },
    // {
    //   alif: im33,
    //   img: ima33,
    //   falif: "ہ",
    //   sentence: " ہاتھی",
    //   sound: a8,
    // },
    {
      alif: im34,
      img: ima34,
      falif: "ء",
      sentence: "آئینہ",
      sound: a9,
    },
    {
      alif: im35,
      img: ima35,
      falif: "ی",
      sentence: "یاقوت",
      sound: a10,
    },
    {
      alif: im36,
      img: ima36,
      falif: "ے",
      sentence: "طوطے",
      sound: a11,
    },
  ];
  const [correctanswer, setCorrectanswer] = useState(0);
  const [state, setState] = useState(0);
  const [result, setResult] = useState();
  const [answer, setanswer] = useState();
  const [ratingstate, setRatingstate] = useState();
  const [jsondata, setjsondata] = useState([]);
  const [color, setcolor] = useState("black");
  const now = 60;
  const [t, st] = useState(false);
  const increment = () => {
    setState(state + 1);
    setResult("");
    st(!t);
    console.log("nice");
  };
  const decrement = () => {
    setState(state - 1);
    setResult("");
  };
  const playAudio = (i) => {
    var audioEl = document.getElementsByClassName(`audio-element${i}`)[0];
    // var audioEl = document.getElementsByClassName("audio-element0")[0];
    audioEl.play();
  };

  // useEffect(() => {
  //   playAudio(state);
  // }, [state]);

  useEffect(() => {
    playAudio(state);
  }, [state]);
  useEffect(() => {
    if (state == 0) {
      var audioEl = document.getElementsByClassName("audio-element0")[0];

      audioEl.play();
    }
  }, [state]);
  console.log("aja", jsondata);
  console.log("s", color);

  // function myFunction1() {
  //   playAudio(0);
  // }

  if (state < 36 && state >= 0) {
    return (
      <>
        {
          <>
            <div className="button-div">
              {/* {data.map((a) => {
                return (
                  <>
                    <img src={a.img} />
                  </>
                );
              })} */}
              <div className="container ">
                {/* <button onClick={playAudio}>
                  <span>Play Audio</span>
                </button> */}
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-12 text-center d-flex flex-row-reverse justify-content-between align-items-center ">
                    {
                      <img
                        src={data[state].img}
                        className="col-4 col-sm-3"
                        style={{
                          // width: "200px",
                          height: "200px",
                          // backgroundColor: "white",
                          // borderRadius: "50%",
                          // padding: "40px",
                          // border: "10px solid black",
                        }}
                      />
                    }
                    <p
                      className="col-6 p-sm-x-0 col-sm-3 sen"
                      style={
                        {
                          // width: "200px",
                          // fontSize: "100px",
                          // borderRadius: "50%",
                          // border: "10px solid yellow",
                          // backgroundColor: "white",
                          // padding: "30px",
                          // color: "red",
                        }
                      }
                    >
                      {data[state].sentence}
                    </p>
                    <p
                      className="col-1 col-sm-3 char"
                      style={
                        {
                          // width: "200px",
                          // fontSize: "100px",
                          // borderRadius: "100%",
                          // border: "10px solid red",
                          // backgroundColor: "white",
                          // padding: "30px",
                          // color: "blue",
                        }
                      }
                    >
                      {data[state].falif}
                    </p>
                  </div>
                  {/* <div className="col-6 text-center">
                    
                    {<img src={data[state].alif} style={{ width: "100px" }} />}
                  </div> */}
                  <div className="col-12 d-flex justify-content-evenly align-items-center">
                    <button
                      className="push_button red"
                      style={{
                        width: "100px",
                        backgroundColor: "blue",
                        color: "white",
                        margin: 0,
                        fontSize: "2em",
                        fontWeight: "bold",
                      }}
                      disabled={state < 1 ? true : false}
                      onClick={decrement}
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
                      </svg>
                    </button>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="black"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setcolor("black")}
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="green"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setcolor("green")}
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="red"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setcolor("red")}
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="blue"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setcolor("blue")}
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="pink"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setcolor("pink")}
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="yellow"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setcolor("yellow")}
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="black"
                        class="bi bi-eraser-fill"
                        viewBox="0 0 16 16"
                        onClick={() => setcolor("white")}
                      >
                        <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" />
                      </svg>
                    </div>

                    <button
                      className="push_button red"
                      style={{
                        width: "100px",
                        backgroundColor: "blue",
                        color: "white",
                        margin: 4,
                        fontSize: "2em",
                        fontWeight: "bold",
                      }}
                      disabled={state > 34 ? true : false}
                      onClick={increment}
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
                      </svg>
                    </button>
                    {/* <button onclick={() => myFunction1(state)}>relaod</button> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        }
        <Paints t={t} color={color} alif={data[state].alif} />
        <div>
          <audio className="audio-element0">
            {state == 0 && <source src={data[0]?.sound}></source>}
          </audio>
          <audio className="audio-element1">
            {state == 1 && <source src={data[1].sound}></source>}
          </audio>
          <audio className="audio-element2">
            {state == 2 && <source src={data[2].sound}></source>}
          </audio>
          <audio className="audio-element3">
            {state == 3 && <source src={data[3].sound}></source>}
          </audio>
          <audio className="audio-element4">
            {state == 4 && <source src={data[4].sound}></source>}
          </audio>
          <audio className="audio-element5">
            {state == 5 && <source src={data[5].sound}></source>}
          </audio>
          <audio className="audio-element6">
            {state == 6 && <source src={data[6].sound}></source>}
          </audio>
          <audio className="audio-element7">
            {state == 7 && <source src={data[7].sound}></source>}
          </audio>
          <audio className="audio-element8">
            {state == 8 && <source src={data[8].sound}></source>}
          </audio>
          <audio className="audio-element9">
            {state == 9 && <source src={data[9].sound}></source>}
          </audio>
          <audio className="audio-element10">
            {state == 10 && <source src={data[10].sound}></source>}
          </audio>
          <audio className="audio-element11">
            {state == 11 && <source src={data[11].sound}></source>}
          </audio>
          <audio className="audio-element12">
            {state == 12 && <source src={data[12].sound}></source>}
          </audio>
          <audio className="audio-element13">
            {state == 13 && <source src={data[13].sound}></source>}
          </audio>
          <audio className="audio-element14">
            {state == 14 && <source src={data[14].sound}></source>}
          </audio>
          <audio className="audio-element15">
            {state == 15 && <source src={data[15].sound}></source>}
          </audio>
          <audio className="audio-element16">
            {state == 16 && <source src={data[16].sound}></source>}
          </audio>
          <audio className="audio-element17">
            {state == 17 && <source src={data[17].sound}></source>}
          </audio>
          <audio className="audio-element18">
            {state == 18 && <source src={data[18].sound}></source>}
          </audio>
          <audio className="audio-element19">
            {state == 19 && <source src={data[19].sound}></source>}
          </audio>
          <audio className="audio-element20">
            {state == 20 && <source src={data[20].sound}></source>}
          </audio>
          <audio className="audio-element21">
            {state == 21 && <source src={data[21].sound}></source>}
          </audio>
          <audio className="audio-element22">
            {state == 22 && <source src={data[22].sound}></source>}
          </audio>
          <audio className="audio-element23">
            {state == 23 && <source src={data[23].sound}></source>}
          </audio>
          <audio className="audio-element24">
            {state == 24 && <source src={data[24].sound}></source>}
          </audio>
          <audio className="audio-element25">
            {state == 25 && <source src={data[25].sound}></source>}
          </audio>
          <audio className="audio-element26">
            {state == 26 && <source src={data[26].sound}></source>}
          </audio>
          <audio className="audio-element27">
            {state == 27 && <source src={data[27].sound}></source>}
          </audio>
          <audio className="audio-element28">
            {state == 28 && <source src={data[28].sound}></source>}
          </audio>
          <audio className="audio-element29">
            {state == 29 && <source src={data[29].sound}></source>}
          </audio>
          <audio className="audio-element30">
            {state == 30 && <source src={data[30].sound}></source>}
          </audio>
          <audio className="audio-element31">
            {state == 31 && <source src={data[31].sound}></source>}
          </audio>
          <audio className="audio-element32">
            {state == 32 && <source src={data[32].sound}></source>}
          </audio>
          <audio className="audio-element33">
            {state == 33 && <source src={data[33].sound}></source>}
          </audio>
          <audio className="audio-element34">
            {state == 34 && <source src={data[34].sound}></source>}
          </audio>
          <audio className="audio-element35">
            {state == 35 && <source src={data[35].sound}></source>}
          </audio>
          <audio className="audio-element36">
            {state == 36 && <source src={data[36]?.sound}></source>}
          </audio>
        </div>
      </>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "20em", color: "white" }}>keep practice</h1>
        <p style={{ fontSize: "2em", color: "white" }}>
          please reload page to start again
        </p>
      </div>
    );
  }
};

export default Mcqs;
