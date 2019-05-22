import React from "react";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      firstname:"",
      lastname:"",
      password:"",
      repeatPassword:"",
      gender:"male",
        steps:[
          {
            isActive:true,
            isComplete:false,
            name:"Basic"
          },
          {
            isActive:false,
            isComplete:false,
            name:"Contacts"  
          },
          {
            isActive:false,
            isComplete:false,
            name:"Avatar"
          },
          {
            isActive:false,
            isComplete:false,
            name:"Finish"
          }
        ],
        errors:{
          firstname:"",
          lastname:"",
          password:"",
          repeatPassword:""
        }
    }
  }
  
  onChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  onClick = event => {
    event.preventDefault();
    
  }
  render() {
    
    return(
      <div className="form-container card">
        <form className="form card-body">
{/* Отображение верхнего списка формы */}
        <div className="steps mb-4">
          {this.state.steps.map((item, index) => {
            return (
              <div className="step" key={item.name}>
                <div className={item.isActive ? "step__count is-active" : "step__count"}>{index + 1}</div>
                <div className="step__name">{item.name}</div>
              </div>
            );
          })}
        </div>


{/* Форма Basic */}
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input  type="text" 
                    className="form-control" 
                    id="firstname" 
                    aria-label="Firstname" 
                    placeholder="Enter firstname"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Firstname</label>
            <input  type="text" 
                    className="form-control" 
                    id="lastname" 
                    aria-label="Lastname"  
                    placeholder="Enter lastname" 
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input  type="text" 
                    className="form-control" 
                    id="password" 
                    aria-label="Enter password" 
                    placeholder="Enter password" 
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat password</label>
            <input  type="text" 
                    className="form-control" 
                    id="repeatPassword" 
                    aria-label="Repeat password" 
                    placeholder="Enter repeat password"
                    name="repeatPassword"
                    value={this.state.repeatPassword}
                    onChange={this.onChange} />
          </div>
          <fieldset className="form-group" id="form-group">
            <label htmlFor="form-group">Gender</label>
            <div className="form-check">
              <input  className="form-check-input" 
                      type="radio" 
                      id="male" 
                      name="gender"
                      value="male"
                      checked={this.state.gender === "male"}
                      onChange={this.onChange} />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input  className="form-check-input" 
                      type="radio" 
                      id="female"
                      name="gender"
                      value="female"
                      checked={this.state.gender === "female"} 
                      onChange={this.onChange} />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>
  
  
  
          <button type="submit" className="btn btn-primary d-flex ml-auto" onClick={this.onClick}>Next</button>
        </form>
      </div>
    );
  }
}
