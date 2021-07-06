import React from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import logo from "./../assets/backgrounds/logo.jpeg";
const Index = () => {
  const history = useHistory();
  return (
    <div className="homemain">
      <img className="logo" src={logo} />
      <div className="container">
        <div className="homecont">
          <button
            className="push_button red"
            style={{
              width: "300px",
              backgroundColor: "blue",
              color: "white",
              margin: "10px 0px",
              fontSize: "2em",
              fontWeight: "bold",
              fontFamily: "urdu",
              paddingBottom: "50px",
              paddingTop: "10px",
            }}
            onClick={() => history.push("/mcqs")}
          >
            پڑھیئے اور لکھیئے
          </button>
          <button
            className="push_button red"
            style={{
              width: "300px",
              backgroundColor: "blue",
              color: "white",
              margin: "10px 0px",
              fontSize: "2em",
              fontWeight: "bold",
              fontFamily: "urdu",
              paddingBottom: "50px",
              paddingTop: "10px",
            }}
            onClick={() => history.push("/level2")}
          >
            تصویر کے مطابق پہلا حرف منتخب کیجیئے
          </button>
          <button
            className="push_button red"
            style={{
              width: "300px",
              backgroundColor: "blue",
              color: "white",
              margin: "10px 0px",
              fontSize: "2em",
              fontWeight: "bold",
              fontFamily: "urdu",
              paddingBottom: "50px",
              paddingTop: "10px",
            }}
            onClick={() => history.push("/level3")}
          >
            حروف کو ترتیب دیجیئے
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
