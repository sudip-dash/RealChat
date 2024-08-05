import "./Interface.css";

const Interface = () => {
  return (
    <div className="Parentcontainer">
      <div
        className="container"
        style={{
          display: "flex",
          height: "100vh",
          maxwidth: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="left" style={{ width: "30%" }}>
          <div
            className="header"
            style={{ background: "#f1cfbe", display: "flex", height: "10%" }}
          >
            <img
              src="R.png"
              alt=""
              width="30"
              height="30"
              style={{
                margin: "20px 30px",
                alignself: "center",
                borderradius: "100%",
                background: "white",
                fontweight: 800,
              }}
            />
            <div
              className="brand"
              style={{
                display: "flex",
                flexdirection: "column",
                alignself: "center",
                margin: "auto",
              }}
            >
              <p
                style={{
                  alignself: "center",
                  fontsize: "22px",
                  fontweight: "600",
                  marginbottom: "5px",
                }}
              >
                RealChat
              </p>
              <div
                className="underline"
                style={{
                  alignself: "center",
                  background: "black",
                  width: "61px",
                  height: "3px",
                  borderradius: "9px",
                }}
              ></div>
            </div>
            <div
              className="task"
              style={{
                margin: "20px 30px",
                alignself: "center",
                borderradius: "100%",
                background: "white",
                fontweight: 800,
              }}
            >
              Task
            </div>
          </div>

          <div className="body" style={{ height: "90%" }}>
            hi from body
          </div>
        </div>
        <div
          className="right"
          style={{ width: "70%", backgroundcolor: "antiquewhite" }}
        >
          <h3>hi</h3>
        </div>
      </div>
    </div>
  );
};

export default Interface;
