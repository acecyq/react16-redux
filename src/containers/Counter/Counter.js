import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Index from '../../store/actions/Index';
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
                <CounterControl label="Add 10" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.minusCounter} />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {results}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ctr: state.ctr.counter,
    res: state.res.results
})

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(Index.increment()),
    decrementCounter: () => dispatch(Index.decrement()),
    addCounter: () => dispatch(Index.add()),
    minusCounter: () => dispatch(Index.minus()),
    storeResult: (counter) => dispatch(Index.storeCounter(counter)),
    deleteResult: (index) => dispatch(Index.deleteCounter(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);