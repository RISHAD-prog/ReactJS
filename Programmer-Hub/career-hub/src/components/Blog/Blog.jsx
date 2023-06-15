import React from 'react';

const Blog = () => {
    return (
        <div>
            <p>When we should use Context API?</p>
            <p>Ans: The React Context API is a tool for passing data through the component tree without the need to pass props manually at every level.
                It allows components to share data without the need for a parent-child relationship</p>
            <p>What is custom Hook?</p>
            <p>Ans:Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the
                React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
            <p>What is useRef?</p>
            <p>Ans:useRef is a hook that provides a way to create a mutable object that persists across renders. The object
                returned by useRef can be used to hold a reference to a DOM node or any other value that needs to persist between renders.</p>
            <p>What is useMemo?</p>
            <p>Ans:useMemo is a hook that allows you to memoize a value that is expensive to compute. It takes a
                function and an array of dependencies and returns a memoized value that is only recomputed when the dependencies change.</p>
        </div>

    );
};

export default Blog;