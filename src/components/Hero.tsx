function Hero() {
  return (
    <section className="hero">

      <div>

        <h1>
          Build Amazing Websites with React & TypeScript
        </h1>

        <p>
          Create responsive websites using modern React
          and TypeScript.
        </p>

        <button
          onClick={() =>
            alert("Welcome to TechWorld!")
          }
        >
          Learn More
        </button>

      </div>

    </section>
  );
}

export default Hero;
