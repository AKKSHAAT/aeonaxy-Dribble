import React from 'react'
import { Logo } from '../components/Logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export const WelcomePage = () => {
  return (
    <>
        <div className='m-14'>
            <Logo  color={"#d94683"}/>
        </div>
        <div className='m-auto px-96 max-w-1/2'>
            <h1 className='text-4xl mb-3 font-bold '>Welcome! Let's create your profile</h1>
            <p className='text-slate-600 mb-8'>Let others get to know you better! You can fo these later</p>

            <p className='font-bold text-xl mb-3'>Add an avater</p>
            <div className='mb-8'>
                    <div className='text-slate-400 w-52 h-52 rounded-full flex items-center justify-center border-slate-200 border-4 border-dashed'>
                        <FontAwesomeIcon icon={faCamera} size="2x" />
                    </div>
            </div>



            <label htmlFor="location" className="font-bold block text-xl mb-3">
                Add your location
            </label>
            <input
                id="location"
                name="location"
                type="text"
                required
                className="input-base bg-inputBg-100 p-3  mb-6 w-full rounded-md"
                placeholder="Location"
            />
            
        </div>
    </>
  )
}
