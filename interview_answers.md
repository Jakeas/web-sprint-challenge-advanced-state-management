# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    
    Context API tries to solve the problem of removing prop-drilling and providing a way to pass-props without giving them to components that don't need it.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Action: is an object with a type field. Think of an action as an event that describes something that happened in the application
    
    Reducer: it is a function that determines changes to state

    Store: is the single source of truth because that is where the state resides and where all state is passed down.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    

4. What is your favorite state management system you've learned and this sprint? Please explain why!