import React from 'react'
import AddBook from './AddBook'
import  '../Components/AddBook.module.css'
///<reference types="cypress"/>
describe('<AddBook />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddBook />)
  });
  
  it("Autommated test for form filling",()=>{
    cy.mount(<AddBook onAddBook={()=>{} }/>)
    cy.contains("Name").should("be.visible")
    cy.get('#title').type("java")
    cy.get('#quantity').type("10")
    cy.get('#price').type("1000")
    cy.get('button').click()
  });
  
});