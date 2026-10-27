function Features() {

  const features = [

    {
      title: "Fast",
      text: "Optimized for performance."
    },

    {
      title: "Secure",
      text: "Built using modern standards."
    },

    {
      title: "Responsive",
      text: "Looks perfect on every screen."
    }

  ];

  return (

    <section className="features">

      {features.map((feature) => (

        <div className="card" key={feature.title}>

          <h3>{feature.title}</h3>

          <p>{feature.text}</p>

        </div>

      ))}

    </section>

  );
}

export default Features;
