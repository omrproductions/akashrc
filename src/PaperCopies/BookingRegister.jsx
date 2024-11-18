import React from 'react';

const BookingRegister = () => {
  return (
    <div>
      <div className="border border-black border-bold pt-7 pb-7 bg-gray-300">
        <div>
          <h1 className="text-center font-bold text-4xl">AKASH ROAD CARRIERS</h1>
        </div>
      </div>

      <div className="pt-3 pb-3 pl-3">
        <h1>
          BOOKING REGISTER NO.
          <input className="border-b-2 outline-none text-start ml-2" type="number" />
        </h1>
      </div>

      {/* Table */}
      <div className="pt-3 overflow-x-auto">
        <table className="min-w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black px-2 py-1 text-center">CN NO.</th>
              <th className="border border-black px-2 py-1 text-center">Date</th>
              <th className="border border-black px-2 py-1 text-center">No. of Pkgs</th>
              <th className="border border-black px-2 py-1 text-center">Destination</th>
              <th className="border border-black px-2 py-1 text-center" colSpan="4">Consignor</th>
              <th className="border border-black px-2 py-1 text-center" colSpan="4">Consignee</th>
              <th className="border border-black px-2 py-1 text-center">Weight</th>
              <th className="border border-black px-2 py-1 text-center">Bill Amount</th>
              <th className="border border-black px-2 py-1 text-center">To Pay TBB</th>
              <th className="border border-black px-2 py-1 text-center">Bill No.</th>
              <th className="border border-black px-2 py-1 text-center">M.R No</th>
              <th className="border border-black px-2 py-1 text-center">Broker Name</th>
              <th className="border border-black px-2 py-1 text-center">Challan No.</th>
              <th className="border border-black px-2 py-1 text-center">Lorry No.</th>
              <th className="border border-black px-2 py-1 text-center">Hire</th>
              <th className="border border-black px-2 py-1 text-center">Advance</th>
              <th className="border border-black px-2 py-1 text-center">Balance</th>
              <th className="border border-black px-2 py-1 text-center">Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="date" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1" colSpan="4">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1" colSpan="4">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
              <td className="border border-black px-2 py-1">
                <input type="text" className="w-full border-none outline-none text-center" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRegister;
