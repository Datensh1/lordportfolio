export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Lord Jhon</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">IT</span>{" "}
            <br />
            Student
          </h1>
          <p className="hero--section-description">
          I have a passion for technology and enjoy learning about programming, web development, and network systems. 
          In my free time, I like to work on personal projects and stay updated on the latest tech trends. 
            <br /> I’m excited about the opportunities in the IT field and eager to apply my skills in real-world situations.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/home.png" alt="Hero Section" />
      </div>
    </section>
  );
}
