import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import App from './components/App';
import SongLists from "./components/SongLists";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongLists} />
          <Route path="songs/new" component={SongCreate}/>
        </Route>

      </Router>
      {/* <div>Lyrical</div> */}
      
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
