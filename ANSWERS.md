- [ ] Why would you use class component over function components (removing hooks from the question)?
    --> It seems to me that using class components, especially where state management is involved, would be useful for the ease of use and visualization of that state. Removing hooks from the equation, the React lifecycle methods built in the class components would be a necessity.

- [ ] Name three lifecycle methods and their purposes.
    --> componentDidMount: After your component successfully mounts, you can do something inside of this method.
    --> componentDidUpdate: Runs through the render method once again. We can do much the same here (after a change has occurred) as we do inside of componentDidMount.
    --> componentWillUnmount: This takes place just before the unmounting (death) of your app.

- [ ] What is the purpose of a custom hook?
    --> A custom hook is very much like an importable function (with the exception of a few rules). Imagine you have multiple components which are handling state (or something else) in a similar way. Instead of writing the same function over and over again, you would want to create a custom hook to import and use inside those components.

- [ ] Why is it important to test our apps?
    --> To be certain everything is working (and breaking) in the expected ways. This is especially important if you're building an application that'll will be used by a multitude of people (who can discover a multitude of ways to break something).
