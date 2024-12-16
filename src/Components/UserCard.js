
import Card from 'react-bootstrap/Card';

const UserList = ({ name, username, email, address, phone, website, company }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img 
        variant="top" 
        src="https://via.placeholder.com/150" 
        alt={`${name}'s avatar`} 
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Address:</strong> {address?.street}, {address?.city}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
          <p><strong>Company:</strong> {company?.name}</p>
          <p><strong>Catchphrase:</strong> {company?.catchPhrase}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserList;
