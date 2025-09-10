import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';

function Seetreatment(props) {
  const [data, setData] = useState('Description');
  const [medicine, setMedicine] = useState({});

  const firebase = useFirebase();

  const seeTreatment = () => {
    firebase.readTreatmentdetailsofpaitent(
      medicine,
      setMedicine,
      data,
      setData,
      props.paitent,
      props.date
    );
  };

  const snoList = medicine ? Object.keys(medicine) : [];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Treatment Description */}
      <div className="card w-full max-w-3xl bg-base-100 shadow-md rounded-xl p-4 mb-6 border border-base-300">
        <h3 className="text-lg font-semibold text-base-content mb-2">Treatment Description</h3>
        <p className="text-gray-600 dark:text-gray-300">{data}</p>
      </div>

      {/* Medicine Table */}
      <div className="overflow-x-auto w-full max-w-3xl mb-6">
        <table className="table table-zebra w-full border border-base-300 dark:border-gray-700">
          <thead>
            <tr>
              <th className="bg-primary text-primary-content">S/No</th>
              <th className="bg-primary text-primary-content">Medicine</th>
              <th className="bg-primary text-primary-content">Quantity</th>
              <th className="bg-primary text-primary-content">Comment</th>
            </tr>
          </thead>
          <tbody>
            {snoList.length > 0 ? (
              snoList.map((sno, idx) => (
                <tr key={idx}>
                  <td>{sno}</td>
                  <td>{medicine[sno].madicine}</td>
                  <td>{medicine[sno].quantity}</td>
                  <td>{medicine[sno].comment}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 dark:text-gray-400 py-4">
                  No treatment data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* See Treatment Button */}
      <button
        className="btn btn-accent shadow-md hover:scale-105 transition-transform"
        onClick={seeTreatment}
      >
        See Treatment
      </button>
    </div>
  );
}

export default Seetreatment;
