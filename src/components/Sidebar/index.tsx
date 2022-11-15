import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC = () => {
  const navigateToContact = (event: any) => {
    event.preventDefault();
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    }); 
  }

  return (
    <div className='nav-bar'>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ira-andaral/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/iraand/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />          
          </a>
        </li>
        <li>
          <a
            href="/"
            role="button"
            onClick={navigateToContact}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
              className="anchor-icon"
            />           
          </a>
        </li>        
        </ul>
    </div>
  )
}

export default Sidebar

            