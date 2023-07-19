import React from 'react'
import UserClass from './UserClass'

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent ComponentDid Mount");
    }
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                <UserClass name={'First'} />
            </div>
        )
    }
}

export default About;