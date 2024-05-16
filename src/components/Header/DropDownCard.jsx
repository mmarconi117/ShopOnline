import React, {useState } from 'react';
import DropdownButton from '../Header/DropdownButton'
import TranslateButton from '../commonComponents/Translator'
function DropdownCard() {
  const [isOpenToogle, setIsOpenToggle] = useState(false);
  
    const RecieveIsopenToggle=(isOpen)=>{
        setIsOpenToggle(isOpen)
    }
    
  return (
    <div className="inline-block text-left">
      <div className="relative">
        <DropdownButton title={"English/US"} childToParentData={RecieveIsopenToggle}/>
        {isOpenToogle && (
          <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 ml-auto">
            <div className="py-2 px-4">
              <h2 className="font-bold mb-2" style={{color:"black"}}>Select Language and Currency</h2>
              <p className="text-sm text-gray-600">
               Select Your Preferred language and currency. You can update the settings at any time.
              </p>
            </div>
            <TranslateButton />
            {/* <div className="border-t border-gray-200"></div> */}
            <div className="py-1">
              
            
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownCard;
