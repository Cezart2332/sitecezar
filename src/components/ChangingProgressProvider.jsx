import React from "react";

class ChangingProgressProvider extends React.Component {
    static defaultProps = {
        interval: 10
    };

    state = {
        valuesIndex: 0
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.valuesIndex < this.props.values.length - 1) {
                this.setState(prevState => ({
                    valuesIndex: prevState.valuesIndex + 1
                }));
            } else {
                clearInterval(this.intervalId);
            }
        }, this.props.interval);
    }

    componentWillUnmount() {

        clearInterval(this.intervalId);
    }

    render() {
        return this.props.children(this.props.values[this.state.valuesIndex]);
    }
}

export default ChangingProgressProvider;
