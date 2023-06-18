import React, { useState } from 'react';
function StaffRegister() {
  const [staff, setStaff] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    dob: '',
    pan: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    dob: '',
    pan: '',
    gender: '',
  });

  const handleChangeIdAction = (e) => {
    const newStaff = { ...staff, id: e.target.value };
    setStaff(newStaff);
  };

  const handleChangeNameAction = (e) => {
    const newStaff = { ...staff, name: e.target.value };
    setStaff(newStaff);
  };

  const handleChangeEmailAction = (e) => {
    const newStaff = { ...staff, email: e.target.value };
    setStaff(newStaff);
  };

  const handleChangePasswordAction = (e) => {
    const newStaff = { ...staff, password: e.target.value };
    setStaff(newStaff);
  };

  const handleChangeDobAction = (e) => {
    const newStaff = { ...staff, dob: e.target.value };
    setStaff(newStaff);
  };

  const handleChangePanAction = (e) => {
    const newStaff = { ...staff, pan: e.target.value };
    setStaff(newStaff);
  };

  const handleChangeGenderAction = (e) => {
    const newStaff = { ...staff, gender: e.target.value };
    setStaff(newStaff);
  };

  const addSubmitAction = async () => {
    if (validateForm()) {
      const url = `http://localhost:4000/addrecord?id=${staff.id}&name=${staff.name}&email=${staff.email}&password=${staff.password}&dob=${staff.dob}&pan=${staff.pan}&gender=${staff.gender}`;
      await fetch(url);

      const newStaff = {
        id: '',
        name: '',
        email: '',
        password: '',
        dob: '',
        pan: '',
        gender: '',
      };
      setStaff(newStaff);
      setErrors({
        id: '',
        name: '',
        email: '',
        password: '',
        dob: '',
        pan: '',
        gender: '',
      });
    }
  };

  const validateForm = () => {
    const idError = validateId(staff.id);
    const nameError = validateName(staff.name);
    const emailError = validateEmail(staff.email);
    const passwordError = validatePassword(staff.password);
    const dobError = validateDob(staff.dob);
    const panError = validatePan(staff.pan);
    const genderError = validateGender(staff.gender);

    setErrors({
      id: idError,
      name: nameError,
      email: emailError,
      password: passwordError,
      dob: dobError,
      pan: panError,
      gender: genderError,
    });

    return (
      idError === '' &&
      nameError === '' &&
      emailError === '' &&
      passwordError === '' &&
      dobError === '' &&
      panError === '' &&
      genderError === ''
    );
  };

  const validateId = (value) => {
    if (!value) {
      return 'ID is required';
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

  const validatePan = (value) => {
    if (!value) {
      return 'Pan Number is required';
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
      <div className="staffBody">
        <div className="innerBody">
          <h2 className="d-flex justify-content-center fw-bold">
            Staff Registration Form
          </h2>
          <br />
          <label>Staff ID</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your ID"
            value={staff.id}
            onChange={handleChangeIdAction}
          />
          {errors.id && <div className="error">{errors.id}</div>}
          <br />
          <label>Full Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full Name"
            value={staff.name}
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
            value={staff.email}
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
            value={staff.password}
            onChange={handleChangePasswordAction}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <br />
          <label>Birth Date</label>
          <br />
          <input
            type="date"
            className="form-control"
            value={staff.dob}
            onChange={handleChangeDobAction}
          />
          {errors.dob && <div className="error">{errors.dob}</div>}
          <br />
          <label>Pan Number</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Pan Number"
            value={staff.pan}
            onChange={handleChangePanAction}
          />
          {errors.pan && <div className="error">{errors.pan}</div>}
          <br />
          <label>Gender</label>
          <br />
          <select
            className="form-control"
            value={staff.gender}
            onChange={handleChangeGenderAction}
          >
            <option value="">Select your gender</option>
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

export default StaffRegister;
