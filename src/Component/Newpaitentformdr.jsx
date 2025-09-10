import React, { useState } from 'react';
import Medicine from './Madicine';
import Seetreatment from './Seetreatment';
import { useFirebase } from '../context/Firebase';

function Newpaitentformdr() {
  const [date, setDate] = useState('');
  const [paitent, setPaitent] = useState('');
  const [discp, setDiscp] = useState('');
  const [addTreat, setAddTreat] = useState(false);

  const firebase = useFirebase();

  const addTreatment = () => {
    if (!paitent || !date || !discp) {
      alert('Please fill in all fields');
      return;
    }
    firebase.paitenttreatment(paitent, date, discp);
    setAddTreat(true);
    alert('Treatment added successfully');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-base-200 p-6 space-y-8">
      
      {/* Patient Form Card */}
      <div className="card w-full max-w-3xl bg-base-100 shadow-lg rounded-2xl p-6 border border-base-300 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-center text-base-content dark:text-gray-200">
          Patient Treatment Form
        </h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="label">
              <span className="label-text font-medium">Patient Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter patient username"
              className="input input-bordered w-full"
              value={paitent}
              onChange={(e) => setPaitent(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Date (DDMMYYYY)</span>
            </label>
            <input
              type="text"
              placeholder="Enter date"
              className="input input-bordered w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              placeholder="Enter description of diseases"
              className="textarea textarea-bordered w-full"
              value={discp}
              onChange={(e) => setDiscp(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-full mt-4"
            onClick={addTreatment}
          >
            Add Treatment
          </button>
        </div>
      </div>

      {/* Medicine Section */}
      {addTreat && (
        <div className="card w-full max-w-3xl bg-base-100 shadow-lg rounded-2xl border border-base-300 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4 text-base-content dark:text-gray-200">
            Medicine
          </h2>
          <Medicine paitentname={paitent} date={date} />
        </div>
      )}

      {/* Treatment Overview Section */}
      {addTreat && (
        <div className="card w-full max-w-3xl bg-base-100 shadow-lg rounded-2xl border border-base-300 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4 text-base-content dark:text-gray-200">
            Treatment Overview
          </h2>
          <Seetreatment paitent={paitent} date={date} />
        </div>
      )}
    </div>
  );
}

export default Newpaitentformdr;
