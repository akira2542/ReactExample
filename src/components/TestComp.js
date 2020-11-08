import React,{Component} from 'react'


class TestComp extends Component {

    state = {
        text : "Hello World",
        number : 0
    }

    changeState = (e) => {
        this.setState({text : e.target.value})
        let n = this.state.number
        n += 1
        this.setState({
            number : n
        })
    }

    plusNumber = () => {
        let n = this.state.number
        n += 1
        this.setState({
            number : n
        })
    }

    render() {
        return (
            <div>
              <h1>{this.state.number}</h1>
              <h1>{this.state.text}</h1>
              <input type="text" onChange={this.changeState} value={this.state.text}></input>
              <input type="button" onClick={this.plusNumber} value="Plus Number" />
            </div>
        )
    }
}

// function TestComp() {
//         return (
//             <h1>This is React Component</h1>
//         )
// }


export default TestComp