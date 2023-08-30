import "../LoginPage.css";
import React, { useState } from "react";
function ItemMasterAddDetails() {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (username.trim() === "") {
      validationErrors.username = "Username is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Login successful");
    }
  };

  return (
    <div>
      <div className="adminLogin">
        <center>
          <h4 className="pagetitle">Item Master Data Details</h4>
        </center>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div
                className="card shadow p-4"
                style={{ backgroundColor: "#f8f9fa", borderRadius: "25px" }}
              >
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Item ID
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm ${
                          errors.username && "is-invalid"
                        }`}
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ border: "1px solid black" }}
                      />
                      {errors.username && (
                        <div className="invalid-feedback">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="itemDesc" className="form-label">
                        Item Description
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm ${
                          errors.username && "is-invalid"
                        }`}
                        id="empName"
                        style={{ border: "1px solid black" }}
                        // value={username}
                        // onChange={handleUsernameChange}
                      />
                      {/* {errors.username && <div className="invalid-feedback">{errors.username}</div>} */}
                    </div>
                    <div className="mb-3">
                      <label>
                        Issue Status
                        <select>
                          <option value="valid">Yes</option>
                          <option value="invalid">No</option>
                        </select>
                      </label>
                    </div>
                    <div className="mb-3">
                      <label>
                        Item Category
                        <select>
                          <option value="furniture">Furniture</option>
                          <option value="crockery">Crockery</option>
                          <option value="random">Random</option>
                        </select>
                      </label>
                    </div>
                    <div className="mb-3">
                      <label>
                        Item Make
                        <select>
                          <option value="wooden">Wooden</option>
                          <option value="glass">Glass</option>
                          <option value="plastic">Plastic</option>
                        </select>
                      </label>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="itemDesc" className="form-label">
                        Item Value
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm ${
                          errors.username && "is-invalid"
                        }`}
                        id="empName"
                        style={{ border: "1px solid black" }}
                      />

                    </div>
                    <div className="d-grid">
                      <center>
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ maxWidth: "200px" }}
                        >
                          Add Data
                        </button>
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemMasterAddDetails;
