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

const ReactRedux = () => {

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
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                <Box sx={{bgcolor: 'background.default',color: 'text.primary'}}>
                  <div
                    // class="main-title text-center wow fadeIn"
                    style={{ marginTop: "30px" }}
                  >
                    <h3 style={{textAlignLast: 'center'}}>React Redux Toolkit</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    {/* <p style={{textAlignLast: 'center'}}>
                    Redux Toolkit
                    </p> */}
                  </div>
                  </Box>
                </div>
              </div>
            </div>
            <div className="blog-details wow fadeIn text-left" style={{marginTop:"1px"}}>
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
                        src="assets/img/blog-details/s.png"
                        alt="React hooks were introduced in version 16.8"
                        class="blog-img"
                      />
                      <div className="blog-head">
                        <h3>
                          <strong>What is Redux and How Does It Work?</strong>
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
                        Redux is a state management library that acts like a container external to other 
                        components in the application, that stores states where components can access 
                        them without having to pass variables from component to component.  
                        Taking the same example as above, we will see how easy it is to manage states with redux. Redux acts as a store that keeps all the states in the program. 
                        When a component needs to get updated,the state is then read from the redux store. 
                        With redux, you can have separate stores for separate different things depending on how large or small your application is.
                        Note however that even though we use redux toolkit with React in this example, 
                        it is compatible with other frameworks like Vue, Angular, as well as Vanilla JavaScript.
                        </p>
                        <h4>Why Redux Toolkit?</h4>
                        <p>
                        There are three problems that the redux toolkit aimed to solve:
                        <br />
                        <br />
                        <ul>
                          <li> Configuring a redux store was too complicated.</li>
                          <li> One had to add a lot of packages to build complex and big applications.</li>
                          <li> Redux required too much boilerplate code which made it cumbersome to write efficient and clean code.</li>
                        </ul>
                        <br />
                        As for the redux toolkit, which is considered as the official, opinionated, batteries-included toolset for efficient Redux development, 
                        it is a simpler and better way of writing redux logic. 
                        It speeds up development because it already includes packages that are necessary for building redux apps.
                        </p>
                        <h4> Main Features of Redux Toolkit API </h4>
                        <p>
                        There are many reasons why redux Toolkit is preferable over regular redux, 
                        but there are essentially a few API functions that make working with redux toolkit even better. 
                        These functions only help to make the redux flow more readable and easier to work with.
                        </p>
                        <h4> ConfigureStore </h4>
                        <p>
                        Creates a redux store that takes in an object as a parameter and keeps all working reducers.
                        </p>
                        <h4> CreateAction </h4>
                        <p>
                        Accepts an action type string and returns an action creator function that uses that type.
                        </p>
                        <h4> CreateReducer </h4>
                        <p>
                        Accepts an initial state value and creates a reducer that handles all actions.
                        </p>
                        <h4> CreateSlice </h4>
                        <p>
                        As you will see subsequently, we will include all the above functions in a slice, 
                        which is essentially like a container function for states, actions, and reducers.
                        To get a full understanding of redux and related frameworks,
                         consider checking out our amazing web development and designing course where we take you from beginner to expert.
                        </p>
                        <h4> The Redux Flow </h4>
                        <p>
                        In order to get started with Redux, there are some basic steps that you would follow to have Redux running in your system.
                        For the purpose of this article, I am going to create a counter app that does basic increments and 
                        decrements to demonstrate the flow one would normally take when working with Redux.The following steps are not standard. 
                        You should not feel obliged to perform them exactly as I do. You should refer to the Redux toolkit documentation in case of missing snippets.
                        </p>
                        <img
                          src="assets/img/blog-details/redux.png"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                        <h4> Install Packages </h4>
                        <p>
                        The first thing we want to do is install the Redux toolkit and react-redux packages in our project. 
                        Before you start though, ensure that you have a React app and all necessary dependencies installed already. 
                        If you haven't you can do this by typing the following in your terminal,
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"npx create-react-app <folder name>"}
                        </SyntaxHighlighter>
                        <p>If you already have an existing React app, 
                            then you would want the following to get the Redux and React-redux toolkit installed in the 
                            directory where you have your packages installed.
                            </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"npm install @reduxjs/toolkit react-redux"}
                        </SyntaxHighlighter>
                        <h4> Create and Initialize Store  </h4>
                        <p>
                        You might have noticed, that even with regular Redux, we always create a store at the beginning. We won't be doing too much work on the store, 
                        it is essentially just what we pass to our top-level components, to give every component beneath it access to any variable in the store.
                        In order to initialize the store, we could create another folder and name it app. In this folder, we create a file and give it whatever name. Say, store.js.
                        We are going to import a function called ConfigureStore, and the documentation helps us set that up. You can add the following code to the store.js file.
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import { configureStore } from '@reduxjs/toolkit'\nexport const store = configureStore({\nreducer: {},\n})"}                          
                        </SyntaxHighlighter>
                        <p>You can see that the ConfigureStore replaces the CreateStore from Redux. ConfigureStore creates a store and accepts objects as an argument. 
                            We have one key for now which is a reducer, and we are going to see how this reducer comes into play subsequently.
                        </p>
                        <h4>Provide Store in React App</h4>
                        <p>Another essential step, which is equally part of setup, is to pass in a provider component in our React app that would take in that store. 
                            We need to make sure that it is above the app component, 
                            so that every child of the provider inside the app gets access to any variable in that store.
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport './index.css'\nimport App from './App'\nimport { store } from './app/store'\nimport { Provider } from 'react-redux'\nReactDOM.render(\n <Provider store={store}>\n<App />\n</Provider>,\ndocument.getElementById('root')\n)"}                          
                        </SyntaxHighlighter>
                        <p>Notice how we make it a parent of our application.</p>
                        <p>Make sure to get all paths correctly in order to avoid errors.</p>
                        <h4> Write Reducers and Actions </h4>
                        <p>
                        At this point, our basic setup is already done, and we can go ahead with our React app. 
                        Still in our app folder, we will create another file and name it counter.js. Here, 
                        we will write our reducers and actions.However, for us to understand how this works, 
                        we have to understand how redux works behind the scenes. In the redux flow, everything is actually split into 3 sections.
                        </p>
                        <h4> State </h4>
                        <p>
                        This is where you keep your variables, and what you define your variables to be initially. 
                        In this case, our only variable is a count variable. It's the value that gets incremented and/or decremented.
                        </p>
                        <h4> Action </h4>
                        <p>
                        This is what your React component calls when they want something to happen to a variable in the redux state. 
                        The type of action is simply a string that describes the action. They are used to describe what happened to the state and are not responsible for changing it.
                        In this case, our actions are increment and decrement. We will have two buttons and whenever we click a button, it will call the respective action. 
                        </p>
                        <h4> Reducer </h4>
                        <p>
                        Reducers are functions that take in the current value of a state, performs operations as instructed by the action, 
                        and output the new value of that state. A reducer is what does something due to the action that is called.
                        As you may have guessed, our reducers here would be an increment and a decrement function.
                        We include all these in a slice. A slice is basically like a container consisting of states, 
                        reducers, and actions. Redux toolkit does this differently from regular redux in the sense that with regular redux, 
                        you would have to define everything separately. Redux toolkit simplifies this with the help of the createSlice function.
                        </p>
                        <h4> You can see the code below: </h4>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import { createSlice } from '@reduxjs/toolkit';\nexport const counterSlice = createSlice({\nname: 'counter',\n initialState: {\n count: 0\n},\nreducers: {\n  increment: (state) => {\nstate.count += 1;\n },\ndecrement: (state) => {\n  state.count -= 1;\n}\n}\n});"}                          
                        </SyntaxHighlighter>
                        <p>{'export const { increment, decrement } = counterSlice.actions;'}</p>
                        <p>export default counterSlice.reducer;</p>
                        <p>
                            You can see that we named our slice function counter. We then initialized our state, by defining a variable count,
                            and giving it an initial value of 0. After that, there is an object called reducer. 
                            This is where we have actions and the reducers that modify our states.
                             </p>
                        <p>
                            We have an increment and decrement action that takes in the state, 
                            and then goes ahead to increment and decrement it. 
                            The last thing we want to do after creating all our reducers is to import them into our app. 
                            We have exported the reducer along with all the actions so that we can call them in the React app as seen above.
                            </p>
                        <p>
                            At the beginning our app, we want to add,
                        </p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import { decrement, increment, incrementByAmount } from './redux/counter';"}                          
                        </SyntaxHighlighter>
                        <p>In order for the variables in our app to have access to the reducer, 
                           we need to pass the reducer to our store. This is the only time we are actually going to be working with our store.js file. 
                           You can add as many reducers as you want to the store.</p>
                        <p>Our store.js would now look like this,</p>
                        <SyntaxHighlighter language="javascript" style={docco}>
                          {"import { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counter';\nexport const store = configureStore({\n reducer: {\ncounter:counterReducer,\n}\n});"}                          
                        </SyntaxHighlighter>
                        <p>
                        To get the count from our redux store, we are going to use a React hook called useSelector. 
                        useSelector basically indicates that we want to read some variable from a certain reducer. 
                        Before using this hook, we need to import it from react-redux.
                        </p>
                        <h4>Add Dispatch Functions in the UI </h4>
                        <p>Now that we have read all necessary variables from the store, we would want to call the increment and decrement actions to get our app fully working.
                             We need to use another hook from the react-redux store, which is the dispatch hook.</p>
                        <p>With the dispatch hook set up, we can call the necessary actions in our app.</p>
                        <p>To see the complete code and all files, you can check the code sandbox here.</p>
                        <h4>Just the Beginning </h4>
                        <p>We've officially created a redux toolkit application, and you have seen how easy it is to work with stores.
                             Redux toolkit is very beginner-friendly and has its own advantages over redux. Want to get more out of React? 
                             Check out our amazing KnowledgeHut’s Reactjs online training.</p>
                        <h3>Example:</h3>
                             <img
                          src="assets/img/blog-details/ui1.gif"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />
                        <h3>Frequently Asked Questions (FAQs) </h3>
                        <h4>1. How do you implement a Redux toolkit? </h4>
                        <p>To implement redux toolkit, you would need to first install theredux toolkit and  react-redux package, 
                            create a redux store, and call it it your react app. You can check the docs here for further steps.</p>
                        <h4>2. Is Redux toolkit easy?</h4>
                        <p>Redux toolkit is beginner friendly, and you do not necessarily need previous knowledge in regular redux to start out with it. 
                            Just get to understand how state management works, and you are good to go.</p>
                        <h4>3. What is difference between Redux and Redux toolkit? </h4>
                        <p>While redux and redux toolkit essentially do the same thing, redux toolkit provides APIs to manage common redux use cases. 
                            Redux toolkit also reduces the bulky boilerplate code that one usually has to work with when it comes to regular redux.</p>
                        <h4>4. Does Redux toolkit come with thunk? </h4>
                        <p>Redux thunk package is already included by default in the redux toolkit.</p>
                        <h4>5. What can I use instead of Redux? </h4>
                        <p>Instead of redux, you could prefer to use redux toolkit, MobX, Flux, Apollo, vuex, and RxJS.</p>
                        <h4>The problem Redux Tool Kit solves</h4>
                        <p>Redux Tool Kit(previously known as Redux Starter Kit) provides some options to configure the global store 
                            and create both actions and reducers more streamlined by abstracting the Redux API as much as possible.</p>
                       
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
                          <a href="/ui-ux">Next Post</a>
                        </li> */}
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

export default ReactRedux ;
