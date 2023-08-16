import "../LoginPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    clearError("username");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearError("password");
  };

  const clearError = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (username.trim() === "") {
      validationErrors.username = "Username is required";
    }

    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Check if username and password match predefined values
      const predefinedUsers = {
        // Add your predefined usernames and passwords here
        "kabilan@gmail.com": "kabilan",
        "kabilan@wellsfargo.com": "wellsfargo",
        "yashaswini@gmail.com":"WellsFargo"
      };

      if (predefinedUsers[username] === password) {
        navigate("/adashboard"); // Redirect using navigate function
      } else {
        setErrors({ login: "Invalid username or password" });
      }
    }
  };

  return (
    <div>
      <div className="adminLogin">
        <center>
          <h4 className="pagetitle">Admin Login</h4>
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
                        Admin Username
                      </label>
                      <input
                        type="text"
                        className={`form-control form-control-sm ${
                          errors.username && "is-invalid"
                        }`}
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      {errors.username && (
                        <div className="invalid-feedback">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Admin Password
                      </label>
                      <input
                        type="password"
                        className={`form-control form-control-sm ${
                          errors.password && "is-invalid"
                        }`}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    {errors.login && <span>{errors.login}</span>}

                    <div className="d-grid">
                      <center>
                        {" "}
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ maxWidth: "120px" }}
                        >
                          Login
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

export default LoginPage;
