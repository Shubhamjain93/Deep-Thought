// FloatingSidePanels.js
import React, { useState } from 'react';
import './FloatingSide.css';
import Landing from './Landing/Landing';

const FloatingSidePanels = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const toggleLeftPanel = () => {
    setIsLeftOpen(!isLeftOpen);
  };

  const toggleRightPanel = () => {
    setIsRightOpen(!isRightOpen);
  };

  return (
    <div>
      <div className= {`side-panel left ${isLeftOpen ? 'open' : ''} rounded-4 border shadow `} style={{height: "600px"}}>

        {/* count.map((count) => <div>{count}</div>) */}
        
        {!isLeftOpen && <button className="notification-badge " onClick={toggleLeftPanel}>1</button>}
        
         
          <div className="panel-content ">
            <div className='bg-black rounded-4  '>
            <button className="toggle-btn px-2 fs-4 rounded-circle " onClick={toggleLeftPanel}>
          {isLeftOpen ? '❮' : '❯'}
        </button>
            <p className='text-start bg-black text-white p-2 ps-4 rounded-4 fs-4'>Journey Board</p></div>
            <ul className='ps-5'>
              <li className='fs-5 fw-semibold pb-2'>Explore the world of management</li>
              
              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure your pointers</li>
              <li>4SA Method</li>
            </ul>
          </div>
        
      </div>

      <div className={`side-panel right  ${isRightOpen ? 'open' : ''} rounded border shadow`}>
           
            <div className="panel-content row">
            <div className="collapsed-label col-1" onClick={toggleRightPanel}>
          <span className='mb-4'>{isRightOpen ? '❯' : '❮'}</span> <span> Notice  Board</span>
        </div>
               <div className='col-10'><h3>Notice Board </h3>
              <p>Notices</p></div>
            </div>
        
        
      </div>
    </div>
  );
};

export default FloatingSidePanels;
