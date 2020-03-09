import React, { Component } from "react";

class Form extends Component {
  state = {
    inputValue: ``
  };

  // a l'écoute du changement de state du composant
  // et met à jour le state.
  handleChange = (event) => {
    this.setState({
      inputValue: event.currentTarget.value
    })
  };

  // gere la soumission du form dans l'enfant puis
  // appelle la fonction handlesubmit du parent en lui transmettant
  // des infos sur le state de l'enfant.
  handleSubmitEnfant = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.inputValue);
    this.setState({
      inputValue: '',
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmitEnfant(event)}>
        <label>
          nouvelle todo :
          <input
            required
            type="text"
            placeholder="nouvelle task"
            value={this.state.inputValue}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <button> Ajouter </button>
      </form>
    );
  }
}

export default Form;


