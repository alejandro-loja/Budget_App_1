import React, { Component } from "react";
import API from "../../utils/API";
// import booksAPI from "../utils/gbAPI";
// import Jumbotron from "../components/Jumbotron";
// import Container from "../components/Container";
// import { List } from "../components/ListBooks";
// import { EachBook } from "../components/EachBook";
// import { ViewButton, DeleteButton } from "../components/Buttons";
// import { Input, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    bills: {}
    // title: "",
    // authors: "",
    // description: "",
    // image: "",
    // link: "",
    // query: ""
  };

  //boiler plate
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  componentDidMount() {
    this.loadbills();
  }

  loadbills = () => {
    API.getBills()
      .then(res => this.setState({ bills: res.data }))
      .catch(err => console.log(err));
    // debugger;
  };

  // deleteBook = id => {
  //     API.deleteBook(id)
  //         .then(res => this.loadBooks())
  //         .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        Add Utilities
        {this.state.bills[0] ? (
          this.state.bills.map(bill => {
            return (
              <ul key={bill._id}>
                <li>{bill.serviceName}</li>
                <li>{bill.monthlyCostCents}</li>
                <li>{bill.currency}</li>
                <li>{bill.dateDue}</li>
                <li>{bill.informationBill}</li>
                <li>{bill.importance}</li>
              </ul>
            );
          })
        ) : (
          <p>NO RESULTS</p>
        )}
      </div>
    );
  }
}

export default Saved;
