import { Alert, Button, ListGroup } from "react-bootstrap";
import { Component } from "react";

class CommentList extends Component {
  deleteComment = (commentId) => {
    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZjYzYTMzNzk3OTAwMTlhNjcyNTAiLCJpYXQiOjE3MTQzOTEyNjIsImV4cCI6MTcxNTYwMDg2Mn0.p_DxmR81uvCGaq90fsbUdh_sC-2wkkwies_89d85X88";

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // this.fetchAllComment();
          this.props.updateComment(this.props.asin);
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidUpdate() {
    console.log(this.props.elements);
  }

  render() {
    return (
      <>
        {this.props.asin === "" && <Alert variant="warning">Please select a book to read comments</Alert>}

        {this.props.asin !== "" && this.props.elements.length > 0 && (
          <ListGroup as="ul" className="my-3 commentList">
            {this.props.elements.map((comment) => {
              return (
                <ListGroup.Item as="li" key={comment._id} className="">
                  <div className="d-flex justify-content-between align-items-start">
                    <p>{comment.author}</p>
                    <Button variant="danger" size="sm" onClick={() => this.deleteComment(comment._id)}>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </div>
                  <p className="text-start">VALUTAZIONE: {comment.rate}</p>
                  <p>{comment.comment}</p>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}

        {this.props.asin !== "" && this.props.elements.length === 0 && (
          <Alert variant="primary">Ancora nessuna recensione</Alert>
        )}
      </>
    );
  }
}

export default CommentList;
