import React from "react";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

const UiUx = () => {

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <React.StrictMode>
      <div id="blog">
    <ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>  
  <Box sx={{bgcolor: 'background.default',color: 'text.primary' }}>
        <div className="blog-content">
        {/* <MyApp /> */}
          <div className="blog-grid">
            <div class="container"  style = {{bgcolor: 'background.default', color: 'text.primary'}}>
              <div class="row">
                <div class="col-md-12">
                  <Box sx={{bgcolor: 'background.default',color: 'text.primary'}}>
                  <div
                    // class="main-title text-center wow fadeIn"
                    style={{ marginTop: "30px"}}
                  >
                    <h3  style={{textAlignLast: 'center'}}>UI/UX</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    {/* <p style={{textAlignLast: 'center'}}>
                      ReactJS/NodeJS and Web Components everything else
                      accomplished on my spare software development time.
                    </p> */}
                  </div>
                  </Box>
                </div>
              </div>
            </div>
            <Box>
            <div className="blog-details wow fadeIn text-left">
              {/* <div className="container"> */}
                <div
                  className="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-xl-9 col-lg-9 col-md-12 col-xs-12 col-sm-12">
                    <div className="blog-main">
                      <img
                        src="assets/img/blog-details/ui-ux1.jpg"
                        alt="The importance of UI/UX"
                        class="blog-img"
                      />
                      <div className="blog-head">
                        <h3>
                          <strong>
                            The importance of UI/UX | Software Engineering
                          </strong>
                        </h3>
                      </div>
                      {/* <div className="blog-middle">
                        <i class="fa fa-user blog-icon" aria-hidden="true"></i>
                        <h2>Admin</h2>
                        <i
                          class="fa fa-calendar blog-icon"
                          aria-hidden="true"
                        ></i>
                        <h2>28 August 2021</h2>
                      </div> */}
                      <div className="blog-bottom">
                        <p>
                          The user interface is the front-end application view
                          to which the user interacts in order to use the
                          software. The software becomes more popular if its
                          user interface is:
                        </p>
                        <ul>
                          <li>Introduction to UI/UX Design</li>
                          <li>What is UI/UX Design?</li>
                          <li>What is the difference between UI and UX?</li>
                          <li>Importance of a good UI / UX design</li>
                          <li>Scope for a UI / UX Designer in India</li>
                        </ul>
                        <br />
                        <p>There are two types of User Interface:</p>
                        <h4>Introduction to UI/UX Design:</h4>
                        <p>
                        The term UI/UX stands for user interface/user experience 
                        design and refers to the practice of designing digital products 
                        with a user-first approach.In other words, the point of 
                        UI/UX design is to create a product that will be both visually 
                        appealing and highly pleasant to interact with. A common 
                        misconception is that UI and UX come down to the same thing 
                        and that they are just one discipline, but that is not entirely 
                        true. They are separate disciplines that focus on different 
                        aspects of the user’s journey with a digital product. However, 
                        they overlap in many ways and are so closely connected that they’ve 
                        largely merged into one profession. Let’s take a look at the main 
                        differences between UX and UI before moving on to discuss what the 
                        UI/UX design process involves and why it matters to you.                    
                        </p>
                        {/* <p>
                          Graphical User Interface: Graphical User Interface
                          provides a simple interactive interface to interact
                          with the system. GUI can be a combination of both
                          hardware and software. Using GUI, the user interprets
                          the software. User Interface Design Process:
                        </p> */}
                        <img
                          src="assets/img/blog-details/ui-ux-process2.jpg"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                         <hr />
                        <br />
                        <br />
                        <h4>What is UI/UX Design?</h4>
                        <p>
                        UX stands for user experience, while UI is short for User Interface. Both these aspects are intertwined to produce the desired results.
                          {/* <strong>1.</strong>  */}
                          UI/UX Design is the process of designing the interface, optimizing navigation, and showing relevant features of a product or service. It combines aspects of design with user experience to create interfaces that are easy to use, provide what the users need quickly, look great, are intuitive, and produce an overall positive experience for the user.
                          {/* <strong>2.</strong> */}
                           It also caters to user preferences, perceptivity and the emotional quotient. A good UX design increases usability, accessibility, functionality and enables a pleasurable user interaction with your website or app.
                          {/* <strong>3.</strong>  */}
                          Interface construction and
                          implementation: The implementation activity begins
                          with the creation of a prototype (model) that enables
                          usage scenarios to be evaluated. As the iterative
                          design process continues a User Interface toolkit that
                          allows the creation of windows, menus, device
                          interaction, error messages, commands, and many other
                          elements of an interactive environment can be used for
                          completing the construction of an interface.                        
                          {/* <strong>4.</strong>  */}
                          A UX design degree is considered to be one of the most lucrative streams in the digital marketing scenario.
                        </p>
                        <hr />
                        <h4>What is the difference between UI and UX?</h4>
                        <p>
                        Though both UX and UI are often used in the same context, it definitely means two different things. However, one cannot thrive without the other. So what is the difference between the two?
                        <img
                          src="assets/img/blog-details/ui-ux-process3.jpg"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                        </p>
                        <p>UX is the experience a user has with a product or service or 
                          during the journey of landing in a website to the end action 
                          taken by the user. It is a more holistic term, which includes 
                          how a person feels about a product and the actions that are 
                          triggered due to the experience. It is all about the emotions 
                          that are provoked when interacting with a digital product. 
                          UI is more design oriented and inclines towards the look and 
                          feel of the product. The aim is to create an intuitive platform 
                          with interactive elements like icons, buttons, typography, color 
                          scheme, imagery, etc…</p>
                         <hr />
                        <h4>Importance of a good UI / UX design</h4>
                        <p>A good UI / UX design helps you get better results in the long run.
                           It can help you generate more leads and improve conversion rates. 
                           This translates to better revenues for your company.With a great 
                           UI / UX design, you can easily fulfill the needs of your clients, 
                           increase the customer’s willingness to pay by almost 15% and increase 
                           brand loyalty by 16%.According to Forrester, a leading global 
                           market research company, a great User Interface of a website 
                           can increase the conversion rate by 200%, while a seamless UX 
                           can increase it by 300% - 400%. These numbers are staggering 
                           and can revolutionize the life cycle of your customer’s journey.</p>
                           <hr />
                        <h4>Scope of a UI / UX Designer in India</h4>
                        <p> With the emergence of design centric organizations and businesses, 
                          and an increased need for UI / UX support for websites, eCommerce 
                          sites and landing pages for products and services, a UI / UX career 
                          will have an escalated growth and innumerable opportunities in the 
                          coming decade.There will be high demand for innovation and creativity 
                          in this field and a UI / UX designer will be sought out by top hiring 
                          companies across the globe. A designer’s job skills also extends 
                          to creating stunning banners, email campaigns, video games and many 
                          client-based mobile applications. The list where you can apply UI / UX 
                          design skills and theories is endless! There are companies like Airbnb 
                          and Netflix that have some of the best User Experiences that help engage 
                          more audiences which in turn generate revenue in billions.  </p>
                        <h4>Interesting facts</h4>
                        <ul>
                          <li>
                          LinkedIn ranked UX Design as one of the top 5 in demand skills in their latest survey.
                          </li>
                          <li>
                          UI/UX is listed among the best 50 jobs to have in 2021/22 by Glassdoor
                          </li>
                          <li>
                          The demand for UI/UX professionals is likely to grow by 18% between 2021-2025
                          </li>
                          <li>
                          There are far fewer UI/UX designers than those who can meet the demands of the market all over the world.
                          </li>
                        </ul>
                        <hr />
                        <h4>Conclusion</h4>
                        <p>
                        When it comes to UI/UX design, it’s a pretty complex topic and 
                        there is a lot to unpack. We have gone through some of the main 
                        things that can give you a basic understanding of this discipline 
                        and its importance. If you have questions about UI/UX or are looking 
                        for UI/UX design services, please feel free to reach out to us! 
                        Digital agency GRM Digital has a team of web development & design 
                        experts and UI/UX team that can help you towards a website that 
                        reflects your brand and makes your users happy. 
                        </p>
                        <hr />                        
                        <br />
                        {/* Go to www.addthis.com/dashboard to customize your tools */}
                        <div class="addthis_inline_share_toolbox"></div>
                      </div>
                    </div>
                    <div className="pagination">
                      <ul>
                        <li>
                        <a href="/Blog_home">Go Back</a>
                        </li>
                        {/* <li>
                          <a href="/react-hooks">Next Post</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
                  </Box>
          </div>
        </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
      </div>
    </React.StrictMode>
  );
};

export default UiUx;
