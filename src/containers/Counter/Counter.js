import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/Actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        const results = this.props.res.length > 0 ?
            this.props.res.map((el, index) => {
                return (
                    <li key={`${el} ${index}`} onClick={() => this.props.deleteResult(index)}>{el}</li>
                );
            }) :
            null;

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.minusCounter} />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {results}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        res: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({ type: Actions.INCREMENT }),
        decrementCounter: () => dispatch({ type: Actions.DECREMENT }),
        addCounter: () => dispatch({ type: Actions.ADD, val: 10 }),
        minusCounter: () => dispatch({ type: Actions.MINUS, val: 10 }),
        storeResult: (counter) => dispatch({ type: Actions.STORE, val: counter }),
        deleteResult: (index) => dispatch({ type: Actions.DELETE, index: index }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);