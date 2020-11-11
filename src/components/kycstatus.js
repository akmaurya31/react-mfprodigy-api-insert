import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Kycstatus extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangekstatus = this.onChangekstatus.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
	this.onChangePannum = this.onChangePannum.bind(this);
	this.panSubmit = this.panSubmit.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      submitted: false,
	  kstatus:"",
	  pannum:"",
	  pandata:""
	  
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  
   onChangekstatus(e) {
    this.setState({
      rvalue: e.target.value
    });

  }
  
  
   onChangePannum(e) {
    this.setState({
      pannum: e.target.value
    });
	console.log(this.state.pannum);
  }
  
  
   panSubmit() {
	   
	  // console.log(this.state.pannum);
	  
	 
	 
	  
   console.log(this.state.pannum,'jjjjjjjjjjjjjj')
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
	  
	  <h2>KYC Status:</h2>
	  <h3>Are you KYC compiled?</h3>
	   <div>
        <input type="radio" id="yes" name="kstatus" defaultValue="yes" onClick={this.onChangekstatus} />
        <label htmlFor="yes">Yes</label>&nbsp;
        <input type="radio" id="no" name="kstatus" defaultValue="no" onClick={this.onChangekstatus}/>
        <label htmlFor="no">No/ Not sure</label>
        
      </div>
	  
	  {this.state.rvalue==='yes'? (
	  <div> 
			 
			<label htmlFor="pan">Please provide your Pan</label>
			<input type="text" id="pantxt" name="pantxt" placeholder="PAN(DESK12345)" 
			value={this.state.pannum}    onChange={this.onChangePannum} /><br /><br />
			<input type="button" defaultValue="Submit" onClick={this.panSubmit} />
			 
	  </div>
	  
	   ): (
          <div></div> )}
		  
		  
	  { /*console.log("agam...", this.state.rvalue) */}
      </div>
    );
  }
}
