import './Footer.css'

function RenderFooter() {
  return (
    <div className="Footer">
      <div className="Contact">
        <a href="mailto:trevor.yao@uwaterloo.ca">Email</a>
      </div>
      <div className="Contact">
        <a href="https://github.com/trevoryao" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="Contact">
        <a href="https://www.linkedin.com/in/trevoryao/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="Copyright">
        &#169; Trevor J. Yao, 2021.
      </div>
    </div>
  )
}

export default RenderFooter;
