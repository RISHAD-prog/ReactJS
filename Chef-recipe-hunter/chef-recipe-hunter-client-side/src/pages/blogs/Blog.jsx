import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Card >
                <Card.Body>
                    <Card.Title>Tell us the differences between uncontrolled and controlled components.</Card.Title>
                    <Card.Text>
                        Uncontrolled components are those that are not directly managed by the parent component or the application. They rely on their own internal state and user interaction to function. Examples of uncontrolled components include standard HTML form elements like input, select, and textarea. These components maintain their own state and manage their own behavior without any input from the parent component or the application.

                        On the other hand, controlled components are those that are fully managed by the parent component or the application. These components receive their values and event handlers through props, and their behavior is determined entirely by the parent component or the application. The state of a controlled component is maintained by the parent component or the application, and any changes to the component are communicated back to the parent component through event handlers. Examples of controlled components include custom form elements and UI widgets that are created by the application developer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body>
                    <Card.Title>How to validate React props using PropTypes.</Card.Title>
                    <Card.Text>
                        React PropTypes is a type checking library that helps you validate the types of props passed to your React components.Using PropTypes in your React components can help you catch bugs and prevent unexpected behavior by ensuring that props are of the expected type. For example, if a component expects a prop to be a string, but receives a number instead, you'll get a warning in the console. This can save you a lot of debugging time and help you write more reliable and robust code.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body>
                    <Card.Title>Tell us the difference between nodejs and express js.</Card.Title>
                    <Card.Text>
                        Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side. It provides a runtime environment for executing JavaScript code outside of the browser. Node.js has a built-in module system that allows you to import and export modules, as well as a powerful set of libraries for building scalable, event-driven server-side applications. Node.js can be used for a variety of purposes, including web applications, command-line tools, and desktop applications.
                        Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of tools and libraries for building web applications, including middleware for handling HTTP requests and responses, routing, and templating engines. Express.js simplifies the process of building web applications by providing a set of commonly used features out of the box.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body>
                    <Card.Title>TWhat is a custom hook, and why will you create a custom hook?</Card.Title>
                    <Card.Text>
                        In React, a custom hook is a JavaScript function that allows you to extract logic and state from a component, and share it across multiple components. Custom hooks are created by using the use prefix in the function name, and they follow the same rules as standard React hooks.
                        Custom hooks can be used for a variety of purposes, such as managing complex state logic, handling side effects, or abstracting common functionality.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Blog;