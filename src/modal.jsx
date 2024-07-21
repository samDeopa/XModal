import { useState } from "react";
import "./App.css";

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
    phone: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = (e) => {
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, dob, phone } = formData;
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
    } else if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(dob).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      console.log(`Submitted Data:
        Username: ${username},
        Email: ${email},
        Date of Birth: ${dob},
        Phone: ${phone}`);

      setFormData({
        username: "",
        email: "",
        dob: "",
        phone: "",
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="app">
      <h2>User Details Modal</h2>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h3>Fill Details</h3>
              <div>
                <p>Username:</p>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p>Email:</p>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p>Date of Birth:</p>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <p>Phone Number:</p>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
