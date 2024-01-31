import React, { useContext } from 'react'
import logo from '../../assets/orange-farm-logo-removebg-preview.png'
import { CollapsedState } from '../../comp/vertical-navigation/VerticalNavigation'



const Logo = ( ) => {
  
  const collapsed = useContext(CollapsedState)
  return (
   <div className='flex items-center gap-1 mb-6'>
    <div className='w-6 h-6'>

    <img src={logo} alt="orangefarm logo by sharif" className='object-cover w-full h-full rounded-full overflow-hidden'/>
    </div>
   { !collapsed&&<p className="text-xl font-bold ">OrangeFarm</p>}
   </div>
  )
}

export default Logo