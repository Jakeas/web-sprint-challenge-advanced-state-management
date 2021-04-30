# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    It is a solution to prop-drilling. It allows state to be passed around instead of just down.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    The store is where the state is stored for the app and where the state is sent to where it is needed. The actions are objects with up to 2 properties and they tell the reducer which functions to run. When the reducer receives an action state is updated.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    Redux-thunk allows for async processes to occur such as when making axios calls. This is a big deal because otherwise these actions would not be successful if it was still non-async. It changes the action-creators by making sure there are starting, success and failed actions and responses.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    It is hard to decide between Context and Redux.  Context is easier and faster but I like the strictness and long-term useability in larger applications.
