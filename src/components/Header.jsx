import logoPMI from '../images/logo_pmi.png'

import Button from './Button'

const Header = () => {
  return (
    <div className='w-full h-20 border-b-2 border-red-500 flex justify-between'>
      <img className='h-16 pl-3 pt-3' src={logoPMI} alt="logoPMI"/>

      <div className='flex flex-row-reverse mt-6'>
        <div className='mx-6'>
          <p> | <button> Login </button> </p> 
        </div>

        <div className='mx-6'>
          <p> | <button> Project </button> </p>
        </div>

        <div className='mx-6'>
          <p> | <button> Emergencies </button> </p>
        </div>

        <div className='mx-6'>
          <p> | <button> Relawan </button> </p> 
        </div>
        
        <div className='mx-6'>
          <p> | <button> Home </button> </p>
        </div>
                
      </div>

      

    </div>

  )
}

export default Header;