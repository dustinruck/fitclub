import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Axios } from "axios";
import axios from "axios";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";


function DataFetcher() {
  const [data, setdata] = useState([]);
  const [triger, setTriger] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMsg, setsuccessMsg] = useState("");

  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [bio, setBio] = useState("");

  const [picture, setPicture] = useState([]);

  async function getRandomPersonImage() {
    try {
      console.log('response  is: ');
      const response = await fetch('https://randomuser.me/api/');
      const person = await response.json();
      //setPicture(data.results[0].picture); 
      
      return person;
    } catch (error) {
      console.error('Error fetching random person image:', error);
      return null;
    }
  }
  //console.log('respo is: ', response);
  console.log('person  is: ', getRandomPersonImage().results[0]);

  useEffect(() => {
    getRandomPersonImage().then(picture => {
      setPicture(picture.picture);
    });
  }, []);

 
  useEffect(() => {
    fetch("http://localhost:8080/trainers")
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error("error fetching data:", error));
  }, [triger]);

 

  console.log('picture is: ', picture);

  const handelRefresh = () => {
    setTriger((t) => t + 1);
  };

  const handelDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8080/trainers/${id}`);
      setLoading(false);
      setsuccessMsg("Delete request successful!");
      console.log("Delete request successful!");
      setTriger((t) => t + 1);
    } catch (error) {
      console.error("Error deleting data:", error);
      setErrorMessage("Error deleting data:", error);
    }
  };

  const handelEditData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/trainers/${id}`);
      setName(response.data.name);
      setSpeciality(response.data.speciality);
      setBio(response.data.bio);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handelEdit = async (id) => {
    setLoading(true);
    try {
      const response = await axios.put(`http://localhost:8080/trainers/${id}`, {
        name,
        speciality,
        bio,
      });

      setsuccessMsg("Trainer edit request  successful!");
      setTriger((t) => t + 1);
      setLoading(false);
    } catch (error) {
      console.error("Error making POST request:", error);
      if (error.response && error.response.status === 500) {
        setErrorMessage("Internal server error. Please try again later.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
   


  };

  return (
    <div>
      <button className="btn btn-info" onClick={handelRefresh}>
        refresh the page
      </button>
      {successMsg && <p className="text-success mt-2">{successMsg}</p>}
      {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}

      <div className="row">
        {data.map((dt, index) => {
          return (
            <div className="col-sm-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src= "https://media.istockphoto.com/id/1339089882/video/businessman-thinking-and-looking-for-answer-shrugs-his-shoulders-uncertainty-question-no.jpg?s=640x640&k=20&c=K0andV7egGGYxsw0sFUn6FwwkdPBHLQOIP9AOkON5dk="
                  
                  alt={dt.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{dt.name}</h5>
                  <p className="card-text">{dt.bio}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                      <a
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        onClick={() => handelEditData(dt.id)}
                      >
                        Edit
                      </a>
                      <a
                        className="btn btn-danger"
                        disabled={loading}
                        onClick={() => handelDelete(dt.id)}
                      >
                        {loading ? "Deleting .." : "Delete"}
                      </a>
                    </div>
              </div>
            </div>
          );
        })}
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">name</th>
            <th scope="col">speciality</th>
            <th scope="col">bio</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, index) => {
            return (
              <tr key={dt.id}>
                <td scope="row">{dt.id}</td>
                <td>{dt.name} </td>
                <td>{dt.speciality} </td>
                <td>{dt.bio} </td>
                <td>
                  <a
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => handelEditData(dt.id)}
                  >
                    Edit
                  </a>
                </td>
                <td>
                  <a
                    className="btn btn-danger"
                    disabled={loading}
                    onClick={() => handelDelete(dt.id)}
                  >
                    {loading ? "Deleting .." : "Delete"}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="editModal"
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
                Edit Trainer
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="form-group mb-3"
                onSubmit={() => handelEdit(dt.id)}
              >
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
                  type="text"
                  value={bio}
                  placeholder="bio"
                  onChange={(e) => setBio(e.target.value)}
                />
                <button className="btn btn-success mt-3" type="submit">
                  {loading ? "Editting..." : "Edit"}
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

export default DataFetcher;
