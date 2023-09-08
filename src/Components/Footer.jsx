import logo from '../assets/images/logo-black.svg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className=' lg:container md:container lg:mx-auto md:mx-auto min-w-[400px] flex flex-col lg:flex-row md:flex-row bg-white p-2 justify-between md:gap-10'>

      <div className='flex flex-col gap-10 items-center lg:items-start md:items-start '>
      <img src={logo} alt="logo" className='w-52' />
      <p className='lg:w-[420px] md:w-[420px] min-w-[300px]'>High quality Scandinavian furniture made from eco-friendly  materials. 
         Designed for modern, minimalist apartments</p>
          <div className='flex gap-10'>
          <FacebookOutlinedIcon className='text-gray-400 hover:text-blue-500'/>
          <TwitterIcon className='text-gray-400 hover:text-blue-500'/>
          <LinkedInIcon className='text-gray-400 hover:text-blue-500'/>
          <InstagramIcon className='text-gray-400 hover:text-red-500'/>
          </div>
      </div>
      <div className='flex flex-col items-center lg:items-start md:items-start'>
        <h1 className='capitalize text-lg my-5 font-bold'>shopping online</h1>
        <h1 className='capitalize text-lg'>order status</h1>
        <h1 className='capitalize text-lg'>Shipping and Delivery</h1>
        <h1 className='capitalize text-lg'>Returns</h1>
        <h1 className='capitalize text-lg'>Payment options</h1>
        <h1 className='capitalize text-lg'>Contact Us</h1>

      </div>
      <div className='flex flex-col items-center lg:items-start md:items-start'>
        <h1 className='capitalize text-lg my-5 font-bold'>information</h1>
        <h1 className='capitalize text-lg'>Gift cards</h1>
        <h1 className='capitalize text-lg'>find a store</h1>
        <h1 className='capitalize text-lg'>Newsletter</h1>
        <h1 className='capitalize text-lg'>become a member</h1>
        <h1 className='capitalize text-lg'>site feedback</h1>
      </div>
      <div className='flex flex-col items-center lg:items-start md:items-start'>
        <h1 className='capitalize text-lg my-5 font-bold'>contact</h1>
        <h1 className='capitalize text-lg'>store@uikit.com</h1>
        <h1 className='capitalize text-lg'>Hotline:+1131138138</h1>
        <h1 className='capitalize text-lg'>Newsletter</h1>
        <h1 className='capitalize text-lg'>become a member</h1>
        <h1 className='capitalize text-lg'>site feedback</h1>
      </div>




    </div>
  )
}

export default Footer
