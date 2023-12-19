import emailIcon from './icons/email-icon.png'
import githubIcon from './icons/github-icon.png'
import linkedinIcon from './icons/linkedin-icon.png'

import './Footer.css'

function RenderFooter() {
  return (
    <div className="Footer">
      <div className="ViewingArea">
        <div className="Contact">
          <a href="mailto:trevor.yao@uwaterloo.ca">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
        <div className="Contact">
          <a href="https://github.com/trevoryao" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <div className="Contact">
          <a href="https://www.linkedin.com/in/trevoryao/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <div className="Copyright">
          &#169; 2024 Trevor J. Yao.
        </div>
      </div>
    </div>
  )
}

export default RenderFooter;
