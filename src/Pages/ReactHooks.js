import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

const ReactHooks = () => {

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
            {/* <div class="container"> */}
              <div class="row">
                <div class="col-md-12">
                <Box sx={{bgcolor: 'background.default',color: 'text.primary'}}>
                  <div
                    // class="main-title text-center wow fadeIn"
                    style={{ marginTop: "30px" }}
                  >
                    <h3 style={{textAlignLast: 'center'}}>React Hooks</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    {/* <p style={{textAlignLast: 'center'}}>
                    </p> */}
                  </div>
                  </Box>
                </div>
              </div>
            {/* </div> */}
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
                        src="assets/img/blog-details/hooks1.png"
                        alt="React hooks were introduced in version 16.8"
                        class="blog-img"
                      />
                      <div className="blog-head">
                        <h3>
                          <strong>What is hooks in React JS?</strong>
                        </h3>
                      </div>
                      {/* <div className="blog-middle">
                        <i class="fa fa-user blog-icon" aria-hidden="true"></i>
                        <h2>Admin</h2>
                        <i
                          class="fa fa-calendar blog-icon"
                          aria-hidden="true"
                        ></i>
                        <h2>22 August 2021</h2>
                      </div> */}
                      <div className="blog-bottom">
                        <p>
                        React Hooks are completely opt-in which means that 
                        rewriting existing code is unecessary, they do not 
                        contain any breaking changes, and they’re available 
                        for use with the release of React 16.8. Some curious 
                        developers have been making use of the Hooks API even 
                        before it was released officially, but back then it 
                        was not stable and was only an experimental feature. 
                        Now it is stable and recommended for React developers to use.
                        </p>
                        <hr />
                        <h4>When were hooks introduce?</h4>
                        <p>
                        First released in October of 2018, the React hook APIs 
                        provide an alternative to writing class-based components,
                         and offer an alternative approach to state management 
                         and lifecycle methods. Hooks bring to functional components 
                         the things we once were only able to do with classes, 
                         like being able to work with React local state, effects and 
                         context through useState, useEffect and useContext.
                        </p>
                        <p>
                        React Hooks are in-built functions that allow React developers 
                        to use state and lifecycle methods inside functional components, 
                        they also work together with existing code, so they can easily be 
                        adopted into a codebase. The way Hooks were pitched to the public 
                        was that they allow developers to use state in functional components 
                        but under the hood, Hooks are much more powerful than that. 
                        They allow React Developers to enjoy the following benefits:
                        </p>
                        <ul>
                                <li>Improved code reuse;</li>
                                <li>Better code composition;</li>
                                <li>Better defaults;</li>
                                <li>Sharing non-visual logic with the use of custom hooks;</li>
                                <li>Flexibility in moving up and down the components tree.</li>
                         </ul>
                        <p>
                          Like other features in react hooks does not work
                          inside the classes it needs to be separated from the
                          classes and used in the code. The hooks function must
                          be utilized at the top of the react functions as it
                          makes a clear vision of the program we want to execute
                          in the project. You can use hooks without classes in
                          the react programming and you can create your own hook
                          to reuse the state full behaviour of different
                          components in reactive programming.
                        </p>
                        <p>
                          If we want to try any code related to hooks, we need
                          to write it in the functional component itself. If we
                          write out of the functional component it will show us
                          an error (invalid hooks call on the web page) so to
                          avoid that error make sure that you write the hooks in
                          the functional component.
                        </p>
                        <img
                          src="assets/img/blog-details/hooks2.png"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                        <hr />
                        <br />
                        <h4>What are the requirements to use react hooks?</h4>
                        <p>
                        React Hooks are a new addition in React 16.8 that let 
                        you use state and other React features without writing 
                        a class component. In other words, Hooks are functions 
                        that let you “hook into” React state and lifecycle features 
                        from function components. (They do not work inside class components.)
                        </p>
                        <p>
                        React provides a few built-in Hooks like useState. You can also create your 
                        own Hooks to reuse stateful behavior between different components. 
                        The example below shows a counter whose state is managed using the 
                        useState() hook. Each time you click on the button, we make use of 
                        setCount() to update the value of count by 1.
                        </p>
                        <p>
                          When you add useState you will see that an extension
                          will be added at the top of react. Let’s see react
                          hooks example:
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import React, { useState } from “react”;"}
                        </SyntaxHighlighter>
                       Syntax:-
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {
                            "const [count, setCount] = useState(0);\nconst ButtonClick = () => {\nsetCount(count + 1);\n};"
                          }
                        </SyntaxHighlighter>
                        <p>Now in the HTML code, you have to write:</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {
                            "<h1>{count}</h1>\n<button onClick= {ButtonClick}> Click Me </button>"
                          }
                        </SyntaxHighlighter>
                        <p>
                          So this is all about what are hooks in React JS? and
                          react hooks example. If you have any questions you can
                          ask in the comment Info At One always try our best to
                          help you with it…
                        </p>
                        <hr />
                        {/* Go to www.addthis.com/dashboard to customize your tools */}
                        <div class="addthis_inline_share_toolbox"></div>
                      </div>
                    </div>
                    <div className="pagination">
                      <ul>
                        <li>
                        <a href="/Blog_home">Go Back</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
      </div>
    </React.StrictMode>
  );
};

export default ReactHooks;
