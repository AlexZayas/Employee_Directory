/* eslint-disable no-unused-vars */
import React from 'react'; 
import '../stylesheets/App.css';
import NewHire from './NewHire';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Delete from './Delete';
import Update from './Update';
import ApiNewHire from './ApiNewHire';
import Directory from './Directory';

function App() {

  return (
     <div className="App">
       <Router>
         <Switch>
           <Route path="/directory">
             <Directory/>
           </Route>
           <Route path="/create">
             <NewHire/>
             <ApiNewHire/>
           </Route>
           <Route path="/update">
             <Update/>
           </Route>
           <Route path="/delete">
             <Delete/>
           </Route>
         </Switch>
       </Router>
     </div>
  )
  };

export default App;
