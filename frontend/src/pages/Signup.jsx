import { useState } from 'react'
import axios from "axios";
import validEmail from '../regex/EmailRegex';
import validPassword from '../regex/PasswordRegex';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);

  const handleEmail = () => {
    if(!validEmail.test(formData.email)) {
      console.log("Email not validated")
      setErrEmail(true);
      return;
    }
    else{
      setErrEmail(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

    if([e.target.name] == 'email') {
      handleEmail();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(formData.name.trim() == '' || formData.email.trim() == '' || formData.password.trim() == "") {
      console.log("Name empty");
      return;
    }

    if(formData.password.trim().length <= 8) {
      console.log('less');
      return;
    }
 
    // Checking whether email passed the regex test or not
    if(!validEmail.test(formData.email)) {
      console.log("Email not validated")
      setErrEmail(true);
      return;
    }
    else{
      setErrEmail(false);
    }



    console.log('Form submitted:', formData)
    // Later: send this to your backend
    axios.post('http://localhost:8000/api/auth/signup', formData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        {errEmail && <span className="text-sm text-red-700">Email is incorrect</span>}
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
