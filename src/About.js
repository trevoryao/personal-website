import personalPhoto from './img/personal-photo.jpg';

function RenderAbout() {
  return (
    <div>
      <h2 id="about">About Me</h2>
        <p>
          Hey, I'm Trevor &mdash; a software engineer working at Instacart on the ML Foundations Team,
          which is the main MLOps team here at Instacart. I recently graduated from the
          University of Waterloo in December 2023. During my undergrad, I interned at Autonomic working on connecting
          IoT-enabled Ford vehicles to the Transport Mobility Cloud (TMC), scaling up MQTT Brokers and
          highly concurrent Kafka Microservices, serving over 9 million vehicles worldwide.
          As well, I am vastly experienced in DevOps and Data
          Engineering, and even an occasional full stack developer. I'm language/framework agnostic,
          and love diving into new challenges. Interested in distributed systems, and efficient
          concurrent processes. I also enjoy writing low-level OS code
          (see my experience writing QMK software and my Train Microkernel).
        </p>
        <img src={personalPhoto} alt="Trevor J. Yao" />
        <p>
          Outside of work &amp; school, some of my passions include football &mdash; I'm a childhood Manchester United
          fan, and I build custom mechanical keyboards in my spare time (Feel free to ask me more
          about these!). These hobbies also inspire some of my more casual <a href="#projects">projects</a>.
          I'm also an ex-musician and pilot, and a "pretty damn good" homecook.
          I also enjoy exploring the nature of southwestern Ontario, where I live.
        </p>
    </div>
  )
}

export default RenderAbout;
