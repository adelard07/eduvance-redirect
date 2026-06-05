import "./App.css";

export default function App() {
  return (
    <main className="ev-page">
      <div className="ev-rule" aria-hidden="true" />

      <section className="ev-card">
        <h1 className="ev-headline">
          From an ed-tech platform to
          <span className="ev-subhead">AI-powered solutions</span>
        </h1>

        <p className="ev-sub">
          We started by teaching. Today we train corporate teams to use generative
          AI and build production-ready proofs of concept that turn those ideas
          into working software.
        </p>

        <a className="ev-cta" href="https://eduvance.ai">
          <span>Visit eduvance.ai</span>
          <svg
            className="ev-cta-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </section>

      <section className="ev-offerings">
        <div className="ev-offering">
          <h2 className="ev-offering-title">Corporate AI Training</h2>
          <p className="ev-offering-text">
            Hands-on GenAI programs for engineering teams and CXO leadership,
            tailored to how your organization actually works.
          </p>
        </div>

        <div className="ev-offering">
          <h2 className="ev-offering-title">Proof-of-Concept Builds</h2>
          <p className="ev-offering-text">
            Rapid, production-grade POCs that validate an AI idea against real
            data before you commit to a full rollout.
          </p>
        </div>

        <div className="ev-offering">
          <h2 className="ev-offering-title">From Pilot to Production</h2>
          <p className="ev-offering-text">
            We carry the best POCs forward into deployed systems, with the
            full-stack and infrastructure work that scaling demands.
          </p>
        </div>
      </section>

      <p className="ev-footnote">
        Our home has moved. Continue to{" "}
        <a className="ev-button" href="https://eduvance.ai">eduvance.ai</a>{" "}
        for the latest.
      </p>
    </main>
  );
}