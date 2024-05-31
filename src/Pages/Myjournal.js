// import {
//     Document,
//     Page,
//     Text,
//     View,
//     StyleSheet,
//     PDFViewer,
//   } from "@react-pdf/renderer";
//   // Create styles
//   const styles = StyleSheet.create({
//     page: {
//     //   backgroundColor: "#d11fb6",
//     // background: "url(../img/ZJFD6.gif)",
//       color: "white",
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//     },
//     viewer: {
//       width: window.innerWidth, //the pdf viewer will take up all of the width and height
//       height: window.innerHeight,
//     },
//   });
  
//   // Create Document Component
//   function BasicDocument() {
//     return (
//       <PDFViewer style={styles.viewer}>
//         {/* Start of the document*/}
//         <Document file={"assets/cv/pranesh resume.pdf"}>
//           {/*render a single page*/}
//           <Page size="A4" style={styles.page} >
//             <View style={styles.section}>
//             <iframe src="assets/cv/pranesh resume.pdf" width="100%" height="500px"></iframe>
//               {/* <Text>Hello</Text> */}
//             </View>
//             <View style={styles.section}>
//               {/* <Text>World</Text> */}
//             </View>
//           </Page>
//         </Document>
//       </PDFViewer>
//     );
//   }
//   export default BasicDocument;































import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import pdf from "../Pages/pdf.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =  "assets/cv/pranesh resume.pdf";
  // "http://localhost:3000/static/media/pranesh%20resume%20Office.9537dfb5c3676852946a.pdf";
function Myjournal() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div className="container">
                {/* <div className="row"> */}
                  <div className="col-md-12" style={{marginBottom:"30px", marginTop:"-20px"}}>
                    <div className="main-title text-center wow fadeIn" style={{ marginTop : "20px"}}>
                      <h3>IOT Based Track Crack Detection And Intimation System</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Collage Project
                      </p>
                    </div>
                  </div>
                </div>
                {/* </div> */}
        {/* <iframe src="assets/cv/pranesh resume.pdf" width="100%" height="1300px"></iframe> */}
        <iframe src="assets/cv/pdf.pdf" width="100%" height="500px">
    </iframe>
    <br />
    <br />
    <br />
    <object data="assets/cv/ppt.pdf" width="100%" height="500px"></object>
    <hr />
    <br />
    <div className="col-md-12" style={{marginBottom:"30px", marginTop:"-20px"}}>
    <div className="main-title text-center wow fadeIn" style={{ marginTop : "20px"}}>
    <h3>Publication Certificate</h3>
    <div className="underline1"></div>
    <div className="underline2"></div>
    </div></div>
    <img
                        src="assets/cv/CERTIFICATE.jpg"
                        alt="React hooks were introduced in version 16.8"
                        class="blog-img"
                      />
                      <div className="pagination">
                            <ul>
                              <li>
                                <a href="/#home">Go Home</a>
                              </li>
                            </ul>
                            <br />
    <br />
    <br />
                          </div>
        {/* <Row style={{ justifyContent: "center", position: "relative", display: "grid" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        {/* <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
          {[1,2,3,10,11,12].map(page => (
            <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
            ))}
          </Document>
        </Row> */}

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </div>
  );
}

export default Myjournal;
