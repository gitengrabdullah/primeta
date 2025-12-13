import "./section.css";

export default function StepsSection() {
  return (
    <section className="steps-section">
      <div className="steps-container">
        <div className="step-box">
          <span className="step-number">01</span>
          <h3>Register</h3>
          <p>
            Create your account in minutes and get instant access to the platform.
          </p>
        </div>

        <div className="step-box">
          <span className="step-number">02</span>
          <h3>Get Access to Knowledge</h3>
          <p>
            Learn proven trading strategies, market structure, and risk control.
          </p>
        </div>

        <div className="step-box">
          <span className="step-number">03</span>
          <h3>Become a Highly Skilled Trader</h3>
          <p>
            Apply what you learn, trade with confidence, and scale consistently.
          </p>
        </div>
      </div>
    </section>
  );
}
