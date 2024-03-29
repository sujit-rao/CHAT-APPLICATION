import React from 'react'

const Message = () => {
    return (
        <div className=' chat chat-end'>
            <div className=' chat-image avatar'>
                <div className=' w-10 rounded-full'>
                    <img src="/chatpfp.jpg" alt="Chat Avatar" />

                </div>

            </div>
            <div className= {`chat-bubble text-white bg-purple-900`}>Hi! what's upp?</div>
            <div className=' chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>12:42</div>
            
        </div>
    )
}

export default Message