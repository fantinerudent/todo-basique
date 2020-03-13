import React, { Component } from "react";
import styled from 'styled-components';
import { Button , Input} from 'reactstrap';


const Formulaire = styled.form`
@media screen and (min-width: 200px) and (max-width: 640px)  {
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
}
 
@media screen and (min-width: 640px) {  
  display: flex;
  justify-content: center;
  margin: 30px;
}`

const ButtonStyled = styled(Button)`
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 10px;
`

const InputStyled= styled(Input)`
  :focus {
    color:red;
  }
   background-color: white;
   opacity: 60%;
   border-radius: 10px;
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
      <div>
        <Formulaire onSubmit={(event) => this.handleSubmitEnfant(event)}>
          <InputStyled
             maxLength={26}
            required
            type="text"
            placeholder="nouvelle task"
            value={this.state.inputValue}
            onChange={(event) => this.handleChange(event)}
          />
          <ButtonStyled> Ajouter </ButtonStyled>
        </Formulaire>
      </div>
    );
  }
}

export default Form;


