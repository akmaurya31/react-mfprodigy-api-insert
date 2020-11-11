import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import Axios from "axios";
export default class PersonalInfo extends Component {
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
	
	let token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzhjMDczYWYyNmVhMjhjOTNhMzk2MWYwMTI0Y2VjYjJhYmNlMDdlZGVjZDM0MjU1YmJmOGZkMGE1NWM3MWM1M2MzZmNhOTk1OTMyNGJmNjIiLCJpYXQiOjE1OTczMDk5MzMsIm5iZiI6MTU5NzMwOTkzMywiZXhwIjoxNjI4ODQ1OTMzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.PRMvUXUPWS4ETcDJO4RBC43Ssu8lP7TMe8G7lS_yy3HHJ7sNI9sa3gWzfA80zGzZ6cMnIHbDglWwkDnRTxTN2cMcEjfoO0QMRJXXU25PxttM6cDZb6s5rtaqBr6U2LAIlaLD8ivA4gvRRkQimjR4OOiPvGipBE0B78wv-ZF8IQSUzEvEGaZg4sF1CrOehYCjrXzU8CDgmRnScKEn316wQfcujT2Ihok9yncPX2Yo5dNmFVid4AMdUcCcJ7tp6mPmXYSi1EMYpRJIk_A_oTJ1WBdfk9zpyaA_RmDrFvzsJV1PVGoOe_ZQsj4ir6LzC0fxn6YJxfWp8BL1EsU5mMECjFPF5h_Jc_87UspSd5hAxcny1gj_ofJ1VlFKPZ5HvXxyxAkf9orqd79FGgWRzINLr6uXLHRpDP7DJp-okpHn8cPOk0yyxEiosNiSKDLv4XN7h0VrXk20_DCXG4co2Dyg2BSyLRUUzB-x7cN3GUNBsNeruO__FjimkYTHRobDVOq4p3ePm0Bws1P2ihRo0CTIjGWrqpQd-gIuahSQ3cQSLBBpw6dhMIIlyQiK1CNIE3yoNwduWt6rglTN5h7wc7GrbTzHFn73vfM1zHm_zz813b8DoZyuje_F03G_lK5abF7hY51tnTFbdOa7CRqTrm_OYHqtu-GUeLu1cQLBp7gFBws';

		 const config4 = {
   headers: { 'Access-Control-Allow-Origin' : '*', Authorization: `Bearer ${token}` }
  }
		 
		 
console.log('Com- Line 41 v1 peinfo',config4 )
		
 Axios.post("https://mfprodigy.ga/api/persional_details/user_details", {
      dob: '1995-03-03',
      email: 'agamsahu10@gmail.com',
      occupation: 'businesss',
      income_range:'1',
	  resident_status:'1',
	  pan_card:'ABC21323',
	  birth_place:'lucknow',
	  father_name:'ankesh',
	  mother_name:'anjali'
     
    }, config4 ).then(() => {
      
        console.log(' line 55 com-success data inserted')
   
  });
  
  console.log('Com- Line 59  v1 peinfo')
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
			

            
			
			
	  
			<br/><br/><br/><br/>
	  
				
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
