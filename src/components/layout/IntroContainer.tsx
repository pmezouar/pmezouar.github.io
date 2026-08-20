import "./introContainer.css";

interface IntroProps {
  span: string;
  title: string;
  p: string;
}

function IntroContainer({ span, title, p }: IntroProps) {
  return (
    <div className="intro-container">
      <div className="title-section">
        <span>{span}</span>
        <h2>{title}</h2>
      </div>
      <p>
        {p}
      </p>
    </div>
  );
}

export default IntroContainer;
