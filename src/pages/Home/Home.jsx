import React from 'react';
import './Home.css';
function Home() {
   return (
      <>
         <div className='conatnier'>
            <div className='tabs-home'>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/interview.png" alt='Images' />
                  Interview Questions
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/jobs.png" alt='Images' />
                  Job Application
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/resume.png" alt='Images' />
                  Resume Data
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/questions.png" alt='Images' />
                  DSA Questions
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/mytask.png" alt='Images' />
                  Daily Tasks
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/hours.png" alt='Images' />
                  Study Hours
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/aiicons.png" alt='Images' />
                 InterAct AI
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/introduction.png" alt='Images' />
                 My Introduction
               </div>
                <div className='tabs-home-tab'>
                  <img src="/assets/images/communication.png" alt='Images' />
                 Communication
               </div>
               <div className='tabs-home-tab'>
                  <img src="/assets/images/resource.png" alt='Images' />
                  My Resource
               </div>
            </div>
         </div>
      </>
   )
}

export default Home;