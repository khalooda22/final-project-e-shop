// eslint-disable-next-line react/prop-types
function Description({icon,title,description}) {
  return (
    <div className='flex flex-col text-gray-200 items-center gap-10'>
     {icon}
      <h1 className='text-xl font-semibold text-black '>{title}</h1>
      <h1 className='text-black w-80  '>{description}</h1>
    </div>
  )
}

export default Description
