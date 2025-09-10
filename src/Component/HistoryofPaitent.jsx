import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import Seetreatment from './Seetreatment';

function HistoryofPaitent() {
  const [history, setHistory] = useState({});
  const [pname, setPname] = useState('');
  const firebase = useFirebase();

  const fetchHistory = () => {
    if (pname.trim() === '') return alert('Please enter a patient username');
    firebase.readpaitenthistory(pname, setHistory);
  };

  const datelist = history ? Object.keys(history).filter((key) => key.startsWith('')) : [];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-base-200 p-6 space-y-6">
      {/* Patient Username Input */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl">
        <input
          type="text"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
          placeholder="Enter patient username"
          className="input input-bordered w-full sm:w-2/3"
        />
        <button
          className="btn btn-primary w-full sm:w-1/3"
          onClick={fetchHistory}
        >
          Fetch History
        </button>
      </div>

      {/* Patient History */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {datelist.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
            No history found.
          </div>
        ) : (
          datelist.map((date, idx) => (
            <div key={idx} className="card bg-base-100 shadow-md rounded-xl border border-base-300 dark:border-gray-700 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-lg text-base-content dark:text-gray-200">
                  📅 {date}
                </span>
              </div>
              <Seetreatment paitent={pname} date={date} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HistoryofPaitent;
