// import { Favorite } from '@mui/icons-material';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Favourite from './Favourite';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Cardcomponent({name,price,src,id}) {
  return (
     <div className='relatie z-0'>

    <Card style={{ width: '18rem', position:'relative' }}>
     <div className='absolute top-2 right-2'>
     <Favourite/>
     </div>
      <Card.Img variant="top" src={src} style={{height:'16rem'}} />
      <Card.Body >
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         { price}
        </Card.Text>
        <Link to={`/productdetail/${id}`}>
        <Button variant="primary" className='bg-blue-500'>Show</Button>
        </Link>
      </Card.Body>
    </Card>
     </div>
  );
}

export default Cardcomponent;