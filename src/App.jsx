import React from 'react';
import './index.css';
import './App.css';
import image from '../src/assets/homepage.svg'; 
import fre1 from '../src/assets/fre1.jpg';
import fre2 from '../src/assets/fre2.jpg';
import aba1 from '../src/assets/aba1.jpg';
import aba2 from '../src/assets/aba2.jpg';

document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});



function HomePage() {
  return (
    
    <div className="outer min-h-screen flex flex-col"
    //  style={{ 
    //   backgroundImage: `url(${image})`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',}}
    >
      
      <div className='flex flex-row max-h-full'>
        <nav className="flex flex-row w-full bg-purple-650 max-h-full pr-10 items-center pl-10">
          <span className='flex p-2 justify-start home csea left-0'>CSEA</span>
          <ul className="flex flex-row space-x-4">
            <li className='p-3 home'><a href="#home" className="text-white">Home</a></li>
            <li className='p-3 home'><a href="#about" className="text-white">About</a></li>
            <li className='p-3 home'><a href="#contact" className="text-white">Contact</a></li>
            <li className='dropdown-container relative p-3'>
              <label className='team' htmlFor="dropdown">Team</label>
              <select id="dropdown" name="option" className='dropdown'>
                <option value="option1">Student</option>
                <option value="option2">Staff</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>

      <main className="main flex-grow flex items-center justify-center flex-col p-8 pt-20">
        <div className=' w-[85vh] flex flex-col justify-center items-center'> 
          <h1 className='flex text-3xl p-2 home'>ABOUT</h1>
          <div className=" flex w-[75vh] text-black bold "><p>The Computer Science and Engineering Association (CSEA) of College of Engineering Guindy is an association with a legacy of more than 10 years, established for the primary goal of "Knowledge Advancement". Being the brainchild of Department of Computer Science and Engineering (DCSE) of CEG, one of the oldest engineering colleges of the country, the association ensures that the role of technocrats and specialists in various industries is implied. It extends to develop and promote the progression of Computer Science and technologies to its students as well as the members of the global community through its rich alumni support. Comprising students and faculty, CSEA is one of the most active Engineering Associations in the city.</p></div>
        </div> 
        <br/>
        <h1 className='flex text-3xl p-2 home'>Freshers</h1>
       <div className=" flex flex-col ">
       <table className='flex flex-row p-2'>
          <td className=' flex w-[75vh] h-[300px] rounded-[20px] border'
            style={{ 
            backgroundImage: `url(${fre1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',}} ></td>
          <td className='flex w-[75vh] h-[300px] rounded-[20px] border'
               style={{ 
                backgroundImage: `url(${fre2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',}} ></td>
        </table>
       </div>
       <br/>
       <h1 className='flex text-3xl p-2 home'data-aos="fade-up" data-aos-duration='1000'>Abacus'24</h1>
       <div className="fade-up" data-aos="fade-up" data-aos-duration='1000'>
       <table className='flex flex-row p-2'>
          <td className=' flex w-[75vh] h-[300px] rounded-[20px] border'
            style={{ 
            backgroundImage: `url(${aba1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',}} ></td>
          <td className='flex w-[75vh] h-[300px] rounded-[20px] border'
               style={{ 
                backgroundImage: `url(${aba2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',}} ></td>
        </table>
       </div>
      </main>

      <footer className="flex flex-col bg-purple-950 text-center text-white">
        <div className="footer">
          <div className='p-3'>
            <p>CSEA</p>
            <p>CEG, Anna University,</p>
            <p>Chennai.</p>
          </div>
          <div className='w-full bg-gray-400'>
            <p className='text-black flex items-center justify-center'>&copy; 2024 CSEA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
