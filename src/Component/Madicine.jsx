import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';

function Medicine({ paitentname, date }) {
  const [sno, setSno] = useState(1);
  const [medicine, setMedicine] = useState('');
  const [quantity, setQuantity] = useState('');
  const [comment, setComment] = useState('');
  const [medicineList, setMedicineList] = useState([]);

  const firebase = useFirebase();

  const addMedicine = () => {
    if (!medicine || !quantity) {
      alert('Please enter medicine and quantity');
      return;
    }

    const newEntry = { sno, medicine, quantity, comment };
    setMedicineList([...medicineList, newEntry]);

    firebase.paitenttreatmadicine(paitentname, date, sno, medicine, quantity, comment);

    setSno(sno + 1);
    setMedicine('');
    setQuantity('');
    setComment('');

    // alert('Medicine added successfully');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 text-center text-base-content dark:text-gray-200">
        Add Medicines
      </h2>

      {/* Input Row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end mb-6">
        <div>
          <label className="label">
            <span className="label-text">S/No</span>
          </label>
          <input
            type="text"
            value={sno}
            disabled
            className="input input-bordered w-full cursor-not-allowed bg-gray-100 dark:bg-gray-800"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Medicine</span>
          </label>
          <input
            type="text"
            placeholder="Medicine"
            className="input input-bordered w-full"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Quantity"
            className="input input-bordered w-full"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Comment</span>
          </label>
          <input
            type="text"
            placeholder="Comment"
            className="input input-bordered w-full"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div>
          <button
            className="btn btn-primary w-full"
            onClick={addMedicine}
          >
            Add
          </button>
        </div>
      </div>

      {/* Medicines Table */}
      {medicineList.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border border-base-300 dark:border-gray-700">
            <thead>
              <tr>
                <th>S/No</th>
                <th>Medicine</th>
                <th>Quantity</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {medicineList.map((item) => (
                <tr key={item.sno}>
                  <td>{item.sno}</td>
                  <td>{item.medicine}</td>
                  <td>{item.quantity}</td>
                  <td>{item.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Medicine;
