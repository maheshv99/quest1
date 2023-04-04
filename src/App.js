import "./style.css"
import './App.css';
import Otpinput from "./otpinput";
import img from "./images/image 4.png";

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
       {/* left side box */}
       <div className='left-side-box'>
       <span className='logo'>LOGO</span><br/>
       <span className='verification'>Verification</span>
       <br/>

       {/* OTP Box and text box */}
       <div className='otp' >
        <div className='otp-header'>
           <span>SMS OTP</span>
         <span className='otp-hesd-text'>Sent on: 77777-77777</span>
        </div>
        

      <div className='input-box-container'>
       <Otpinput/>
      </div>
 </div>
      

       </div>


       <div className="hide">
        <div>
           <img src={img} alt="side image"/>
        </div>
       
       </div>
      </header>
    </div>
  );
}

export default App;
