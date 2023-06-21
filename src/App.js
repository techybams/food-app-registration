import { useState } from 'react';
import './App.css';


function App() {

  // state value
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
    country: "",
    gender:"",
    agree: false
})
  // onchange function
  const onchange = (e) =>{
    const {value, type, checked, name} = e.target
    setForm((state) => ({
      ...state,
      [name]: type === 'checkbox' ? checked : value 
    }))
  }

  const subMit = (e) => {
    e.preventDefault();
    console.log('form: ', form)
  }

  return (
    <div className="wrapper text-center">
        <div className='formImg'>

        </div>
        <form>
          <div className='inputField'>
            <h1>Register to order</h1>
            <div class="mb-3">
              <input type="name" onChange={onchange} name='name' value={form.name} class="form-control" id="name" placeholder=" Your name"/>
            </div>
            <div class="mb-3">
              <input type="email" onChange={onchange} name='email' value={form.email} class="form-control" id="email" placeholder="Email@example.com"/>
            </div>
            <div class="mb-3">
              <input type="text" onChange={onchange} name='description' value={form.description} class="form-control" id="description" placeholder="Description"/>
            </div>
            <select class="form-select mb-3" onChange={onchange} name='country' value={form.country} aria-label="Default select example">
              <option selected>Select Country</option>
              <option value="usa">USA</option>
              <option value="canada">canada</option>
              <option value="uk">UK</option>
              <option value="nigeria">UK</option>
            </select>
            
            <div className='mb-3'>
            <div class="form-check">
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="gender">Gender:</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name='gender' value='male' onChange={onchange} type="radio" id="male" checked= {form.gender === "male"}/>
                  <label class="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name='gender' value= 'female' onChange={onchange} type="radio" id="female" checked= {form.gender === "female"}/>
                  <label class="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" name='gender' value= 'other' onChange={onchange} type="radio" id="other" checked= {form.gender === "other"}/>
                  <label class="form-check-label" for="other">
                    Other
                  </label>
                </div>
                
            </div>
            <div class="mb-3">
                  <label class="form-check-label" for="agree">
                    Agree
                  </label>
                  <input class="form-check-input mx-5" type="checkbox" id="agree"/>
                </div>
            </div>
            
          </div>
          <button onClick={subMit} className='btn btn-lg btn-primary'>Submit</button>
          
        </form>
    </div>
  );
}

export default App;
