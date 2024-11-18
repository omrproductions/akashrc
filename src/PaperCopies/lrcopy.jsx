import React from 'react';
import Header from '../components/Header';

const LrCopy = () => {
  const isLrCopy = true;

  return (
    <div className="p-4">
      {/* Header Part */}
      <Header vadapav={isLrCopy} />

      {/* GST No. Section */}
      <div className="bg-slate-100 border-b border-black text-sm">
        <p>GST No.: 27AKMPM6807F2ZW</p>
      </div>

      {/* Main Flex Structure */}
      <div className="flex gap-2 items-stretch">

        {/* Left Section: 3/4 of the page width */}
        <div className="w-3/4 border border-black">
          <div className=' grid grid-cols-3 gap-1'>
            {/* PARTY PH Section */}
            <div className="space-y-2 bg-slate-300 p-2 border border-black text-xs dis">
              <p className="border border-black h-16 p-1">Party Ph.
                <input className="border-b-2 outline-none bg-transparent text-center" type="text" />
              </p>

              <div className="border border-black p-1">
                <p className="border-b border-black text-[10px] font-bold text-center">Schedule of Demurrage Charges</p>
                <p>Demurrage Chargeable After <input className="border-b-2 outline-none bg-transparent text-center" type="text" /> days from today @ Rs. <input className="border-b-2 outline-none bg-transparent text-center" type="text" /> per day per Qtl. on weight charged</p>
              </div>

              <div className="border border-black p-1 w-full ">
                <span className="font-bold">NOTICE</span>
                <p className="text-[8px] font-bold">
                  The Consignments covered by this Lorry Receipt shall be stored at the destination under the control of the Transport operator and shall be delivered to or the order of the Consignee bank whose name is mentioned in the Lorry Receipt. It will under no circumstances be delivered to anyone without the written authority from the consignee Bank on order endorsed on the Consignee Copy or on a Separate Letter of Authority.
                </p>
              </div>

            </div>



            {/* CONSIGNEE Section */}
            <div className=" bg-slate-400 p-2 border border-black text-xs">
              <p className="text-center border border-black p-1 text-[16px] font-bold">Consignee Copy</p>
              <p className="text-center p-1">AT OWNER'S RISK</p>
              <div className="border border-black p-1">
                <p className="text-center font-bold">INSURANCE</p>
                <p className="text-[10px]">The Customer has stated that:</p>
                <p className="text-xs"><input className="border-b-2 outline-none bg-transparent text-center" type="text" />He has insured the Consignment OR</p>
                <p className="text-xs"><input className="border-b-2 outline-none bg-transparent text-center" type="text" />He has not insured the Consignment</p>
                <p>Company <input className="border-b-2 outline-none bg-transparent text-center" type="text" /></p>
                <p>Policy No. <input className="border-b-2 outline-none bg-transparent text-center" type="text" /> Date<input className="border-b-2 outline-none bg-transparent text-center" type="date" /></p>
                <p className="flex items-center space-x-2">
                  Amount <input className="border-b-2 outline-none bg-transparent text-center w-16" type="text" />
                  Risk <input className="border-b-2 outline-none bg-transparent text-center w-16" type="text" />
                </p>

                <div className="border-t border-black mt-1">E-Way Bill NO.:<input className="border-b-2 outline-none bg-transparent text-center" type="text" /></div>
              </div>
            </div>

            {/* CAUTION Section */}
            <div className="bg-slate-500 p-2 border border-black text-xs h-36">
              <p className="text-center font-bold text-[16px]">Caution</p>
              <p className="text-[12px] text-left">This consignment will not be detained, diverted, re-routed, or rebooked without Consignee Bank's written permission. It will be delivered at destination.</p>
              <p className="text-[10px] text-left">Address of Delivery office:<input className="border-b-2 outline-none bg-transparent text-center" type="text" /></p>
              <p><input className="border-b-2 outline-none bg-transparent text-center" type="text" /></p>
              <p><input className="border-b-2 outline-none bg-transparent text-center" type="text" /></p>
              <div className='pt-[19px]'>
                <div className="border border-black p-1 mt-1 h-32">
                  <p className="text-center font-bold">CONSIGNMENT NOTE</p>
                  <p className="font-bold">No. <input className="border-b-2 outline-none bg-transparent text-start" type="text" /></p>
                  <p>Date :<input className="border-b-2 outline-none bg-transparent text-center" type="date" /></p>
                </div>
              </div>
            </div>
          </div>


          {/* Address Section */}

          <div className="col-span-3  border border-black text-xs flex space-x-4">

            <div className="flex justify-between w-full col-span-3 w-full my-1 border border-black text-xs h-full">

              {/* CONSIGNER NAME & ADDRESS */}
              <div className="flex-1">
                <div className='flex'>
                  <p>Consignor's Name & Address: </p>
                  <input className="border-b outline-none  w-full mt-1" type="text" />
                </div>
                <div className='flex'>
                  <p>Consignee Name & Address</p>
                  <input className="border-b outline-none  w-full mt-1" type="text" />
                </div>
              </div>


              <div className="flex flex-col justify-evenly">
                <div className="flex space-x-1 ">
                  <p>From</p>
                  <input className="border-b-2 outline-none bg-transparent text-start" type="text" />
                </div>
                <div className="flex space-x-1">
                  <p>To:</p>
                  <input className="border-b-2 outline-none text-start" type="text" />
                </div>
              </div>
            </div>
          </div>





          {/* Table */}
          <div className="overflow-hidden border border-black col-span-3">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-black  text-left align-top">Packages</th>

                  <th className="border border-black  text-left align-top" colSpan="4">Description</th>

                  <th className="border border-black  text-left align-top" colSpan="2">Weight in Kgs</th>

                  <th className="border border-black  text-left align-top" colSpan="2">
                    <p className='text-center'>Amount to Pay/Paid/Due</p>
                    <div className='grid grid-cols-2 text-center'>
                      <p>Rs.</p>
                      <p>Ps.</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  {/* Packages */}
                  <td className="border border-black align-top p-0" rowSpan="6">
                    <textarea name=""id=""className="w-full border-none outline-non resize-none"rows="9"></textarea>
                  </td>

                  {/* Desrip */}
                  <td className="border border-black  text-left align-top" colSpan="4" rowSpan="6">
                    <textarea
                        name=""
                        id=""
                        className="w-full border-none outline-non resize-none"
                        rows="9"
                      ></textarea>

                  </td>
                  {/* Weight in KGs */}
                  <td className="border border-black  text-left align-top" rowSpan="2">
                    <textarea name="" id="" className='w-full h-full' cols={4} rows={5}></textarea>

                  </td>

                  {/* Frieght */}
                  <td className="border border-black  text-left align-top">Freight</td>
                  <td className="border border-black p-0 text-left ">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                  <td className="border border-black  text-left ">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                </tr>
                <tr>
                  <td className="border border-black  text-left ">Hamail</td>
                  <td className="border border-black text-left ">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                  <td className="border border-black p-2 text-left ">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                </tr>
                <tr>
                  <td className="border border-black  text-left align-top" rowSpan="4">Charged
                    <textarea name="" id="" className='w-full h-full' cols={4} rows={5}></textarea>

                  </td>
                  <td className="border border-black  text-left align-top">Sur. Ch.</td>
                  <td className="border border-black  text-center">50</td>
                  <td className="border border-black  text-center">00</td>
                </tr>
                <tr>
                  <td className="border border-black  text-left align-top">LR. Ch.</td>
                  <td className="border border-black  text-center">50</td>
                  <td className="border border-black  text-center">00</td>
                </tr>
                <tr>
                  <td className="border border-black  text-left align-top">Risk Ch.</td>
                  <td className="border border-black  text-center">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                  <td className="border border-black  text-center">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                </tr>
                <tr>
                  <td className="border border-black  text-left align-top">Total</td>
                  <td className="border border-black  text-center">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                  <td className="border border-black  text-center">
                    <input className="border-b-2 outline-none text-start" type="text" />

                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        {/* Right Section: 1/4 of the page width */}
        <div className="w-1/4 bg-slate-300  border border-black text-xs flex flex-col justify-between">
          <h1 className="text-center">PAN No.</h1>
          <h1 className="text-center">AKMPM6807F</h1>

          <div className="outline p-1 mt-1">
            <h1>GST Payable by</h1>
            <div class="flex items-center space-x-4">
              <label class="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="custom-option" value="1" class="hidden peer" />
                <div class="w-4 h-4 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span>Consigner</span>
              </label>
              <label class="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="custom-option" value="2" class="hidden peer" />
                <div class="w-4 h-4 rounded-full border border-gray-400 peer-checked:bg-blue-600 peer-checked:border-blue-600"></div>
                <span>Consignee</span>
              </label>
            </div>

            <p className="text-[10px] font-bold mt-1">
              *We hereby declare and undertake that we have not claimed & will not avail CENVAT credit of duty paid on inputs or capital goods used for providing taxable GAT services & we have not availed the benefit under the notification of the government of India in ministry of finance (Department of revenue) no. 12/2003 dated 20-06-2003.
            </p>
          </div>

          {/* Additional Company Details */}


          <div className="border-b h-14 mt-1 pl-1 font-bold">
            <h1 className='mb-3'>Address of issuing office/agent</h1>
            <div className='w-full text-center'>
              <input className="border-b-2 outline-none bg-transparent text-start w-[98%] border-black" type="text" />
            </div>

          </div>

          <div className="border-b h-14 mt-1 pl-1 font-bold">
            <h1 className='mb-3'>LORRY NO.</h1>
            {/* INPUT */}
            <div className='w-full text-center'>
              <input className="border-b-2 outline-none bg-transparent text-start w-[98%] border-black" type="text" />
            </div>
          </div>
          <div className="border-b h-14 mt-1 pl-1 font-bold">
            <h1 className='mb-3'>Mode of Packinng.</h1>
            {/* INPUT */}
            <div className='w-full text-center'>
              <input className="border-b-2 outline-none bg-transparent text-start w-[98%] border-black" type="text" />
            </div>
          </div>

          <div className="border-b h-14 mt-1 pl-1 font-bold">
            <h1 className='mb-3'>Invoice No.</h1>
            {/* INPUT */}
            <div className='w-full text-center'>
              <input className="border-b-2 outline-none bg-transparent text-start w-[98%] border-black" type="text" />
            </div>
          </div>

          <div className="border-b h-14 mt-1 pl-1 font-bold">
            <h1 className='mb-3'>Consignor's GST No..</h1>
            {/* INPUT */}
            <div className='w-full text-center'>
              <input className="border-b-2 outline-none bg-transparent text-start w-[98%] border-black" type="text" />
            </div>
          </div>



          <div className="border-b h-14 mt-1 pl-1 font-bold">
            <h1 className='mb-3'>Remark:</h1>
            {/* INPUT */}
            <div className='w-full text-center '>
              <input className="border-b-2 outline-none bg-transparent text-start w-[98%] border-black" type="text" />
            </div>
          </div>











        </div>
      </div>
    </div>

  );
};

export default LrCopy;
