// My Experience

function RenderExperience() {
  return (
    <div>
      <h2 id="experience">My Experience</h2>
      <div>
        <p>
          Currently, I am a Software Engineer at Autonomic on the Development &amp; Deployment team.
        </p>
        <p>
          Previously, I was a Data Engineer at Sun Life on the Data &amp; Analytics team.
          Our projects were mostly related to acquiring and processing large datasets, working with data
          scientists to process data as securely and efficiently as possible for them, and creating
          machine learning modules. One of the projects that I worked on involved sourcing and processing
          over 3 TB of audio data per month for a speech-based detection model. 
        </p>
        <p>
          The engineering team was quite small, so we were responsible for supporting our own development in terms 
          of DevOps. We also handled our own unit-testing and load-testing. Rather than hosting all of our services, we used a collection of microservices to host
          various services, and store data in on-site servers.  Some of the microservices &amp; their uses are:
        </p>
        <ul>
          <li>AWS GLUE: audio and metadata integration prior to transcription,</li>
          <li>Apache Kafka: single source of truth for pre and post processed audio,</li>
          <li>Kubernetes: hosting application services,</li>
          <li>Splunk: automated service logging and management,</li>
          <li>Apache Spark: speech-based detection model.</li>
        </ul>
      </div>
    </div>
  )
}

export default RenderExperience;
