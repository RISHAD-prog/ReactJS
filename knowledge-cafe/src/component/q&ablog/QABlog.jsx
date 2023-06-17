import React from 'react';

const QABlog = () => {
    return (
        <div>
            <p>Prop vs State</p>
            <p>Ans:In JavaScript, props and state are both used to store data in a component. But, they are used for different purposes.
                Props are used to pass data from one component to another. They are read-only and cannot be modified by the child
                component.
                State is a local data storage that is local to the component only and cannot be passed to other components.
                The this.setState property is used to update the state values in the component</p>
            <p>How does useState work?</p>
            <p>It is call the hook in the React , It returns an array with two values: the current state and a function to
                update it. The Hook takes an initial state value as an argument and returns an updated state value whenever
                the setter function is called</p>
            <p>Purpose of useEffect other than fetching data in React</p>
            <p>It allows to make effect on the component. Other than fetching data is helps to directly update the DOM and update
                the timer.
            </p>
            <p>How does react works</p>
            <p>React works by creating a virtual DOM in memory instead of manipulating the browser’s DOM directly. React finds out what changes have been made, and changes only what needs to be changed.
                This makes React very fast and efficien</p>
        </div>
    );
};

export default QABlog;