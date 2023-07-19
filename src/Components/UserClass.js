import React from "react"

class UserClass extends React.Component {
    // Receiving props inside constructor 
    constructor(props) {
        // passing it to parent class using super
        super(props)
        this.state = {
            userInfo: {
                name: 'name',
                location: 'location'
            }
        };
        console.log(this.props.name + "constructor");
    }
    componentDidMount() {
        console.log("componentdidmount");
        this.setState({
            userInfo: {
                name: 'Pratik',
                location: 'Dhebewadi'
            }
        })
    }


    componentDidUpdate() {
        console.log("componentdidupdate");
    }

    componentWillUnmount() {
        console.log("comonentwillunmount");
    }

    render() {
        console.log(this.props.name + "Render");
        const { name, location } = this.state.userInfo
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Pratik</h4>
            </div >
        )
    }
}

export default UserClass;