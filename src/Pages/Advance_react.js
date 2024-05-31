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

const Advance_react = () => {

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
                    <h3 style={{textAlignLast: 'center'}}>Blog Details</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    <p style={{textAlignLast: 'center'}}>
                    Advanced React Concept
                    </p>
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
                        src="assets/img/blog-details/r.jpg"
                        alt="React hooks were introduced in version 16.8"
                        class="blog-img"
                      />
                      <div className="blog-head">
                      <h3>
                          <strong>Advanced React Concept</strong>
                        </h3>
                        <h3>
                          <strong>1. Axios</strong>
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
                        If you know about the Axios security problem and someone asks this is for you, 
                        if you don’t know find it here, spoiler alert, it was solved a long time ago.
                        </p>
                        <p>
                        An alternative to Axios is the request lib or fetchAPI 
                        (but this relies on some problems with code fails that get at “then” instead of “catch” and needs extra steps like response.json() 
                        and doesn’t have interceptors or all kind of stuff that makes Axios and other libs easier).
                        </p>
                        <hr />
                        <h3><strong>2. Lazyloading </strong> </h3>
                        <p>
                        Code-Splitting is a feature supported by bundlers like Webpack, 
                        Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
                        </p>
                        <p>To functions doing dynamic imports:</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import('./math').then(math => {\nconsole.log(math.add(16, 26));\n});"}                          
                        </SyntaxHighlighter>
                        <p>Or to components using React.Lazy:</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"const OtherComponent = React.lazy(() => import('./OtherComponent'))"}
                        </SyntaxHighlighter>
                        <p>This will automatically load the bundle containing the OtherComponent when this component is first rendered. 
                            The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content 
                            (such as a loading indicator) while we’re waiting for the lazy component to load.</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"const OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\nreturn (\n<div>\n<Suspense fallback={<div>Loading...</div>}>\n<section>\n<OtherComponent />\n<AnotherComponent />\n</section>\n</Suspense>\n</div>\n);\n}"}
                        </SyntaxHighlighter>
                        <hr />
                        <h3><strong>3. Error Boundaries  </strong> </h3>
                        <p>
                        Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, 
                        and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, 
                        in lifecycle methods, and in constructors of the whole tree below them.
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"class ErrorBoundary extends React.Component {\nconstructor(props) {\nsuper(props);\nthis.state = { hasError: false };\n }\n\nstatic getDerivedStateFromError(error) {\n// Update state so the next render will show the fallback UI.\n return { hasError: true };\n }\n\ncomponentDidCatch(error, errorInfo) {\n // You can also log the error to an error reporting service\nlogErrorToMyService(error, errorInfo);\n}\n\nrender() {\n if (this.state.hasError) {\n// You can render any custom fallback UI\n return <h1>Something went wrong.</h1>;\n }\n\nreturn this.props.children;\n }\n }\nThen you can use this as a wrapper component:\n<ErrorBoundary>\n<MyWidget />\n</ErrorBoundary>"}
                        </SyntaxHighlighter>
                        <hr />
                        <h3><strong> 4. Webworkers  </strong> </h3>
                        <p>Web Workers makes it possible to run a script operation in a background thread separate from the main execution thread of a web application. 
                            The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) 
                            thread to run without being blocked/slowed down.
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"var w;\nfunction startWorker() {\n if (typeof(Worker) !== 'undefined') {\n if (typeof(w) == 'undefined') {\n w = new Worker('demo_workers.js');\n}\nw.onmessage = function(event) {\n document.getElementById('result').innerHTML = event.data;\n }\n};\n} else {\n document.getElementById('result').innerHTML = 'Sorry! No Web Worker support.';\n}\n}\nfunction stopWorker() {\n w.terminate();\n w = undefined;\n}"}
                        </SyntaxHighlighter>
                        <hr />
                        <h3><strong> 5. IndexDB </strong> </h3>
                        <p>IndexDB is a built-in database, much more powerful than localStorage. Key/value storage: value can be (almost) anything, 
                            multiple key types. Supports transactions for reliability. 
                            Supports key range queries, indexes. Can store much more data than localStorage.</p>
                        <p>Token, cookies, and JWT</p>
                        <p>To make the authentication token process we need to get two tokens: the access token and the session token. 
                            The access token is our main key to persist auth status. It just gives us access to receive the session token. 
                            The session token expires after a time at backend part. When this happens we need to make a new request with the access token to refresh the session token.
                             Usually the code that the server send is 401 unauthorized.
                        </p>
                        <p>
                        With cookies this process is easier. 
                        you set the headers to contain “credentials” and it take the hidded cookies. 
                        They should be set as ont changeable by JS scripts and chrome hiddes it from cookies tab.
                        </p>
                        <p>
                        Bonus: If you have CORS problems to access the server you should use the properties access-control-allow-origin 
                        and/or access-control-allow-headers.JSON Web Tokens (JWTs) make it easy to send read-only signed “claims” between services 
                        (both internal and external to your app/site). Claims are any bits of data that you want someone else to be able to read and/or verify but not alter.
                        </p>
                        <hr />
                        <h3><strong> 6. Performance checkers </strong> </h3>
                        <ul>
                          <li> Audits: Lighthouse is an open-source, automated tool for improving the quality of web pages. 
                            You can run it against any web page, public or requiring authentication. 
                            It has audits for performance, accessibility, progressive web apps, and more.</li>
                          <li> Redux devtools: Redux DevTools for debugging application’s state changes.</li>
                          <li> React devtools: It allows you to inspect the React component hierarchies in the Chrome Developer Tools. 
                            You will get two new tabs in your Chrome DevTools: “⚛️ Components(to look into your components tree)” and “⚛️ 
                            Profiler(to make performance test in each component)”. It also says how many renders your component did.</li>
                          <li>Performance devtools: It is a tab of devtools that you can check the general performance of your application. 
                            Network devtools: You can check a list of all requests, and track the time they are taking to resolve.
                             why-this-render: lib to check the quantity of components renderization.</li>
                          <li>Renderer devtools: It is an option at console options on devtools that you ca track some info about the rendering.
                             One of them is FPS that checks how fluid is your page, the best value to FPS is at 60. So, 
                             if is lower than that that means you have space to work on performance.</li>
                        </ul>
                        <hr />
                        <h3><strong> 7. PWAs </strong> </h3>
                        <p>Progressive web applications (PWAs) are a type of application software delivered through the web, 
                            built using common web technologies including HTML, CSS and JavaScript. 
                            They are intended to work on any platform that uses a standards-compliant browser. 
                            Functionality includes working offline, push notifications, and device hardware access,
                            enabling creating user experiences similar to native applications on desktop and mobile devices. 
                            Since they are a type of web page or website known as a web application, there is no requirement for developers or 
                            users to install the web apps via digital distribution systems like Apple App Store or Google Play.</p>
                        <p>PWA’s rely on manifests(that contains some basic info about your app) and service workers that is a type of web worker. 
                            It’s essentially a JavaScript file that runs separately from the main browser thread, intercepting network requests, 
                            caching or retrieving resources from the cache, and delivering push messages.</p>
                            <img
                          src="assets/img/blog-details/PWD.png"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />  
                        <hr />
                        <h3><strong> 8. Realtime </strong> </h3>
                        <p>
                        The WebSocket protocol, described in the specification RFC 6455 provides a way to exchange data between browser and server via a persistent connection. 
                        The data can be passed in both directions as “packets”, without breaking the connection and additional HTTP-requests. 
                        WebSocket is especially great for services that require continuous data exchange, e.g. online games, real-time trading systems and so on.
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {" // First create the connection\n let socket = new \n WebSocket('wss://javascript.info/article/websocket/demo/hello')\n // Here you register an action when the connection starts\n socket.onopen = function(e) {\n alert('[open] Connection established');\n alert('Sending to server');\n socket.send('My name is John');\n };\n // When the socket is updated\n socket.onmessage = function(event) {\n  alert(`[message] Data received from server: ${event.data}`);\n }; // When it closes\n socket.onclose = function(event) {\n  if (event.wasClean) {\n   alert(`[close] Connection closed cleanly, code=${event.code}\n reason=${event.reason}`);\n  } else {\n    // e.g. server process killed or network down\n    // event.code is usually 1006 in this case\n    alert('[close] Connection died');\n   }\n  };\n // And when some error happens\n socket.onerror = function(error) {\n  alert(`[error] ${error.message}`);\n };"}
                        </SyntaxHighlighter>
                        <p>
                        The Server-Sent Events specification describes a built-in class EventSource, 
                        that keeps connection with the server and allows them to receive events from it.
                        </p>
                        <p>
                        Similar to WebSocket, the connection is persistent.
                        </p>
                        <p>
                        WebSocket and event source comparationEventSource is a less-powerful way of communicating with the server than WebSocket.
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"let eventSource = new EventSource('/events/subscribe');\neventSource.onmessage = function(event) {\n  console.log('New message', event.data);\n  // will log 3 times for the data stream above\n};\n\n // or eventSource.addEventListener('message', ...)"}
                        </SyntaxHighlighter>
                        <hr />
                        <h3><strong> 9. CSS performance  </strong> </h3>
                        <ul>
                          <li> Don’t use CSS icons, use SVG.</li>
                          <li> Make individual selectors like classes and call it, that is better than call the children or complicated selectors.</li>
                          <li> Fewer elements to match are less computation to run. So when using children, use direct children or individual selectors.</li>
                          <li> Use mixins instead extends(SASS).</li>
                          <li> Minify it.</li>
                          <li> Split the CSS imports and call it above the elements that use it. Component based CSS</li>
                        </ul>
                        <hr />
                        <h3><strong> 10.Advanced hooks  </strong> </h3>
                        <p>
                        useMemo Returns a memoized value. Pass a “create” function and an array of dependencies. 
                        useMemo will only recompute the memoized value when one of the dependencies has changed. 
                        This optimization helps to avoid expensive calculations on every render.
                        </p>
                        <p>Remember that the function passed to useMemo runs during rendering. 
                            Don’t do anything there that you wouldn’t normally do while rendering. For example, 
                            side effects belong in useEffect, not useMemo.</p>
                        <p>
                            If no array is provided, a new value will be computed on every render.
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);"}
                        </SyntaxHighlighter>
                        <p>
                            useLayoutEffect signature is identical to useEffect, but it fires synchronously after all DOM mutations. 
                            Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously,
                            before the browser has a chance to paint. Prefer the standard useEffect when possible to avoid blocking visual updates.
                        </p>
                        <p>
                        useReducer is an alternative to useState. Accepts a reducer of type (state, action) = newState, 
                        and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.) 
                        useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
                        useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
                        </p>
                        <p>Here’s the counter example from the useState section, rewritten to use a reducer:</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"const initialState = {count: 0};\nfunction reducer(state, action) {\n switch (action.type) {\n  case 'increment':\n   return {count: state.count + 1};\n  case 'decrement':\n   return {count: state.count - 1};\n  default:\n   throw new Error();\n  }\n}\nfunction Counter() {\n const [state, dispatch] = useReducer(reducer, initialState);\n return (\n  <>\n   Count: {state.count}\n   <button onClick={() => dispatch({type: 'decrement'})}>-</button>\n   <button onClick={() => dispatch({type: 'increment'})}>+</button>\n   </>\n );\n}"}
                        </SyntaxHighlighter>
                        <img
                          src="assets/img/blog-details/hooks_d.png"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />  
                        <hr />
                        <h3><strong> 11. React memo  </strong> </h3>
                        <p>React memo is a high order component that basically checks if the component should re-render. 
                            If really is receiving some changes, so its parent can re-render and keeps it from re-render if is not necessary.
                        </p>
                        <p>
                        You use it by exporting the component like this:
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"export default React.memo(ComponentName)"}
                        </SyntaxHighlighter>
                        <hr />
                        <h3><strong> 12. TDD  </strong> </h3>
                        <p>Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle:
                             requirements are turned into very specific test cases, then the software is improved so that the tests pass.
                        </p> 
                        <img
                          src="assets/img/blog-details/TDD.png"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />    
                        <hr />                   
                        <h3><strong> 13. Big lists  </strong> </h3>
                        <ul>
                          <li> The state resides in the highest level component, the Search component.</li>
                          <li> The state is described as follows:</li>
                          <SyntaxHighlighter language="javascript" style={docco}>
                          {"{\n visible : boolean,\n  files : array,\n filtered : array,\n query : string,\n currentlySelectedIndex : integer\n}"}
                        </SyntaxHighlighter>
                          <li> files is a potentially very large, array containing file paths (10000 entries is a plausible number).</li>
                          <li> currentlySelectedIndex which is the index of the currently selected element from the filtered list.</li>
                          <li> User types more than 2 letters into the Input component, the array is filtered and for each entry in the filtered array a Result component is rendered</li>
                          <li> Each Result component is displaying the full path that partially matched the query, and the partial match part of the path is highlighted. For example the DOM of a Result component, if the user had typed 'le' would be something like this :</li>
                          {"<li>this/is/a/fi<strong>le</strong>/path</li>"}
                          <li>If the user presses the up or down keys while the Input component is focused the currentlySelectedIndex changes based on the filtered array. This causes the Result component that matches the index to be marked as selected causing a re-render</li>
                        </ul> 
                        <img
                          src="assets/img/blog-details/bitglist.png"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                       
                        <br />                   
                        {/* Go to www.addthis.com/dashboard to customize your tools */}
                        <div class="addthis_inline_share_toolbox"></div>
                      </div>
                    </div>
                    <div className="pagination">
                    <ul>
                        {/* <li>
                          <a href="/react-hooks">Previous Post</a>
                        </li> */}
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

export default Advance_react ;
