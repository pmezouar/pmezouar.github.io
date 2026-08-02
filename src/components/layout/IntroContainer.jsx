import "./introContainer.css";

function IntroContainer(props) {
  return (
    <div className="intro-container">
      <div className="title-section">
        <span>{props.span}</span>
        <h2>{props.title}</h2>
      </div>
      <p>
        {props.p}
      </p>
    </div>
  );
}

export default IntroContainer;
