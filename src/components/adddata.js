import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import Axios from "axios";
export default class AddData extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.saveDataiin = this.saveDataiin.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      submitted: false,
	  income:"",
	  occupation:"",
	  fname:"",
	  mname:"",
	  name:""
	  
    };
  }
  /// Add Data
  
	saveDataiin = (e) => {
		
		 var data = {
      fname: this.state.fname,
      mname: this.state.mname,
      name: this.state.name,
      income: this.state.income
     
    };
	
	
//console.log('hello thai', data.fname)
 Axios.post("http://localhost:3001/create", {
      fname: data.fname,
      mname: data.mname,
      name: data.name,
      income: data.income,
     
    }).then(() => {
      
        console.log('success data inserted')
   
  });
	};
  
  
  handleInputChange = e => { 
  
 // console.log(e.target.value,"sdfgsdf");
  this.setState({ [e.target.name]: e.target.value })
  
  }
  
handleInputChange2 = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }
  
  
 
  
  

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
	
      <div className="submit-form">
	  <h1>Personal Details</h1>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
				value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Date of birth</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
			
			
			
			<div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.email}
                name="email"
              />
            </div>
			
			<div className="form-group">
              <label htmlFor="fname">Father Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                required
                value={this.state.fname}
                onChange={this.handleInputChange}
                name="fname"
              />
            </div>
			
			<div className="form-group">
              <label htmlFor="mname">Mother Name</label>
              <input
                type="text"
                className="form-control"
                id="mname"
                required
                value={this.state.mname}
                onChange={this.handleInputChange}
                name="mname"
              />
            </div>
			
			<div className="form-group">
              <label htmlFor="mname">Place of Birth</label>
              <input
                type="text"
                className="form-control"
                id="pbirth"
                required
                value={this.state.pbirth}
                onChange={this.pbirth}
                name="pbirth"
              />
            </div>
			 <div>
        <label htmlFor="income">Income Range:</label><br/>
        <select className="form-control" name="income" id="income" value={this.state.income}
                onChange={this.handleInputChange}>
          <option value="volvo">Select</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select><br/>
      </div>
	   <div>
        <label htmlFor="occupation">Occupation:</label><br/>
        <select className="form-control" name="occupation" id="occupation">
          <option value="volvo">Select</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select><br/><br/>
      </div>

            
			
			  <div>
        {/* Hello world */}
        <h3>Gender</h3>
        <input type="radio" name="gender" defaultValue="male" /> Male &nbsp;&nbsp;
        <input type="radio" name="gender" defaultValue="female" /> Female &nbsp;&nbsp;
        <input type="radio" name="gender" defaultValue="other" /> Other &nbsp;&nbsp;
        <br /><br />
        <h3>Marital Status</h3>
        <input type="radio" name="marital" defaultValue="Single" /> Single &nbsp;&nbsp;
        <input type="radio" name="marital" defaultValue="Married" /> Married &nbsp;&nbsp;
		
		    <h3>Residential Status</h3>
        <input type="radio" name="resi" defaultValue="Single" /> Indian &nbsp;&nbsp;
        <input type="radio" name="resi" defaultValue="Married" /> NRI &nbsp;&nbsp;
		
		<br/><br/>
		 <input type="checkbox" id="pep" name="pep" /> I hereby declare that i am not a politically exposed person
		<br/><br/>
		<input type="checkbox" id="pep" name="pep" /> I am not Tax Payer of any other country except India
      </div>
	  
			<br/><br/><br/><br/>
	  
					 <h3>Residential Status</h3>
        <input type="radio" name="resi" defaultValue="Single" /> Indian &nbsp;&nbsp;
        <input type="radio" name="resi" defaultValue="Married" /> NRI &nbsp;&nbsp;
		
		
		<h3>Proof of Address</h3>
			<input type="radio" name="address" defaultValue="dl" /> Driving License &nbsp;&nbsp;
			<input type="radio" name="address" defaultValue="passport" /> Passport &nbsp;&nbsp;	 <br/><br/> 
			<input type="radio" name="address" defaultValue="aadharcard" /> Aadhar Card &nbsp;&nbsp;	  
			<input type="radio" name="address" defaultValue="voterid" /> Voter Id &nbsp;&nbsp;	  <br/><br/>  
			<input type="radio" name="address" defaultValue="passbook" /> Passbook &nbsp;&nbsp;	  
			<input type="radio" name="address" defaultValue="utility" /> Utility Bill &nbsp;&nbsp;	  
			
			<br/><br/><br/><br/>
			
			
			
			<button onClick={this.saveDataiin} className="btn btn-success">
              Submit
            </button>
			
          </div>
        )}
      </div>
    );
  }
}
