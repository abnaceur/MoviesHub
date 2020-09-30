import React, { useState, useEffect } from "react";
import "./Commentary.css";
import InsertComment from "./InsertComment";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import ErrorModal from "../../../shared/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/UIElements/LoadingSpinner";
import { Comment, Header } from "semantic-ui-react";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../shared/util/validators";
import { useForm } from "../../../shared/hooks/form-hook";
import Input from "../../../shared/FormElements/Input";

const Commentary = (props) => {
  const [loadedComments, setLoadedComments] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      comment: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/comments/3`
        );
        setLoadedComments(responseData.comments);
      } catch (err) {}
    };
    fetchComments();
  }, [sendRequest]);
  const commentHandler = async () => {
    try {
      await sendRequest(
        `http://localhost:5000/api/comments/3/3`,
        "POST",

        JSON.stringify({
          comment: formState.inputs.comment.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(formState.inputs.comment.value);
    } catch (err) {}
    console.log(formState.inputs.comment.value);
  };
  return (
    <div className="commentary">
      <ErrorModal error={error} onHide={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedComments && (
        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>
          {loadedComments.map((comment) => {
            return (
              <Comment key={comment.id}>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">{comment.username}</Comment.Author>
                  <Comment.Metadata>
                    <div>{comment.date}</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.text}</Comment.Text>
                </Comment.Content>
              </Comment>
            );
          })}
        </Comment.Group>
      )}
      <Input
        id="comment"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
        label="Add Comment"
        errorText="Please enter a comment. (2 characters min.)"
        initialValue=""
        initialValid={false}
        onInput={inputHandler}
      />
      <button onClick={commentHandler}>Comment</button>
      <InsertComment />
    </div>
  );
};

export default Commentary;
