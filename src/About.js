import personalPhoto from './img/personal-photo.jpg';

function RenderAbout() {
  return (
    <div>
      <h2 id="about">About Me</h2>
        <p>
          Hey, I'm Trevor &mdash; a software developer and student at the University of Waterloo.
          Previously, I worked at Sun Life Financial as a Data Engineer on the Data &amp; Analytics
          team, and I've also worked in the past as a DevOps Engineer. I'm primarily a software engineer, but I am
          flexible &mdash; I excel at all development roles.
          My current passions are low-powered embedded systems &amp; machine learning. I believe that
          combining these two fields will be the future of the computer science industry.
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
