import React, { Component } from 'react'

class Hello extends Component {
    render() {
        // code logic here
        // props (properties) = data passed from parent to child
        console.log(this.props)
        // loop over array of props
        // define what jsx to use
        const skillJsx = this.props.skills.map((skill, idx) => {
            return <li key={`skill${idx}`}>{skill}</li>
        })
        return (
            <div>
                <h2>Hi, {this.props.name}</h2>

                <p>Bio:</p>

                <p>{this.props.name} is a {this.props.position} at GA!</p>

                <p>Skills:</p>

                <ol>
                    {skillJsx}
                </ol>
            </div>
        )
    }
}

export default Hello 