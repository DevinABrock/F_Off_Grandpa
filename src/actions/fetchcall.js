import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state ={
            count: 0,
            roast: [] 
        }
    }
    handleClick=()=>{
        this.setState({count: this.state.count +1})
    }
    async componentDidMount(){
        let results = await fetch('https://foaas.com/version')
        let data = await results.json();
        console.log(data);

        this.setState({
            roast: data.roast
        }, ()=>{
            console.log(this.state.roast);
        })
        console.log(data);
    }
    componentDidUpdate(){
    }

    render() {
        const {roast} = this.state
        return (
            <div>{roast}</div>
        )
    }
}
