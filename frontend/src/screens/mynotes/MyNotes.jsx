import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../components/mainscreen/MainScreen";
import { Badge, Button, Card } from "react-bootstrap";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };
  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    setNotes(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title="Welcome to Procrastinator">
      <Link to="/createone" id="link">
        <Button
          style={{
            marginLeft: 10,
            marginBottom: 6,
          }}
          size="lg"
        >
          Create new Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Card key={note._id} style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                textDecoration: "none",
                color: "black",
                flex: 1,
                fontSize: 18,
                cursor: "pointer",
                alignSelf: "center",
              }}
            >
              {note.title}
            </span>
            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <h4>
              <Badge>{note.category}</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer">
                Create on - date
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
