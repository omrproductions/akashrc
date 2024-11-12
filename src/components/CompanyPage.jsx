import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstanceOf';
import Modal from './Modal';

const CompanyPage = () => {
  const categories = [{name:"lr", icon:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"/>
  </svg>
  }, 
    {name:"BillCopy" ,icon:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M8 12.732A1.99 1.99 0 0 1 7 13H3v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2h-2a4 4 0 0 1-4-4v-2.268ZM7 11V7.054a2 2 0 0 0-1.059.644l-2.46 2.87A2 2 0 0 0 3.2 11H7Z" clip-rule="evenodd"/>
      <path fill-rule="evenodd" d="M14 3.054V7h-3.8c.074-.154.168-.3.282-.432l2.46-2.87A2 2 0 0 1 14 3.054ZM16 3v4a2 2 0 0 1-2 2h-4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>
    </svg>
     },
    {name:"Letter Pad",icon:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-5-4v4h4V3h-4Z"/>
    </svg>
    }, 
    {name:"Booking Register",icon:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.429M7 8h3M8 8V4h4v2m4 0V5h-4m3 4v3a1 1 0 0 1-1 1h-3m9-3v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.397a1 1 0 0 1 .27-.683l2.434-2.603a1 1 0 0 1 .73-.317H19a1 1 0 0 1 1 1Z"/>
    </svg>
    }, 
    {name:"Vehicle Details", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
  }
    ]
    const {id} = useParams();
    const [show,setShow] = useState(false);
    const [category,setCategory]= useState(null);
    const [data,setData]=useState(null);
    
    
    const handleCategory = async (category) => {
      try {
        setCategory(category);
        setData(null); // Clear previous data
        const response = await axiosInstance.get(`/api/${category}/${id}`);
        setData(response.data.content); // Adjust path based on response structure
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    
    const handleReduce=()=>{
      setData(null);
    }
    const handleAdd=()=>{
      setShow(true);
    }
    const handleClose=()=>{
      setShow(false);
  }
  const handleDelete= async (cid)=>{
    try {
      const response = await axiosInstance.delete(`/api/${category}/delete/${id}/${cid}`);
      console.log("Deleted Succesfully");
      handleCategory(category);
    } catch (error) {
      console.log(error);
      
    }
    
  }
  const handleUpdate= async(cid)=>{
    try {
      const response = await axiosInstance.patch(`/api/${category}/update/${id}/${cid}`);
      console.log("Deleted Succesfully");
      handleCategory(category);
    } catch (error) {
      
    }
  }
  



    
  return (
    <div>
    <div className="w-full h-full flex flex-col">
  {/* Categories Section at the Top */}
  <div className=" p-4 shadow-md w-full">
    <h1 className="text-2xl font-bold mb-4">Categories</h1>
    <ul className="flex space-x-8">
      {categories.map((catname, idx) => (
        <li key={idx} className="w-full">
          <button
            className=" bg-gray-800 rounded-xl shadow-md py-0.5 cursor-pointer 
                      flex flex-col justify-center items-center 
                      transition-all duration-300 hover:shadow-xl hover:scale-105 w-full"
            onClick={() => handleCategory(catname.name)}
          >
            <div className="flex py-1">
              <p className='text-white mr-2'>{catname.icon}</p>   
              <span className="font-thin text-white">{catname.name.toLocaleUpperCase()}</span>
            </div>
       
          </button>
        </li>
      ))}
    </ul>
      {category === "lr" && data &&(
        <div>
        {/* Buttons with icons and colors */}
        <button
          onClick={handleReduce}
          className="bg-[#b58969] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 mb-4"
        >
          <span className="text-lg">−</span>
          <span>Minimize</span>
        </button>
        <br />
        <button
          onClick={handleAdd}
          className="bg-[#6e9470] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 mb-4"
        >
          <span className="text-lg">+</span>
          <span>Add</span>
        </button>
      
        {show && <Modal show={show} handle={handleClose} />}
      
        {/* Table with updated color styling */}
        <table className="min-w-full bg-[#fdf6e4] border border-[#d1bfa8] mt-4 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#e4cdb2] text-[#4b3b2f]">
              <th className="py-2 px-4 border border-[#d1bfa8]">ID</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Date</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Consignee</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Consignor</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Actions</th>
            </tr>
          </thead>
          <tbody>

            {data.map((item, index) => (
              <tr key={index} className="hover:bg-[#f0e3d0]">
                {console.log(item)}
                <td className="py-2 px-4 border border-[#d1bfa8]">9000</td>
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.date}</td>
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.delivery_details.consignee.name}</td>
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.delivery_details.consigner.name}</td>
                <td className="py-2 px-4 border border-[#d1bfa8] flex space-x-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

      )}
      {category === "BillCopy" &&  data &&(
        <div>
        {/* Flex container to position Minimize and Add buttons on either side */}
        <div className="flex justify-between items-center mb-4">
          {/* Minimize Button on the Left */}
          <button
            onClick={handleReduce}
            className="bg-[#b58969] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
          >
            <span className="text-lg">−</span>
            <span>Minimize</span>
          </button>
      
          {/* Add Button on the Right */}
          <button
            onClick={handleAdd}
            className="bg-[#6e9470] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
          >
            <span className="text-lg">+</span>
            <span>Add</span>
          </button>
        </div>
      
        {show && <Modal show={show} handle={handleClose} />}
      
        {/* Table with beige color theme */}
        <table className="min-w-full bg-[#fdf6e4] border border-[#d1bfa8] rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#e4cdb2] text-[#4b3b2f]">
              <th className="py-2 px-4 border border-[#d1bfa8]">Bill Number</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Date</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Bill To</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Bill From</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Total Amount</th>
              <th className="py-2 px-4 border border-[#d1bfa8]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-[#f0e3d0]">
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.id}</td>
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.date}</td>
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.bill_to}</td>
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.bill_from}</td>
                <td className="py-2 px-4 border border-[#d1bfa8]">{item.amount}</td>
                <td className="py-2 px-4 border border-[#d1bfa8] flex space-x-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      )}
      
    {category==="Letter Pad"&& data &&(
      <div>
      {/* Flex container to position Minimize and Add buttons on either side */}
      <div className="flex justify-between items-center mb-4">
        {/* Minimize Button on the Left */}
        <button
          onClick={handleReduce}
          className="bg-[#b58969] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <span className="text-lg">−</span>
          <span>Minimize</span>
        </button>
    
        {/* Add Button on the Right */}
        <button
          onClick={handleAdd}
          className="bg-[#6e9470] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <span className="text-lg">+</span>
          <span>Add</span>
        </button>
      </div>
    
      {show && <Modal show={show} handle={handleClose} />}
    
      {/* Table with beige color theme */}
      <table className="min-w-full bg-[#fdf6e4] border border-[#d1bfa8] rounded-lg shadow-lg">
        <thead>
          <tr className="bg-[#e4cdb2] text-[#4b3b2f]">
            <th className="py-2 px-4 border border-[#d1bfa8]">Letter ID</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">Date</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">From</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">To</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">Subject</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-[#f0e3d0]">
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.id}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.date}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.sender}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.receiver}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.subject}</td>
              <td className="py-2 px-4 border border-[#d1bfa8] flex space-x-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(item._id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )}
    {category==="Booking Register"&& data &&( 
      <div>
      {/* Flex container to position Minimize and Add buttons on either side */}
      <div className="flex justify-between items-center mb-4">
        {/* Minimize Button on the Left */}
        <button
          onClick={handleReduce}
          className="bg-[#b58969] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <span className="text-lg">−</span>
          <span>Minimize</span>
        </button>
    
        {/* Add Button on the Right */}
        <button
          onClick={handleAdd}
          className="bg-[#6e9470] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <span className="text-lg">+</span>
          <span>Add</span>
        </button>
      </div>
    
      {show && <Modal show={show} handle={handleClose} />}
    
      {/* Table with beige color theme */}
      <table className="min-w-full bg-[#fdf6e4] border border-[#d1bfa8] rounded-lg shadow-lg">
        <thead>
          <tr className="bg-[#e4cdb2] text-[#4b3b2f]">
            <th className="py-2 px-4 border border-[#d1bfa8]">Booking ID</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">Date</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">Customer Name</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">Start</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">End</th>
            <th className="py-2 px-4 border border-[#d1bfa8]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-[#f0e3d0]">
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.id}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.date}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.entry_by}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.origin}</td>
              <td className="py-2 px-4 border border-[#d1bfa8]">{item.destination}</td>
              <td className="py-2 px-4 border border-[#d1bfa8] flex space-x-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(item._id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )}
        {category==="Vehicle Details"&& data &&(
         <div>
         {/* Flex container to position Minimize and Add buttons on either side */}
         <div className="flex justify-between items-center mb-4">
           {/* Minimize Button on the Left */}
           <button
             onClick={handleReduce}
             className="bg-[#b58969] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
           >
             <span className="text-lg">−</span>
             <span>Minimize</span>
           </button>
       
           {/* Add Button on the Right */}
           <button
             onClick={handleAdd}
             className="bg-[#6e9470] text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
           >
             <span className="text-lg">+</span>
             <span>Add</span>
           </button>
         </div>
       
         {show && <Modal show={show} handle={handleClose} />}
       
         {/* Table with beige color theme */}
         <table className="min-w-full bg-[#fdf6e4] border border-[#d1bfa8] rounded-lg shadow-lg">
           <thead>
             <tr className="bg-[#e4cdb2] text-[#4b3b2f]">
               <th className="py-2 px-4 border border-[#d1bfa8]">Vehicle Number</th>
               <th className="py-2 px-4 border border-[#d1bfa8]">Driver Name</th>
               <th className="py-2 px-4 border border-[#d1bfa8]">Contact Number</th>
               <th className="py-2 px-4 border border-[#d1bfa8]">Actions</th>
             </tr>
           </thead>
           <tbody>
             {data.map((item, index) => (
               <tr key={index} className="hover:bg-[#f0e3d0]">
                 <td className="py-2 px-4 border border-[#d1bfa8]">{item.vehicle_number}</td>
                 <td className="py-2 px-4 border border-[#d1bfa8]">{item.driver_name}</td>
                 <td className="py-2 px-4 border border-[#d1bfa8]">{item.contact_number}</td>
                 <td className="py-2 px-4 border border-[#d1bfa8] flex space-x-2">
                   <button
                     onClick={() => handleDelete(item._id)}
                     className="text-red-600 hover:text-red-800"
                   >
                     Delete
                   </button>
                   <button
                     onClick={() => handleUpdate(item._id)}
                     className="text-blue-600 hover:text-blue-800"
                   >
                     Update
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       
      )}
        
    </div>
  </div>
  </div>
  );
};

export default CompanyPage;
