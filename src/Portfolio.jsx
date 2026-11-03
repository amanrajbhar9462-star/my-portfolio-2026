import "./Portfolio.css";
function Portfolio() {
  return (
    <div className="parent">
      <div className="name-div">
        <div>
          <img src={gif1} />
          <p className="paragraph">I am Web Developer</p>
        </div>
      </div>

      <p className="tool">MY Tools</p>
      <img src={image6} className="img6" />

      <div>
        <ol className="language-logo">
          <li>
            <img src={image3} />
          </li>
          <li>
            <img src={image5} />
          </li>
          <li>
            <img src={image} />
          </li>

          <li>
            <img src={image2} />
          </li>
        </ol>
      </div>

      <div className="parent-div">
        <div className="div1">
          <h4 className="words">
            Web
            <br />
            Developer
          </h4>
          <img src={image4} className="boy-image" />
        </div>

        <div className="div2">
          <h4 className="word2">
            Responsive <br />
            Design
          </h4>
          <img src={image7} className="rs-design" />
        </div>

        <div className="div3">
          <h4 className="word3">Open Source</h4>
          <img src={image8} className="space" />
        </div>

        <div className="div4"></div>
      </div>
    </div>
  );
}

export default Portfolio;
