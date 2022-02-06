# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

- A functional component is one that relys mainly on is props to render and do whatever the developer wants it to. This is often instanceless as much doesn't change in the component itself. However, a stefeful function does not recieve data from a parent, it instead manages its own data.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

- `componentWillMount` is called after the page is rendered, an the component is just about to be mounted. `componentWillUpdate` is called right before there will be an update on the specified component that it is in,

3. Define stateful logic.

- Stateful logic is the description of components that use hooks to show different behaviors like logical operations.

4. What are the three step of creating a successful test? What is done in each phase?

- Assign: Sets up the test cases, like defining variables and getting to the right location or state that needs to be tested.
- Act: Is the actual test that is happening. This is where much of the magic is done like validation and testing for what you want.
- Assert: Looking and comparing your outcomes. This helps you see if you got the ourcome that was expected in the `Act` phase.
