import Afforditem from "./Afforditem"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaidIcon from '@mui/icons-material/Paid';
import HighQualityIcon from '@mui/icons-material/HighQuality';
function Affords() {
  return (
    <div className="lg:container lg:mx-auto  flex flex-col items-center lg:flex-row md:flex-row lg:justify-center gap-10 md:justify-between">
      <Afforditem icon={<LocalShippingIcon/>} title={"free shipping"} description='All purchases over $399 are eligible for
free shipping via UPS Pack and Ship.' />
 <Afforditem icon={<PaymentsIcon/>} title={"Easy Payment"} description='All payments are processed instantly
over a secure payment protocol.' />
 <Afforditem icon={<PaidIcon/>} title={"Money-Back Guarantee"} description="If an item arrived damaged or you've
changed your mind, you can send it
back for a full refund."/> 
<Afforditem icon={<HighQualityIcon/>} title={"Finest Quality"} description='esigned to last, each of our products has
been crafted with the finest materials.' />
    </div>
  )
}

export default Affords
