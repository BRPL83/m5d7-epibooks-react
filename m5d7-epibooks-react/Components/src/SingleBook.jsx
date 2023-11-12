import React, {useState} from 'react';
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ onSelect, selected, book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsHovered(!isHovered);
    onSelect(book.asin);
    navigate(`/details/${book.asin}`);
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        style={{
          border: isHovered ? '3px solid red' : 'none',
          transition: 'border 0.3s ease-in-out', 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img variant="top" src={book.img} style={{ maxHeight: '350px', objectFit: 'cover'}}/>
        <Card.Body>
          <Card.Title style={{ color: '#1D3557', fontWeight: 'bold' }}>{book.title}</Card.Title>
          <Button
            variant="outline-dark"
            className="w-100 mt-2"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            Click here for details...
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook;