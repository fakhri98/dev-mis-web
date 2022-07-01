import logoPMI from '../images/logo_pmi.png'
import Button from './Button'

function Header ({}) {

  return (
    <header className='w-full h-20 border-b-2 border-red-500 flex justify-between'>
      <img className='h-16 pl-3 pt-3' src={logoPMI} alt="logoPMI"/>

      <div className='flex flex-row-reverse mt-6'>
        <div className='mx-6'> 
          | <button> Login </button> 
        </div>

        <div className='mx-6'>
          | <button> Project </button> 
        </div>

        <div className='mx-6'>
          | <button> Emergencies </button> 
        </div>

        <div className='mx-6'>
          | <button> Relawan </button>  
        </div>
        
        <div className='mx-6'>
          | <button> Home </button> 
        </div>   
      </div>
        
    </header>
  );
};

export default Header;