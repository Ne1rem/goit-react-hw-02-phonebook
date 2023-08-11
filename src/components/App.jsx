import React, { Component } from "react";
import { AddPhone } from "./AddPhone/AddPhone";
import { Contacts } from "./Contacts/Contacts";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  AddContactId = AddNewContact => {
    this.setState(prevInfo => {
      return {
        contacts: [...prevInfo.contacts, AddNewContact]
      }
    });
  };

  render() {
    return (
      <div>
       <AddPhone AddContactId={this.AddContactId}/>
       <Contacts contacts={this.state.contacts}/>
      </div>
    );
  }
}