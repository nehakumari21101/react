import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count: 0,
        }
    }


    render(){
        return(
            <div className="user-card">
                <span style={{"margin": "10px"}}>Count: {this.state.count}</span>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    })
                }}>Increment</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact:@kumarineha</h4>
            </div>
        )
    }
}

export default UserClass;