1.	What is React? What are the advantages of using React , compared to normal Javascript?
2.	What is difference between library and framework?
3.	What is useState() in React? What does usestate return? What does it take as argument? Give code example of usestate?
4.	What are state variables in react ? How are they different from normal variables
5.	What are keys in React? When should we use it? what is the advantage of
6.	 What is JSX? How does JSX work?
7.	What is DOM? What is the virtual DOM? How does react use the virtual DOM to render the UI?
8.	What are the differences between controlled and uncontrolled components? Design of controlled and unontrolled component and paste the code here?
9.	What are props in React? What is the difference between React state and props
10.	What is props drilling
11.	What are React Hooks?How are hooks different from normal functions
12.	What are the 2 rules that must be followed while using React Hooks? What is the reason behind such rules?
13.	What are the ways to communicate from child to parent? Give code example
14.	What are the way to communicate between sibling components?
15.	What are Higher Order Components in React? (Favourite Interview Question
16.	When does the return statement of a functional component get called?
17.	What is the use of useEffect React Hooks? When does the useEffect hook get called in the lifecycle of react functional components?
=========================================================================== 
1.	What is the purpose of the useState hook in React?
2.	How do you declare a state variable using useState?
3.	What is the parameter passed to useState, and what does it represent?
4.	Can you have multiple state variables in a single functional component?
5.	How do you update the state using useState?
6.	What is the difference between class component state and useState?
7.	Can you use an object as a state variable with useState?
8.	Explain the concept of lazy initialization with useState.
9.	How does useState handle asynchronous state updates?
10.	What is the purpose of the callback function in the setState function returned by useState?
11.	What is the purpose of the useEffect hook in React?
Answer: The useEffect hook is used to perform side effects in functional components. It is commonly used for tasks like data fetching, subscriptions, or manually changing the DOM.
12.	Explain the difference between componentDidMount and useEffect with an empty dependency array.
Answer: componentDidMount is a lifecycle method in class components that runs after the component mounts. useEffect with an empty dependency array replicates the behavior of componentDidMount by running the effect only once after the initial render.
13.	How do you handle cleanup in useEffect?
Answer: You can return a function from the useEffect that will be executed when the component unmounts or when the dependencies change. This function is used for cleanup tasks, like unsubscribing from subscriptions.
 
14.	What is the purpose of the dependency array in useEffect?
Answer: The dependency array in useEffect is used to specify the values that the effect depends on. The effect will re-run when any of these dependencies change. If the array is empty, the effect runs once after the initial render.
15.	Can you use async functions directly with useEffect?
Answer: No, it's not recommended to use async functions directly in useEffect. Instead, you should create a separate function marked as async and call it inside the effect.
 
16.	How can you simulate componentWillUnmount with useEffect?
Answer: By returning a cleanup function from the useEffect, you can simulate the behavior of componentWillUnmount. This function will be executed when the component unmounts.
17.	What is the purpose of the useContext hook in React?
Answer: The useContext hook is used to access the value of a React context within a functional component, allowing you to consume the context without using a Consumer component.
18.	Explain the role of the Provider component when using useContext.
Answer: The Provider component is used to wrap the part of your component tree that needs access to the context. It sets the value for the context, making it available to all components that use useContext within its subtree.
19.	Can you use useContext outside of the component tree wrapped by a Provider?
Answer: No, useContext can only be used within the subtree of the Provider that corresponds to the context. If you attempt to use it outside that subtree, it won't have access to the context value.
20.	How do you handle default values with useContext?
Answer: When creating a context using createContext, you can provide a default value as an argument. If the component tree doesn't have a matching Provider, the default value will be used.
 
21.	How do you update the context value using useContext?
Answer: The context value is generally provided by the Provider. To update the context value, you would need to dispatch an action or update the state in the component that wraps the Provider.
22.	What happens if you use useContext with a context that has no Provider in the component tree?
Answer: If there is no matching Provider in the component tree for the context, useContext will use the default value provided when creating the context.

















