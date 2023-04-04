import React, { Component, ReactDOM } from 'react';
import Button from 'react-bootstrap/Button';

class Otpinput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value1, event) {

    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({ [value1]: event.target.value });
    }
    
  }

  handleSubmit(event) {
    const {otp1,otp2,otp3,otp4}=this.state;
    console.log(otp1,otp2,otp3,otp4);
  this.setState( { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true })
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if(elmnt.target.value !=='' || elmnt.key === "Backspace"){
       if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
        const next = elmnt.target.tabIndex;
        if (next < 5) {
          elmnt.target.form.elements[next].focus()
        }
    }
    }
   

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-box-container">

          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp1}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

        </div><br/>
        <span className='wrong-det'>Entered Wrong Details? <span>
          Re-enter</span></span><br/><br/>
        <Button className="primary" type="submit">
          Verify
        </Button>

        <p>Go back to Home</p>
      </form>
    );
  }
}


export default Otpinput;