import React from 'react'
import mainBg from '../../assets/mainbg.svg'


function H1() {
    return (
        <div>
            <div className=' h-[60vh] lg:h-[90vh] flex justify-center items-center text-nutral-900'>
                <div className='head text-center w-fit mx-auto'>
                    <div className="logo font-bold text-3xl text-neutral-800 lg:text-7xl">SAIDPIECE <span className='font-light'>STUDIO</span></div>
                    <div className=' text-[16px] mx-10 lg:text-xl mt-2 lg:mt-5 font-medium text-zinc-600'>We Art the World powered by traditions, nature and innovations</div>
                </div>
            </div>
            <div className='h-[80vh] border mx-3 md:mx-10 lg:mx-20 mt-30 lg:mt-0' style={{background:`url(${mainBg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
                
            </div>
        </div>
    )
}

export default H1