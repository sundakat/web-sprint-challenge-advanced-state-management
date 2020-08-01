1. What problem does the context API help solve?

prop drilling, the context api enables you to access props anywhere in the application 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

reducers take a state, and an action to perform on that state and return a new state object. actions are the actions taken in by the reducer to change the state. store is the place in an application where the application level state is held. any pieces of state that the entire application needs to know about is stored there.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is where all of the slices of state that the entire application needs to be aware of are held, component state is a slice of state that only matters to one particular component. when creating a slice of state for the name of an application, you should use application state rather than component state. that way that state can be connected to any components that need to know the name of the application.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it enables us to return functions from our functions that gives us access to dispatch

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, because it feels easier to use compared to context. 
