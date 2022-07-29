import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const CardComponent = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt={"Card Background"} />
      <Card.Body>
        <Card.Title>Music is Life</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Explore</Button>
      </Card.Body>
    </Card>
  );
}