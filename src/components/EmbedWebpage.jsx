import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export const EmbedWebpage = ({
  children,
  title,
  url,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)
  const mountNode =
    contentRef?.contentWindow?.document?.body

  return (
    <div className='bg-gradient-to-r from-60% from-[#12d576] to-[#27609e] rounded-xl hover:bg-gradient-to-l hover:from-[#12d576] hover:to-[#27609e]'>
      <iframe className='p-1 rounded-xl h-28 w-full' title={title} {...props} ref={setContentRef}>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </div>
  )
}

