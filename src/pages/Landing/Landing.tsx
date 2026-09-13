import "./Landing.css";

export default function Landing() {
  const meteors = Array.from({ length: 8 });

  return (
    <div className="landingContainer">
      <div className="meteor-shower">
        {meteors.map((_, index) => (
          <span key={index} className="meteor" />
        ))}
      </div>

      <main className="hero-content">
        <h1 className="hero-title">
          ENTER THE <span>ASTRAVERSE</span>
        </h1>
        <p className="hero-subtitle">
          A minimalist retro arcade built for lightspeed browsing.
          Pick your stellar vehicle, beat the high score, and avoid the cosmic debris.
        </p>
        <button className="btn-launch">
          PRESS START
        </button>
      </main>
    </div>
  );
}
