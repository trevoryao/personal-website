import personalPhoto from './img/personal-photo.jpg';

function RenderAbout() {
  return (
    <div>
      <h2 id="about">About Me</h2>
        <p>
          Hey, I'm Trevor &mdash; a software engineer and student at the University of Waterloo.
          Currently, I'm working at Autonomic as a Software Engineer on the Development &amp; Deployment Team: the DevOps team.
          I've worked previously as a DevOps Engineer and Data Engineer (separately) at Sun Life Financial, and also as a full stack developer.
          I'm language/framework agnostic, and love diving into new challenges.
          Currently interested in real-time and distributed systems, and I enjoy writing low-level OS code.
        </p>
        <img src={personalPhoto} alt="Trevor J. Yao" />
        <p>
          Outside of work &amp; school, some of my passions include football &mdash; I'm a childhood Manchester United
          fan, and I build custom mechanical keyboards in my spare time (Feel free to ask me more
          about these!). These hobbies also inspire some of my more casual <a href="#projects">projects</a>.
          I'm also an ex-musician and pilot, and I enjoy cooking &amp; exploring nature during my down time.
        </p>
    </div>
  )
}

export default RenderAbout;
