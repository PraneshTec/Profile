import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

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

const Interview_questions = () => {

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
            <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
              <div className="blog-content">
                {/* <MyApp /> */}
                <div className="blog-grid">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <Box sx={{ bgcolor: 'background.default', color: 'text.primary'}}>
                          <div
                            // class="main-title text-center wow fadeIn"
                            style={{ marginTop: "30px" }}
                          >
                            <h3 style={{ textAlignLast: 'center' }}>React Interview Question & Answer</h3>
                            <div class="underline1"></div>
                            <div class="underline2"></div>
                            {/* <p style={{ textAlignLast: 'center' }}>
                              ReactJS Interview Based Question And Answer.
                            </p> */}
                          </div>
                        </Box>
                      </div>
                    </div>
                  </div>
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
                              src="assets/img/blog-details/react_i.png"
                              alt="React hooks were introduced in version 16.8"
                              class="blog-img"
                            />
                            <div className="blog-head">
                              <h3>
                                <strong>1. What is React?</strong>
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
                                React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011.
                                It follows the component-based approach for building reusable UI components, especially for single page application.
                                It is used for developing interactive view layer of web and mobile apps. It was created by Jordan Walke,
                                a software engineer at Facebook. It was initially deployed on Facebook's News Feed section in 2011 and
                                later used in its products like WhatsApp & Instagram.
                              </p>
                              <hr />
                              <h3>2. What are the features of React?</h3>
                              <p>
                                React framework gaining quick popularity as the best framework among web developers. The main features of React are:
                              </p>
                              <ul>
                                <li>JSX</li>
                                <li>Components</li>
                                <li>One-way Data Binding</li>
                                <li>Virtual DOM</li>
                                <li>Simplicity</li>
                                <li>Performance</li>
                              </ul>
                              <hr />
                              <h3>3. What are the most crucial advantages of using React?</h3>
                              <p>Following is a list of the most crucial advantages of using React:</p>
                              <ul>
                                <li>React is easy to learn and use</li>
                                <li>React follows the MVC architecture.</li>
                                <li>React uses Virtual DOM to improve efficiency.</li>
                                <li>Creating dynamic web applications is easy.</li>
                                <li>React is SEO-friendly.</li>
                                <li>React allows reusable components.</li>
                                <li>Support of handy tools</li>
                                <li>React has a rich set of libraries.</li>
                                <li>Scope for testing the codes</li>
                              </ul>
                              <hr />
                              <h3>4. What are the biggest limitations of React?</h3>
                              <p>
                                Following is the list of the biggest limitations of React:
                              </p>
                              <ul>
                                <li>React is just a library. It is not a complete framework.</li>
                                <li>It has a huge library which takes time to understand.</li>
                                <li>It may be difficult for the new programmers to understand and code.</li>
                                <li>React uses inline templating and JSX, which may be difficult and act as a barrier. It also makes the coding complex.</li>
                              </ul>
                              <hr />
                              <h3>5. What is JSX?</h3>
                              <p>
                                JSX stands for JavaScript XML. It is a HTML like syntex that can use with react to make it easier and more interactive to create react components (easy to use react component).
                              </p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"class App extends React.Component {\n render() {\n  return(\n   <div>\n   <h1>Hello JavaTpoint</h1>\n   </div>\n  )\n }\n}"}
                              </SyntaxHighlighter>
                              <p>
                                In the above example, text inside {"<h1>"} tag return as JavaScript function to the render function. After compilation,
                                the JSX expression becomes a normal JavaScript function, as shown below.
                              </p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"React.createElement('h1', null, 'Hello JavaTpoint');"}
                              </SyntaxHighlighter>
                              <hr />
                              <h3>6. Why can't browsers read JSX?</h3>
                              <p>Browsers cannot read JSX directly because they can only understand JavaScript objects, and JSX is not a regular JavaScript object.
                                Thus, we need to transform the JSX file into a JavaScript object using transpilers like Babel and then pass it to the browser.</p>
                              <hr />
                              <h3>7. Why we use JSX?</h3>
                              <ul>
                                <li>It is faster than regular JavaScript because it performs optimization while translating the code to JavaScript.</li>
                                <li>Instead of separating technologies by putting markup and logic in separate files, React uses components that contain both.</li>
                                <li>t is type-safe, and most of the errors can be found at compilation time.</li>
                                <li>It makes easier to create templates.</li>
                              </ul>
                              <hr />
                              <h3>8. What do you understand by Virtual DOM?</h3>
                              <p>A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM.
                                It is similar to a node tree which lists the elements, their attributes,
                                and content as objects and their properties. The render function creates a node tree of the React
                                components and then updates this node tree in response to the mutations in the data model
                                caused by various actions done by the user or by the system.</p>
                              <hr />
                              <h3>9. Explain the working of Virtual DOM.</h3>
                              <p>Virtual DOM works in three steps:</p>
                              <p>1. Whenever any data changes in the React App, the entire UI is re-rendered in Virtual DOM representation.</p>
                              <img
                                src="assets/img/blog-details/vdom1.png"
                                alt="Hooks are the most valuable things in react"
                                class="blog-img"
                              />
                              <p>2. Now, the difference between the previous DOM representation and the new DOM is calculated.</p>
                              <img
                                src="assets/img/blog-details/vdom2.png"
                                alt="Hooks are the most valuable things in react"
                                class="blog-img"
                              />
                              <p>3. Once the calculations are completed, the real DOM updated with only those things which are changed.</p>
                              <img
                                src="assets/img/blog-details/vdom3.png"
                                alt="Hooks are the most valuable things in react"
                                class="blog-img"
                              />
                              <hr />
                              <h3>10. How is React different from Angular?</h3>
                              <p>The React is different from Angular in the following ways.</p>
                              <table>
                                <tr>
                                  <th></th>
                                  <th>Angular</th>
                                  <th>React</th>
                                </tr>
                                <tr>
                                  <th>Author</th>
                                  <td>Google</td>
                                  <td>Facebook Community</td>
                                </tr>
                                <tr>
                                  <th>Developer</th>
                                  <td>Misko Hevery</td>
                                  <td>Jordan Walke</td>
                                </tr>
                                <tr>
                                  <th>Initial Release</th>
                                  <td>October 2010</td>
                                  <td>March 2013</td>
                                </tr>
                                <tr>
                                  <th>Language</th>
                                  <td>JavaScript, HTML</td>
                                  <td>JSX</td>
                                </tr>
                                <tr>
                                  <th>Type</th>
                                  <td>Open Source MVC Framework</td>
                                  <td>Open Source JS Framework</td>
                                </tr>
                                <tr>
                                  <th>Rendering</th>
                                  <td>Client-Side</td>
                                  <td>Server-Side</td>
                                </tr>
                                <tr>
                                  <th>Data-Binding</th>
                                  <td>Bi-directional</td>
                                  <td>Uni-directional</td>
                                </tr>
                                <tr>
                                  <th>DOM</th>
                                  <td>Regular DOM</td>
                                  <td>Virtual DOM</td>
                                </tr>
                                <tr>
                                  <th>Testing</th>
                                  <td>Unit and Integration Testing</td>
                                  <td>Unit Testing</td>
                                </tr>
                                <tr>
                                  <th>App Architecture</th>
                                  <td>MVC</td>
                                  <td>Flux</td>
                                </tr>
                                <tr>
                                  <th>Performance</th>
                                  <td>Slow</td>
                                  <td>Fast, due to virtual DOM.</td>
                                </tr>
                              </table>
                              <hr />
                              <h3>11 How React's ES6 syntax is different from ES5 syntax?</h3>
                              <p>The React's ES6 syntax has changed from ES5 syntax in the following aspects.</p>
                              <p><b>require vs. Import</b></p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"// ES5\nvar React = require('react');\n\n//ES6\nimport React from 'react';"}
                              </SyntaxHighlighter>
                              <p><b>exports vs. export</b></p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"// ES5  \nmodule.exports = Component;\n\n// ES6\niexport default Component;"}
                              </SyntaxHighlighter>
                              <p><b>component and function</b></p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"// ES5  \nvar MyComponent = React.createClass({\n render: function() {\n   return( \n   <h3>Hello JavaTpoint</h3>\n  );\n }\n});\n\n//ES6\nclass MyComponent extends React.Component {\n render() {\n   return(\n   <h3>Hello Javatpoint</h3>\n  );\n }\n}"}
                              </SyntaxHighlighter>
                              <p><b>props</b></p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"// ES5  \nvar App = React.createClass({\n propTypes: { name: React.PropTypes.string },\n render: function() {\n  return(\n   <h3>Hello, {this.props.name}!</h3>\n  );\n }\n});\n\n//ES6\nclass App extends React.Component {\n render() {\n   return(\n   <h3>Hello, {this.props.name}!</h3>\n  );\n }\n}"}
                              </SyntaxHighlighter>
                              <p><b>state</b></p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"var App = React.createClass({ \n getInitialState: function() {\n  return { name: 'world' };  \n },\n render: function() {\n   return( \n    <h3>Hello, {this.state.name}!</h3> \n  );\n }\n});\n\n// ES6\nclass App extends React.Component {\n constructor() {\n  super();\n  this.state = { name: 'world' };\n }\n  render() {\n  return(\n   <h3>Hello, {this.state.name}!</h3>\n  );\n }\n}"}
                              </SyntaxHighlighter>
                              <hr />
                              <h3>12. What is the difference between ReactJS and React Native?</h3>
                              <p>The main differences between ReactJS and React Native are given below.</p>
                              <table>
                                <tr>
                                  <th></th>
                                  <th>ReactJS</th>
                                  <th>React Native</th>
                                </tr>
                                <tr>
                                  <th>1.</th>
                                  <td>Initial release in 2013.</td>
                                  <td>Initial release in 2015.</td>
                                </tr>
                                <tr>
                                  <th>2.</th>
                                  <td>It is used for developing web applications.</td>
                                  <td>It is used for developing mobile applications.</td>
                                </tr>
                                <tr>
                                  <th>3.</th>
                                  <td>It can be executed on all platforms.</td>
                                  <td>It is not platform independent. It takes more effort to be executed on all platforms.</td>
                                </tr>
                                <tr>
                                  <th>4.</th>
                                  <td>It uses a JavaScript library and CSS for animations.</td>
                                  <td>It comes with built-in animation libraries.</td>
                                </tr>
                                <tr>
                                  <th>5.</th>
                                  <td>It uses React-router for navigating web pages.k</td>
                                  <td>It has built-in Navigator library for navigating mobile applications.</td>
                                </tr>
                                <tr>
                                  <th>6.</th>
                                  <td>It uses HTML tags.</td>
                                  <td>It does not use HTML tags.</td>
                                </tr>
                                <tr>
                                  <th>7.</th>
                                  <td>In this, the Virtual DOM renders the browser code.</td>
                                  <td>In this, Native uses its API to render code for mobile applications.</td>
                                </tr>
                              </table>
                              <hr />
                              <h3>13. What is the difference between Real DOM and Virtual DOM?</h3>
                              <p>The following table specifies the key differences between the Real DOM and Virtual DOM:</p>
                              <p>The real DOM creates a new DOM if the element updates.</p>
                              <table>
                                <tr>
                                  {/* <th></th> */}
                                  <th>Real DOM</th>
                                  <th>Virtual DOM</th>
                                </tr>
                                <tr>
                                  {/* <th>1.</th> */}
                                  <td>The real DOM updates slower.</td>
                                  <td>The virtual DOM updates faster.</td>
                                </tr>
                                <tr>
                                  {/* <th>2.</th> */}
                                  <td>The real DOM can directly update HTML.</td>
                                  <td>The virtual DOM cannot directly update HTML.</td>
                                </tr>
                                <tr>
                                  {/* <th>3.</th> */}
                                  <td>The virtual DOM updates the JSX if the element updates.</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  {/* <th>4.</th> */}
                                  <td>In real DOM, DOM manipulation is very expensive.</td>
                                  <td>In virtual DOM, DOM manipulation is very easy.</td>
                                </tr>
                                <tr>
                                  {/* <th>5.</th> */}
                                  <td>There is a lot of memory wastage in The real DOM.</td>
                                  <td>There is no memory wastage in the virtual DOM.</td>
                                </tr>
                                </table>
                                <hr />
                                <h3>14. What is Server-Side Rendering?</h3>
                                <p>Server-side rendering with JavaScript libraries like React is where the server returns a ready-to-render HTML page and the JS scripts required to make the page interactive. 
                                  The HTML is rendered immediately with all the static elements. In the meantime, the browser downloads and executes the JS code, 
                                  after which the page becomes interactive. The interactions on this page are now handled by the browser on the client side. 
                                  For any new content or new data, the browser sends a request to the server through APIs, and only the newly required information is fetched.</p>
                                <p><b>ADVANTAGES</b></p>
                                <ul>
                                <li>Fast initial loading of the web page since ready-to-display HTML is provided to the browser.</li>
                                <li>Great user experience even if the user has a bad connection, outdated device, or JavaScript disabled in the browser because all the basic content is ready to be rendered.</li>
                                <li>The content of the web page is indexed quicker, resulting in better SEO ranking.</li>
                                <li>A great option for static pages since server-side rendering loads the content promptly and efficiently.</li>
                              </ul>
                              <br />
                              <br />
                              <p><b>DISADVANTAGES</b></p>
                                <ul>
                                <li>SSR needs more resources and can be expensive since all the processing is done on the server.</li>
                                <li>For complex applications, the high number of server requests can slow down the site.</li>
                                <li>Increased load with many users can lead to bottlenecks.</li>
                                <li>Setting up SSR can be complicated and tedious.</li>
                              </ul>
                              <hr />
                              <h3>15. What are React lifecycle methods?</h3>
                              <p>Each React lifecycle phase has a number of lifecycle methods that you can override to run code 
                                at specified times during the process. These are popularly known as component lifecycle methods.</p>
                              <p>The diagram below shows the React lifecycle methods associated with the mounting, updating, umounting, and error lifecycle phases:</p>
                              <img
                                src="assets/img/blog-details/lifecycle1.png"
                                alt="Hooks are the most valuable things in react"
                                class="blog-img"
                              />
                              <h3>Mounting lifecycle methods</h3>
                              <p>The mounting phase refers to the phase during which a component is created and inserted to the DOM.</p>
                              <p>The following methods are called in order.</p>
                              <h4>1. constructor()</h4>
                              <p>The constructor method is called before the component is mounted to the DOM. In most cases, you would initialize state and bind event handlers methods within the constructor method.</p>
                              <p><b>example of the constructor()</b></p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"const MyComponent extends React.Component {\n constructor(props) {\n  super(props)\n   this.state = {\n    points: 0\n   }\n   this.handlePoints = this.handlePoints.bind(this)\n  }\n}"}
                              </SyntaxHighlighter>
                              <h4>2. static getDerivedStateFromProps()</h4>
                              <p>Its main function is to ensure that the state and props are in sync for when it’s required.</p>
                              <p>The basic structure of the static getDerivedStateFromProps() looks like this:</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"const MyComponent extends React.Component {\n...\n\n static getDerivedStateFromProps() {\n//do stuff here\n }\n}"}
                              </SyntaxHighlighter>
                              <p>static getDerivedStateFromProps() takes in props and state:</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"... \n\n  static getDerivedStateFromProps(props, state) {\n//do stuff here\n }\n\n..."}
                              </SyntaxHighlighter>
                              <p>You can return an object to update the state of the component:</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"... \n\n  static getDerivedStateFromProps(props, state) {\n   return {\n   points: 200 // update state with this\n  }\n}\n\n..."}
                              </SyntaxHighlighter>
                              <p>Or you can return null to make no updates:</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"... \n\n static getDerivedStateFromProps(props, state) {\n  return null\n }\n\n..."}
                              </SyntaxHighlighter>
                              <p>getDerivedStateFromProps() is a rarely used lifecycle method, it comes in handy in certain scenarios.this method is called (or invoked) 
                                before the component is rendered to the DOM on initial mount.</p>
                              <h4>3. render()</h4>
                              <p>After the static getDerivedStateFromProps method is called, the next lifecycle method in line is the render method:</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"class MyComponent extends React.Component { \n// render is the only required method for a class component\n  render() {\n  return <h1> Hurray! </h1>\n }\n}\n"}
                              </SyntaxHighlighter>
                              <h4>4. componentDidMount()</h4>
                              <p>After render is called, the component is mounted to the DOM and the componentDidMount method is invoked. This function is invoked immediately after the component is mounted to the DOM. You would use the componentDidMount lifecycle method to grab a DOM node from the component tree immediately after it’s mounted.</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"class ModalContent extends React.Component {\n\n el = document.createElement('section');\n\n  componentDidMount() {\n    document.querySelector('body').appendChild(this.el);\n }\n\n// using a portal, the content of the modal will be rendered in the DOM element attached to the DOM in the componentDidMount method.\n\n}"}
                              </SyntaxHighlighter>
                              <p>If you also want to make network requests as soon as the component is mounted to the DOM, this is a perfect place to do so:</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"componentDidMount() {\n this.fetchListOfTweets() // where fetchListOfTweets initiates a netowrk request to fetch a certain list of tweets.\n}"}
                              </SyntaxHighlighter>
                              <p>You could also set up subscriptions such as timers. Here’s an example:</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"// e.g requestAnimationFrame\ncomponentDidMount() {\n  window.requestAnimationFrame(this._updateCountdown);\n }\n\n// e.g event listeners\ncomponentDidMount() {\n  el.addEventListener()\n }"}
                              </SyntaxHighlighter>
                              <ul>
                                <li>Each render() function contains a return statement.</li>
                                <li>The return statement can have only one parent HTML tag.</li>
                              </ul>
                              <hr />
                              <h3>16. What Are React Hooks?</h3>
                              <p>These are in-built functions that allow developers to use state and lifecycle methods within components in React. Each component’s 
                                lifecycle has 3 phases which are mount, unmount, and update. Alongside that, components have states and properties. 
                                Hooks allow developers to use these methods whilst improving code reuse with greater flexibility navigating the component tree.</p>
                              <h4>Primary Benefit Of Hooks</h4>
                              <p>Through Hooks, you can code in React without using classes. With Hooks, you can reuse existing states in your code plus easily
                                 test them later on for errors and bugs in the code. 
                                Through the use of Hooks, you can tightly couple logic in the code on React.</p>
                              <hr/>
                              <h3>17. What is a State in React?</h3>
                              <p>The State is an updatable structure which holds the data and information about the component. 
                                It may be changed over the lifetime of the component in response to user action or system event. 
                                It is the heart of the react component which determines the behavior of the component and how it will render. It must be kept as simple as possible.</p>
                              <SyntaxHighlighter language="javascript" style={docco}>
                                {"import React from 'react'\n\nclass User extends React.Component {\n constructor(props) {\n  super(props)\n\n  this.state = {\n   message: 'Welcome to JavaTpoint'\n }\n}\n\nrender() {\n  <div>\n   <h1>{this.state.message}</h1>\n  <div>\n  )\n }\n}\nexport default User"}
                              </SyntaxHighlighter>
                              <h3>18. What are props in React?</h3>
                              <p>Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.
                              Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.
                              </p>
                              <hr />
                              <h3>19. Differentiate between States and Props.</h3>
                              <p>The major differences between States and Props are given below.</p>
                              <table>
                                <tr>
                                  <th></th>
                                  <th>Props</th>
                                  <th>State</th>
                                </tr>
                                <tr>
                                  <th>1.</th>
                                  <td>Props are read-only.</td>
                                  <td>State changes can be asynchronous.</td>
                                </tr>
                                <tr>
                                  <th>2.</th>
                                  <td>Props are immutable.</td>
                                  <td>State is mutable.</td>
                                </tr>
                                <tr>
                                  <th>3.</th>
                                  <td>Props allow you to pass data from one component to other components as an argument.</td>
                                  <td>State holds information about the components.</td>
                                </tr>
                                <tr>
                                  <th>4.</th>
                                  <td>Props can be accessed by the child component.</td>
                                  <td>State cannot be accessed by child components.</td>
                                </tr>
                                <tr>
                                  <th>5.</th>
                                  <td>Props are used to communicate between components.</td>
                                  <td>States can be used for rendering dynamic changes with the component.</td>
                                </tr>
                                <tr>
                                  <th>6.</th>
                                  <td>The stateless component can have Props.</td>
                                  <td>The stateless components cannot have State.</td>
                                </tr>
                                <tr>
                                  <th>7.</th>
                                  <td>Props make components reusable.</td>
                                  <td>The State cannot make components reusable.</td>
                                </tr>
                                <tr>
                                  <th>8.</th>
                                  <td>Props are external and controlled by whatever renders the component.</td>
                                  <td>The State is internal and controlled by the component itself.</td>
                                </tr>
                                </table>
                                <hr />
                                <h3>20. What is a higher-order component in React?</h3>
                                <p>A higher-order component acts as a container for other components. 
                                  This helps to keep components simple and enables re-usability. 
                                  They are generally used when multiple components have to use a common logic. <span className="highlight">(Return a new Component)</span></p>
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
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </div>
    </React.StrictMode>
  );
};

export default Interview_questions;
