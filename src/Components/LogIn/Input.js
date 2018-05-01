import React from "react";
import "./Input.css"

class Input extends React.Component {
    render() {
        return <div className='Input'>
            <div className={this.props.className}>
                <input type={ this.props.type } name={ this.props.name } value={this.props.value}
                       placeholder={ this.props.placeholder } onChange={this.props.onChange} required autoComplete='false'/>
                <label htmlFor={ this.props.name } ></label>
            </div>
        </div>
    }

}

export default Input;