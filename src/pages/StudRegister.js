import React, { useState } from 'react';

function StudRegister() 
  {
  const [student, setStud] = useState({
    prn: '',
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });
  const [errors, setErrors] = useState({
    prn: '',
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
  });
  const handleChangeIdAction = (e) => {
    const newStud = { ...student, prn: e.target.value };
    setStud(newStud);
  };

  const handleChangeNameAction = (e) => {
    const newStud = { ...student, name: e.target.value };
    setStud(newStud);
  };

  const handleChangeEmailAction = (e) => {
    const newStud = { ...student, email: e.target.value };
    setStud(newStud);
  };

  const handleChangePasswordAction = (e) => {
    const newStud = { ...student, password: e.target.value };
    setStud(newStud);
  };

  const handleChangeDobAction = (e) => {
    const newStud = { ...student, dob: e.target.value };
    setStud(newStud);
  };

  const handleChangeGenderAction = (e) => {
    const newStud = { ...student, gender: e.target.value };
    setStud(newStud);
  };
  
  const addSubmitAction = async () => {
    if (validateForm()) {
    const url = `http://localhost:4000/addrecord?id=${student.prn}&name=${student.name}&email=${student.email}&password=${student.password}&dob=${student.dob}&gender=${student.gender}`;
    await fetch(url);

    const newStud = {
      prn: '',
      name: '',
      email: '',
      password: '',
      dob: '',
      gender: '',
    };
    setStud(newStud);
    setErrors({
        prn: '',
      name: '',
      email: '',
      password: '',
      dob: '',
      gender: '',
      });
    }
  };
  const validateForm = () => {
    const prnError = validatePrn(student.prn);
    const nameError = validateName(student.name);
    const emailError = validateEmail(student.email);
    const passwordError = validatePassword(student.password);
    const dobError = validateDob(student.dob);
    const genderError = validateGender(student.gender);

    setErrors({
      prn: prnError,
      name: nameError,
      email: emailError,
      password: passwordError,
      dob: dobError,
      gender: genderError,
    });

    return (
      prnError === '' &&
      nameError === '' &&
      emailError === '' &&
      passwordError === '' &&
      dobError === '' &&
      genderError === ''
    );
  };

  const validatePrn = (value) => {
    if (!value) {
      return 'PRN is required';
    }
    return '';
  };

  const validateName = (value) => {
    if (!value) {
      return 'Name is required';
    }
    return '';
  };

  const validateEmail = (value) => {
    if (!value) {
      return 'Email is required';
    }
    return '';
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Password is required';
    }
    if (value.length < 8 || value.length > 20) {
      return 'Password must be between 8 and 20 characters long';
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)) {
      return 'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';
    }
    return '';
  };

  const validateDob = (value) => {
    if (!value) {
      return 'Date of Birth is required';
    }
    return '';
  };


  const validateGender = (value) => {
    if (!value) {
      return 'Gender is required';
    }
    return '';
  };
  
  return (
    <>
      <div className="studentBody">
        <div className="innerBody">
          <h2 className="d-flex justify-content-center fw-bold">
            Student Registration Form
          </h2>
          <br />
          <label>Student PRN</label>
          <br />

          <input
            type="text"
            className="form-control"
            placeholder="Enter your PRN"
            value={student.prn}
            onChange={handleChangeIdAction}
          />
          {errors.prn && <div className="error">{errors.prn}</div>}
          <br />
          <label>Full Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full Name"
            value={student.name}
            onChange={handleChangeNameAction}
          />
            {errors.name && <div className="error">{errors.name}</div>}
          <br />
          <label>Email Address</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address"
            value={student.email}
            onChange={handleChangeEmailAction}
          />
           {errors.email && <div className="error">{errors.email}</div>}
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={student.password}
            onChange={handleChangePasswordAction}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <br />
          <label>Birth Date</label>
          <br />
          <input
            type="date"
            className="form-control"
            value={student.dob}
            onChange={handleChangeDobAction}
          />
            {errors.dob && <div className="error">{errors.dob}</div>}
          <br />
          <label>Gender</label>
          <br />
          <select
            className="form-select"
            value={student.gender}
            onChange={handleChangeGenderAction}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <div className="error">{errors.gender}</div>}
          <br />
          <input
            type="button"
            className="form-control bg-success text-light fs-5 mt-3"
            style={{ height: '45px' }}
            value="Submit"
            onClick={addSubmitAction}
          />
        </div>
      </div>
    </>
  );
}

export default StudRegister;
