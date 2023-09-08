
// eslint-disable-next-line react/prop-types
function Color({color,title}) {
  return (
    <div className='w-10 h-10 border  p-2'>
      <div className='w-6 h-6 border text-center text-capitalize' style={{backgroundColor:color}}>
          {title}
      </div>
    </div>
  )
}

export default Color
