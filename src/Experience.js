// My Experience

function RenderExperience() {
  return (
    <div>
      <h2 id="experience">My Experience</h2>
      <div>
        <p>
          Currently, I am working at the grocery delivery giant Instacart on the ML Foundations team, helping build
          the primary MLOps platform at Instacart &mdash; <a href="https://tech.instacart.com/introducing-griffin-2-0-instacarts-next-gen-ml-platform-b7331e73b8d7" target="_blank" rel="noreferrer">Griffin</a>.
        </p>
        <p>
          Previously, I worked at <a href="https://autonomic.com" target="_blank" rel="noreferrer">Autonomic</a>,
          until the company was absorbed into Ford. I worked on our Message Connectivity and Development &amp;
          Deployment teams, building things on both ends of the Transport Mobility Cloud (TMC), from connecting
          vehicles at the edge, to building the CI/CD platform for all our teams.
        </p>
        <p>
          On Message Connectivity, I was privileged to be working on keeping over 9 million vehicles connected
          to the cloud, enabling tech like the <a href="https://www.ford.ca/support/category/fordpass/" target="_blank" rel="noreferrer">Fordpass App</a>.
          I got to write highly concurrent Kafka microservices in Java and Kotlin, and helped improve our command
          delivery success to almost 100%. Looking back, this was my most challenging role to date, as I had to work
          with so many interconnected services while keeping the MQTT Broker happy. However, I was able to step up to
          the challenge, and by the end of my time I was "operating as a senior engineer", leading proposals for optimisation, and leading new work.
        </p>
        <p>
          Working on our in-house CI/CD team was rewarding because I truly became a "language agnostic" engineer, since
          we had such a wide-assortment of tools and architectures. I got the opportunity to rotate streams constantly,
          working on many of our build/deployment tools. I even did full-stack development for some of our webtools.
          I also had the opportunity of regularly supporting our development teams using our CI/CD systems, which taught
          me patience, and how to ask good questions. I was able to flex my technical muscle by creating an interpreter
          for our new CI/CD tool, enabling developers to define pipelines concisely, reducing the average pipeline declaration by over 750 lines.
        </p>
        <p>
          I've also worked as a Data Engineer at a major Canadian Finance company (Sun Life Financial).
          I worked on a small engineering team of 3, creating data pipelines for processing over
          3 TB of audio data per month. We used Kafka to stream between our processing/transformation microservices,
          and used tools like AWS Glue for audio/metadata integration. Our team also pioneered
          the use of Kubernetes with our projects. We also created a Spark speech detection model at the end of the pipeline.
        </p>
        <p>
          Working on such a small team was definitely a unique experience, since I had to very quickly become
          responsible for the parts and tasks that I was owning. It was an awesome experience to contribute
          in such a large quantity to a service with as high a throughput as it ultimately did. This role also
          allowed me to contribute to open-source repos, which was awesome since I got to be part of the dev community.
        </p>
      </div>
    </div>
  )
}

export default RenderExperience;
