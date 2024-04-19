import { TextField, Stack, Button } from '@mui/material';
import './App.css'
import { useState } from 'react';

function App() {
  const [interest,setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  
  const [isPrincipleInValid,setIsPrincipleInValid] = useState(false)
  const [isRateInValid,setIsRateInValid] = useState(false)
  const [isYearInValid,setIsYearInValid] = useState(false)
  // console.log(principle);

  const handleInputValidation = (tag) => {
    const { name, value } = tag
    // console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^\d*\.?\d+$/)){
      //valid
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInValid(false)
      }else if(name=="rate"){
        setRate(value)
        setIsRateInValid(false)
      }else{
        setYear(value)
        setIsYearInValid(false)
      }
    }else{
      //invalid
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInValid(true)
      }else if(name=="rate"){
        setRate(value)
        setIsRateInValid(true)
      }else{
        setYear(value)
        setIsYearInValid(true)
      }
    }
      
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("Calculate button clicked");
    if(principle && rate && year){
    setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely!!")
    }
  }
  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleInValid(false)
    setIsRateInValid(false)
    setIsYearInValid(false)
  }


  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light' >
          <h1> ₹ {interest}</h1>
          <p className='fw-bloder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-3'>

            <TextField value={principle || "" } name='principle' onChange={e => handleInputValidation(e.target)} className='w-100' id="Principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          { isPrincipleInValid &&
          <div className='mb-3 text-danger fw- bolder'>Invalid Principle Amount!!
           </div>
             }
          <div className='mb-3'>
            <TextField value={rate || "" } name='rate' onChange={e => handleInputValidation(e.target)} className='w-100' id="rate" label="Rate of interest (p.a) %" variant="outlined" />
          </div>
          { isRateInValid &&
          <div className='mb-3 text-danger fw- bolder'>Invalid Rate of Interest!!
           </div>
             }
          <div className='mb-3'>
            <TextField value={year  || "" } name='year' onChange={e => handleInputValidation(e.target)} className='w-100' id="year" label="Time Period (Yr)" variant="outlined" />
          </div>
          { isYearInValid &&
          <div className='mb-3 text-danger fw- bolder'>Invalid Time Period!!
           </div>
             }
          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleInValid || isRateInValid || isYearInValid} type='submit' onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>

            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>

          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
