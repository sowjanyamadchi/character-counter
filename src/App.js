import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputsList.map(eachItem => (
        <li className="para" key={eachItem.id}>
          <p>{`${eachItem.userEnteredText} : ${eachItem.textLength}`}</p>
        </li>
      ))
    )
  }

  render() {
    const {userInputsList, userInput} = this.state
    console.log(userInputsList)

    return (
      <div className="bg-container">
        <div className="left-container">
          <h1 className="heading-boss">
            Count the characters like a <br />
            Boss...
          </h1>
          <ul className="ul">{this.renderUserInputs()}</ul>
        </div>

        <form className="right-container" onSubmit={this.onAddUserInput}>
          <h1 className="heading-counter">Character Counter</h1>
          <input
            type="text"
            placeholder="Enter the Characters here"
            className="input"
            value={userInput}
            onChange={this.onChangeUserInput}
          />
          <button type="submit" className="button">
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default App
