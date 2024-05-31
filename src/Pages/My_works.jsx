import React from "react";
import Box from '@mui/material/Box';

const VideoApp = () => {
		return (
			<React.StrictMode>
				<div className="container">
                <div className="row">
                  <div className="col-md-12" >
				  <div className="main-title text-center wow fadeIn" style={{ marginTop : "100px"}}>
                      <h3>Some Of My Works</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Videos
                      </p>
                    </div>
					<Box className="container1">
			<div className='main'>
			<div className="col-md-4 col-sm-5">
            <div className='1' style={{ marginTop: "20px" }}>
            <video width="100%" height="100%" controls>
            <source src="assets/videos/video1.mkv" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
            </video>
            </div>
			</div>
			<div className="col-md-4 col-sm-5">
            <div className='2'style={{ marginTop: "20px" }}>
            <video width="100%" height="100%" controls>
            <source src="assets/videos/video2.mkv" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
            </video>
            </div>
			</div>
			<div className="col-md-4 col-sm-5">
            <div className='3'style={{ marginTop: "20px" }}>
            <video width="100%" height="100%" controls>
            <source src="assets/videos/video3.mkv" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
            </video>
            </div>
			</div>
            </div>
			</Box>
			</div>
			</div>
			</div>
			<div className="pagination" style={{ marginTop: "40px" }}>
                            <ul>
                              <li>
                                <a href="/#home">Go Back</a>
                              </li>
                            </ul>
                          </div>
			<hr  style={{ marginBottom: "75px" }} />
            </React.StrictMode>
		);
}
export default VideoApp;
