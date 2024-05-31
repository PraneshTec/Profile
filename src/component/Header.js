import React from "react";

function Header() {
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">          
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  {/* <div className="col-md-4 ">
                    <div className="about-image" style={{ paddingTop: "12px" }}>
                      <img
                        src="assets/img/logo.png"
                        alt="Pranesh"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div> */}
                  <div className="site-title">
                  {/* <a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;" />
</a> */}
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>Pranesh R B
                      </h3>                      
                    </a>
                    
                    
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-8 col-sm-8 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                         Home
                        </a>
                      </li>
                      <li>
                        <a href="/#about">About</a>
                      </li>
                      <li>
                        <a href="/#skill">Skill</a>
                      </li>
                      <li>
                        <a href="/#resume">Education</a>
                      </li>
                      <li>
                        <a href="/#service">Service</a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li>
                      <li>
                        <a href="/Blog_home">Blogs</a>
                      </li>
                      <li>
                        <a href="/Myjournal">Journal</a>
                      </li>
                      <li>
                        <a href="/My_works">My Works</a>
                      </li>
                      <li>
                        <a href="/mail">Connect Me</a>
                      </li>
                      {/* <li>
                        <a href="/Myworks">My Works</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
