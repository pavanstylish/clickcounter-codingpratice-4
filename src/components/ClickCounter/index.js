import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`increment clicked${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <h1 className="heading">
          The Button has been clicked <br />
          <spam className="count">{count}</spam> times
        </h1>
        <p className="paragraph">click the button to Increase the count</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
