import pdf from './other/trevor-j-yao-resume.pdf'

function RenderContact() {
  return (
    <div>
      <h2 id="contact">Get in Touch</h2>
      <p>
        I love it when people get in touch! I can always be reached
        via <a href="mailto:trevoryao@gmail.ca">email</a>.
        All of my projects (and more) can be found on
        my <a href="https://github.com/trevoryao" target="_blank" rel="noreferrer">GitHub</a>,
        and feel free to reach out
        on <a href="https://www.linkedin.com/in/trevoryao/" target="_blank" rel="noreferrer">LinkedIn</a> as
        well. Also, feel free to download my <a href={pdf} download="trevor-j-yao-resume.pdf">resume</a>.
      </p>
    </div>
  )
}

export default RenderContact;
