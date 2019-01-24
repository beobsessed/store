import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import infoGraphic from '../../img/info_graphic.svg';

export default function LeftBlock() {
  return (
    <div className="col-lg-6 content-left">
				<div className="content-left-wrapper">
					<Link to={process.env.PUBLIC_URL + "/"} id="logo">
            <img src={logo} alt="" width="49" height="35" />
            <h1 className="title title-light">More Just Store</h1>
          </Link>
					<div id="social">
						<ul>
							<li><a href="https://github.com/morejust/store" target="blank"><i className="fab fa-github"></i></a></li>
						</ul>
					</div>
					<div>
						<figure><img src={infoGraphic} alt="" className="img-fluid" /></figure>
						<h2>Store Files Simple.<br/>Free. Forever</h2>
						<p>We use public GitHub repositories to store your files for free. You can create your own free unlimited cloud storage.</p>
            <p>
              <a className="white animated_link" href="https://medium.com/@okhlopkov/microsoft-will-pay-for-your-unlimited-cloud-storage-bc1a3a8a5727" target="black"><span role="img" aria-label="Read smile">📖</span> Article on Medium</a><br/>
              <a className="white animated_link" href="https://www.producthunt.com/posts/morejust-store" target="black"><span role="img" aria-label="Rocket smile">🚀</span> Product Hunt</a><br/>
              <a className="white animated_link" href="https://t.me/morejuststore" target="blank"><span role="img" aria-label="Robot smile">🤖</span> Telegram</a>
            </p>
						<a href="https://github.com/morejust/store/blob/master/README.md" target="blank" className="btn_1 rounded">Start Now!</a>
            <Link to={process.env.PUBLIC_URL + "docs"} style={{marginLeft: "10px"}} className="btn_1 rounded">Documentation</Link>
					</div>
					<div className="copy">© 2018 More Just Store v1.2.3</div>
				</div>
			</div>
  );
}
