import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import auth from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();
function App() {
  const logInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="vh-50" style={{ backgroundColor: "#e9ecef" }}>
        <div className="container py-5 ">
          <div className="row h-50 d-flex justify-content-center align-items-center ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body text-center">
                  <button onClick={logInWithGoogle} className="btn btn-lg  btn-primary mt-5" style={{ backgroundColor: "#dd4b39" }}
                   > Sign in with google</button>
                  <div><h4 className="mt-5" style={{ border: "1px solid #adb5bd", marginBottom: "-30px", borderRadius: "1rem", width: "30px", marginLeft: "200px" }}>or</h4></div>
                  <div className="form-outline mb-2">
                    <hr className="mb-5"></hr>
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg"/>
                  </div>
                  <div className="form-outline mb-2">
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                  </div>
                  <div className="form-check d-flex justify-content-start ">
                  </div>
                  <button className="btn btn-primary mt-5 btn-block" type="submit">Login</button>
                  <hr className="my-4"></hr>
                  <p>Don't have account? <span style={{ color: "#198754" }}>sign up here</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
