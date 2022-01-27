import {
 MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
const axios = require("axios").default;
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const AddHero = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios('http://localhost:3000/api/hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(form)
      })
      router.push('/');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <h1 className="display-3">Add New Hero Identity</h1>
      <form onSubmit={handleForm}>    
        <MDBInput
          onChange={handleChange}
          label='SuperHero'
          type='text'
          name="superHero"
        />
        <MDBInput
          className="my-3"
          onChange={handleChange}
          label='RealName'
          type='text'
          name="realName"
        />
        <MDBBtn type="submit">Add New Hero</MDBBtn>
      </form>
    </div>
  );
};
export default AddHero;
