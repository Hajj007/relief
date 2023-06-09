import React, { Component } from 'react';
import "../style/Home.css"

class Toggle extends Component {
    state = {
        isExpanded: false,
        height: null,
        readMore: false,
    }

    handleToggle = () => {
        console.log(this.refs.inner.clientHeight)
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight,
            readMore: !this.state.readMore,
        })
    }
    render() {

        const { title, children } = this.props
        return (
            <div className={`panel ${this.state.isExpanded ? `showMore` : ``}`} onClick={this.handleToggle}>
                <h1>{title}</h1>
                {this.state.readMore ? <p className="showLess">Show Less</p> : <p className="showLess">Show more</p>}
                <div className="panel-collapse" style={{ height: this.state.height + "px" }}>
                    <div className="panel-body" ref="inner">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Toggle