import React, { useState } from "react";
import './App.css';  // Mengimpor file CSS utama
import 'bootstrap/dist/css/bootstrap.min.css';
import Halaman2 from './Halaman2';  // Mengimpor Halaman2

function App() {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(2); // Pindah ke halaman 2
  };

  return (
    <div className="container mt-5">
      {/* Halaman 1 */}
      {page === 1 && (
        <div className={`page page1 ${page === 1 ? 'show' : ''}`}>
          <h1 className="text-center">
            Selamat Ulang Tahun 
            <br />
            Alma Naila Shafa Nasywa!
          </h1>
          <p className="text-center">Semoga byby aku suka ya sama kadonya☺️</p>

          {/* Card Section */}
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Birthday Gift 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 1</h5>
                  <p className="card-text">Kamu pasti suka dengan hadiah pertama ini!</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Birthday Gift 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 2</h5>
                  <p className="card-text">Hadiah ini penuh dengan cinta untukmu!</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="Birthday Gift 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Hadiah 3</h5>
                  <p className="card-text">Hadiah ketiga untukmu yang spesial!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button Next */}
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}

      {/* Halaman 2 */}
      {page === 2 && <Halaman2 />}
    </div>
  );
}

export default App;