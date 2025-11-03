import React from "react";

const About = () => {
  return (
    <>
      <section className=" my-5">
        <header className=" font-bold text-xl">About</header>
        <p className="text-sm leading-relaxed text-muted-foreground ">
          I began as a{" "}
          <span className="font-semibold text-foreground">NEET aspirant</span>{" "}
          chasing medicine, but my{" "}
          <span className="text-primary font-medium">
            father’s push toward tech
          </span>{" "}
          changed everything. His belief helped me discover my real passion —{" "}
          <span className="italic text-foreground/90">
            building, creating, and solving
          </span>{" "}
          through code. Now, I craft{" "}
          <span className="font-semibold text-primary/90">full-stack apps</span>
          , <span className="font-semibold text-primary/90">AI tools</span>, and{" "}
          <span className="font-semibold text-primary/90">
            3D web experiences
          </span>
          , blending <span className="text-foreground/80">creativity</span> with{" "}
          <span className="text-foreground/80">technology</span> to bring ideas
          to life ✧
        </p>
      </section>
    </>
  );
};

export default About;
