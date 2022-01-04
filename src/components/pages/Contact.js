// ////////////////////////////////////////  notes  ///////////////////////////
// // need to make a form with 3 fields to type in for a name, an email address, and a message with a submit button

// // needs to have email vaildation

// // needs to have No empty field modal/validation/------
// // WHEN I move my cursor out of one of the form fields without entering text
// // THEN I receive a notification that this field is required

// // - Cursor Validation
// // 	-modal (if field is empty => notify : field is required
// ////////////////////////////////////  notes  ///////////////////////////////////

// import React, { useState } from "react";

// export default function Form() {
//   //////////////////////////////////  code from class  ////////////////////////////
//   //   // Here we set two state variables for firstName and lastName using `useState`
//   //   const [firstName, setFirstName] = useState("");
//   //   const [lastName, setLastName] = useState("");

//   //   const handleInputChange = (e) => {
//   //     // Getting the value and name of the input which triggered the change
//   //     const { name, value } = e.target;

//   //     // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
//   //     return name === "firstName" ? setFirstName(value) : setLastName(value);
//   //   };

//   //   const handleFormSubmit = (e) => {
//   //     // Preventing the default behavior of the form submit (which is to refresh the page)
//   //     e.preventDefault();

//   //     // Alert the user their first and last name, clear the inputs
//   //     alert(`Hello ${firstName} ${lastName}`);
//   //     setFirstName("");
//   //     setLastName("");
//   //   };
//   //////////////////////////////////  code from class  ////////////////////////////
import React from "react";

export default function Contact() {
  return (
    <div>
      <form className="form">
        <input
          //   value={firstName}
          name="firstName"
          //   onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          //   value={lastName}
          name="lastName"
          //   onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          //   value={firstName}
          name="firstName"
          //   onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <button
          type="button"
          //  onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
