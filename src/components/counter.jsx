import React, { Component } from 'react';

class Counter extends Component {
    
    // state = {
    //     value: this.props.counter.value,
    //     // tags : ["tag1", "tag2"]
    // };

    styles = {
        fontSize : 10,
    }

    // renderTags(){
    //     if(this.state.tags.length === 0)
    //         return <p>No tags available</p>;
    //     return (<ul>{this.state.tags.map(tag => <li key = "tag"> {tag} </li>)}</ul>);
    // }

    render() { 
        return(
            <React.Fragment>
            <span style = {this.styles} className= {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {() => this.props.onIncrement(this.props.counter)}>Increment</button>
            <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
            <br/>
            {/* {this.renderTags()} */}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // Making a const so that we dont need to write this.state.count multiple times
        const {value: count} = this.props.counter;
        return count === 0 ? "ZERO" : count;
    }
}
 
export default Counter;