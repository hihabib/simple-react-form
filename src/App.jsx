import React, { Component } from "react";
import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Index from "./components/Index.jsx";
class App extends Component {
  state = {
    users: [],
  };  
  createUsers = user => {
    this.setState(()=>{
      return({

        users:[...this.state.users, user]
      })
    });
  }
  render() {
    
    return (
      <div className={classes.App}>
        <Index createUsers={this.createUsers} />
        <ul class="list-group mt-5">
          {this.state.users.map(el => {
            return <li key={el.Email} className="list-group-item">{el.Name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
