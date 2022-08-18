import React from 'react';
import './App.css';
import Render from './components/render';
import mockData from './components/mockData';

function App() {

  
  
  return (
    <div className="App">
      <h1>Loan Prediction Form</h1>
      <form action="">
        <label htmlFor="ApplicantIncome">Applicant Income
        <input type="number"  className="form-input"/>  
        </label>

        <label htmlFor="CoapplicantIncome">Co-Applicant Income
        <input type="number"  className="form-input"/>  
        </label>

        <label htmlFor="LoanAmount">Loan Amount
        <input type="number"  className="form-input"/>  
        </label>
        
        <label htmlFor="LoanAmountTerm">Loan Amount Term
        <input type="number"  className="form-input"/>  
        </label>

        <label>Credit History
        <select  className="form-input">
          <option value="Yes">Yes</option>
          <option value="No">No</option>  
        </select> 
        </label>

        <label>Self-employed
        <select  className="form-input">
          <option value="Yes">Yes</option>
          <option value="No">No</option>  
        </select> 
        </label>

        <label>Property Area
        <select  className="form-input">
          <option value="urban">Urban</option>
          <option value="rural">Rural</option>  
          <option value="semi-urban">Semi-Urban</option>
        </select> 
        </label>

        <label>Married
        <select  className="form-input">
          <option value="Married">Yes</option>
          <option value="Not Married">No</option>  
        </select> 
        </label>

        <label>Education
        <select  className="form-input">
          <option value="graduate">Graduate</option>
          <option value="Not graduate">Not Graduate</option>  
        </select> 
        </label>

        <label>Gender
        <select className="form-input">
          <option value="male">Male</option>
          <option value="female">Female</option>  
        </select> 
        </label>

        <button type="submit">Predict</button>
      </form>


     <Render data-testId="list" list={mockData}/>
        
    </div>
  );
}

export default App;
