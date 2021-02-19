import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';


let state = {
  posts: [
    { id: 1, message: "Hi, how a u?", likesCount: 10 },
    { id: 2, message: "Hi, goood", likesCount: 1000 },
    { id: 3, message: "Yahoooo", likesCount: 500 },
  ],
};

test('dlina doljna bit vstroena', () => {

  // 1 test data
  let action = addPostActionCreator("arigami");
  // 2 action
  let newState = profileReducer(state, action);

  // 3 expectation  - ожидание
  expect(newState.posts.length).toBe(4);
});


test('dlina doljna bit vstroena', () => {
  // 1 test data
  let action = addPostActionCreator("arigami");

  // 2 action
  let newState = profileReducer(state, action);

  // 3 expectation  - ожидание
  expect(newState.posts[3].message).toBe("arigami");
});


test('dlina doljna bit vstroena', () => {

  // 1 test data
  let action = deletePost(1);
  // 2 action
  let newState = profileReducer(state, action);

  // 3 expectation  - ожидание
  expect(newState.posts.length).toBe(2);
});