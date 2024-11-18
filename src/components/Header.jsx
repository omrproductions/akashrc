import React from 'react';

const Header = ( {vadapav} ) => {

  return (

      <div>
      <p className='text-center'>JAY SHREE RAM</p>
      <div className='outline bg-gray-300  '>
        <h6 className='text-center underline'>Subject to Pune Jurisdiction Only</h6>

        <div className='flex justify-evenly outline'>

          <img className='h-24' src="https://st.depositphotos.com/1202217/2063/i/450/depositphotos_20638759-stock-photo-logo-text-with-shadow-word.jpg" alt="logo" />

          <div className='p-2'>

            <h2 className='text-2xl center text-center font-bold text-gray-900'>ROAD CARRIERS</h2>
            <h5 className='text-center text-[9px] font-bold text-start'>Shop No. 14, Plot No. 61-62, Sector No. 23, Transport Nagar, Nigdi, Pune-44.</h5>
            <div>
                
            </div>
            <h5 className='text-center text-[9px] font-bold text-start'>Email: akashpune65@gmail.com 
                {
                    vadapav == true ?  ('onkarjaamdade@27@gmail.com') : ('') 
                }
                </h5>
          </div>

          <div className=''>
            <div>
                {
                    vadapav == true ?  (<p>Ph : 020-27651762
                        020-7651804</p> ) : (<p> </p>)
                     
                }
            </div>
            <h6>Mob:</h6>
            <div>
              <p>9890906607</p>
              <p>7875666607</p>
            </div>
          </div>
        </div>

     
      </div>
    </div>
)
};

export default Header;