import { Col, Row } from 'react-bootstrap'
import fantasy from '../books/fantasy.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea';
import { useState } from 'react';

const AllTheBooks = ({ searchQuery }) => {
  const [selectedBook, setSelectedBook] = useState(null);
    
  return (
    <Row>
      <Col md={8}>
       <Row className="g-3 mt-4">
      {fantasy
        .filter((book) => 
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((book) => (
        <Col key={book.asin} xs={12} md={4}>
          <SingleBook 
            book={book}
            isSelected={book.asin === selectedBook?.asin}
            onSelect={() => setSelectedBook(book.asin)}
            />
        </Col>
      ))}
      </Row>
    </Col>
    <Col md={4}>
      <CommentArea selectedBook={selectedBook}/>
    </Col>
  </Row>
  );
};

export default AllTheBooks;