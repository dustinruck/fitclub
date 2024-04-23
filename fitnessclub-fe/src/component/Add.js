import axios from "axios";
import { useState } from "react";

function Add() {
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(0);

  console.log("the data is :", name, speciality, bio);

  const handelCancel = () => {
    setKey((prevKey) => prevKey + 1);
  };

  async function handelAdd(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/trainers",
        {
          name,
          speciality,
          bio,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("POST request successful!");
      setsuccessMsg("Trainer request  successful!");
      setLoading(false);
      console.log("Response:", response.data);
      console.log("the res is :", response);
    } catch (error) {
      console.error("Error making POST request:", error);
      if (error.response && error.response.status === 500) {
        setErrorMessage("Internal server error. Please try again later.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  }

  return (
    <div>
      <button
        className="btn btn-primary mt-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add trainer
      </button>
      <hr />
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Trainer
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" key={key}>
              <form key={key} className="form-group mb-3" onSubmit={handelAdd}>
                <input
                  className="form-control mb-3"
                  value={name}
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="form-control mb-3"
                  value={speciality}
                  placeholder="speciality"
                  onChange={(e) => setSpeciality(e.target.value)}
                />
                <input
                  className="form-control mb-3"
                  value={bio}
                  placeholder="bio"
                  onChange={(e) => setBio(e.target.value)}
                />
                <button
                  className="btn btn-primary mt-3"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
                {errorMessage && (
                  <p className="text-danger mt-2">{errorMessage}</p>
                )}
                {successMsg && (
                  <p className="text-success mt-2">{successMsg}</p>
                )}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handelCancel}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
