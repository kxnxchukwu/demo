import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const CardComponent = ({title, imgUrl}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} alt={"Card Background"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Explore</Button>
      </Card.Body>
    </Card>
  );
}