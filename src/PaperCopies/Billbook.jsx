import React from 'react';
import Header from '../components/Header';

function BillBook() {

  const table_columns = ["CN Number", "Invoice No.", "From", "To", "Weight", "Charged", "Rate", "Freight", "ST", "Charges", "Others", "Amount"]

  const table_rows = [
    {
      "CN_Number": "12345",
      "Invoice_No": "INV001",
      "From": "Pune",
      "To": "Mumbai",
      "Weight": "100kg",
      "Charged": "$50",
      "Rate": "$500",
      "Freight": "$30",
      "ST": "$10",
      "Charges": "$5",
      "Others": "$10",
      "Amount": "$555"
    },
    {
      "CN_Number": "67890",
      "Invoice_No": "INV002",
      "From": "Delhi",
      "To": "Bangalore",
      "Weight": "200kg",
      "Charged": "$40",
      "Rate": "$800",
      "Freight": "$25",
      "ST": "$15",
      "Charges": "$5",
      "Others": "$12",
      "Amount": "$8577"
    },

  ]

  return (
    <div className='outline bg-orange-500' >
    
       
      <Header />
   {/* name of delear & billNo */}
   <div className=' grid grid-cols-4'>
          {/* NAME OF DEALER */}
          <div className='col-span-3 border-r-2 border-black'>
            <div className='flex '>
              <h1>M/s:</h1>
              <div className='border-b-2 w-full border-black'></div>
            </div>
            <div className='border-b-2 mt-5 border-black'></div>
          </div>


          {/* Bill no */}
          <div className=' border-r-2 border-black '>
            <div className='flex  '>
              <h1>Bill No.:</h1>
              <div className='border-b-2 w-[60%] border-black'></div>
            </div>

            {/* Date */}
            <div className='flex  '>
              <h1>Date:</h1>
              <div className='border-b-2 w-[70%] border-black'></div>
            </div>
          </div>

        </div>
        {/* service charce */}

        <div className='flex text-nowrap justify-between text-xs border border-black'>
          <h1>Being the Service Charges as per the following Details :</h1>
          <h1>(Interest @ 24% per annum will be charged on all out standing Bills)</h1>
        </div>

        {/* table */}
        <table className='p-4 '>
          <thead className='grid grid-cols-12 border border-black '>
            {
              table_columns.map(column => (
                <th className='text-xs'>{column}</th>
              ))
            }
          </thead>
          <tbody >
            {
              table_rows.map(obj => (
                <tr className='grid grid-cols-12'>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                  <td>{obj.Amount}</td>
                </tr>
              ))
            }
          </tbody>


          {/* Rupees & total */}
          <div className='border border-black flex justify-between'>
            <p>Rupees</p>
            <div className='grid grid-cols-3'>
              <p>TOTAL:</p>
              <p className='col-span-2'>$900000</p>
            </div>

          </div>
        </table>

        {/* footer */}
        <footer className=' grid grid-cols-3 outline'>
          <div className='flex flex-col space-y-4  border-r-2 border-black '>
            <   p>PAN: AKMPM6807F</p>
            <p>GST NO: 27AKMPM6807F2ZW</p>

            {/* Radio Buttons */}
            <div className='space-x-4  '>
              <input
                id="link-radio-1"
                type="radio"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="link-radio-1" class="text-sm font-medium text-black-900 dark:text-gray-300">GST Payable by Consignor</label>

              <input
                id="link-radio-2"
                type="radio"
                value=""

                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="link-radio-2" class="text-sm font-medium text-gray-900 dark:text-gray-300">Consignee</label>
            </div>
            <p className='text-[10px] font-bold '>PLEASE PAY BY A/C PAYEE CHEQUE OR NEFT</p>
          </div>


          <div className='flex flex-col justify-between items-center  border-r-2 border-black  '>
            <p>AKASH ROAD CARRIERS</p>
            <p>Bank Name : IDBI Bank, Nigdi.</p>
            <p>Account No.: 087102000014243</p>
            <p>IFSE Code No.: IBKL0000087</p>
          </div>

          <div className='flex flex-col justify-between h-full items-center'>
            <p>For AKASH ROAD CARRIERS</p>
            <p className=''>E.& O.E.</p>
          </div>
        </footer>


  
    </div>
  );
}

export default BillBook;

