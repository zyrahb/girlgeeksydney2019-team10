import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/iconmonstr-instagram-9.svg'
import twitter from '../img/social/iconmonstr-twitter-4.svg'
import linkedin from '../img/social/iconmonstr-linkedin-4.svg'
import github from '../img/social/iconmonstr-github-1.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        about
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/depot">
                        depot
                      </Link>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    {/* <li>
                      <Link className="navbar-item" to="/blog">
                        blog
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/contact">
                        contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/zyrahber">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/zyrahjane/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                {/* <a title="github" href="https://github.com/zyrahb">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/zyrah-bernardino-78617353/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a> */}
              </div>
            </div>
          </div>
          <div className="copyright">
            Copyright © 2019 Shehacks2019-team10, All Rights Reserved.
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
