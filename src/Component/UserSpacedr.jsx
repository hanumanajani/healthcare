import React from 'react';
import { useGlobal } from '../context/Global';

function UserSpace() {
  const useglobal = useGlobal();

    const paitentformdr = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(!useglobal.check6)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)



    }
    const HistoryofP = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(!useglobal.check8)
        useglobal.setcheck9(false)
    }
    const treatment = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(!useglobal.check9)
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-base-200 transition-colors duration-500">
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl border border-base-300 p-6">
        <h2 className="text-2xl font-semibold text-center text-base-content mb-6">
          User Space
        </h2>

        <div className="flex flex-col gap-4">
          <button
            className="btn btn-primary w-full shadow-md hover:scale-105 transition-transform"
            onClick={() => { treatment() }}
          >
            Treatment Details
          </button>
          <button
            className="btn btn-secondary w-full shadow-md hover:scale-105 transition-transform"
            onClick={() => { HistoryofP() }}
          >
            History of Patient
          </button>
          <button
            className="btn btn-accent w-full shadow-md hover:scale-105 transition-transform"
            onClick={() => { paitentformdr() }}
          >
            New Patient Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSpace;
