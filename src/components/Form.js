import React, { Component } from "react";
import styled from 'styled-components';

const Input = styled.input`

`

const Container = styled.div`
  
`

const Formulaire = styled.form`
  display: flex;
`

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
      <Container>
      <Formulaire onSubmit={(event) => this.handleSubmitEnfant(event)}>
        <label>
          nouvelle todo :
          <Input
            required
            type="text"
            placeholder="nouvelle task"
            value={this.state.inputValue}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <button> Ajouter </button>
      </Formulaire>
      </Container>
    );
  }
}

export default Form;


