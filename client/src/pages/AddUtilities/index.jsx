import React, { Component } from "react";
import API from "../../utils/API";
import moment from "moment";
import FormToAddUtility from "../../components/FormToAddUT";
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

  centsToDollars = cents => {
    let inUSDDollars = cents / 100;
    inUSDDollars = "$" + inUSDDollars;
    return inUSDDollars;
  };

  sayHello = () => {
    console.log("Hello World");
  };

  determineImportance = importance => {
    const level = importance.toLowerCase();
    switch (level) {
      case "high":
        return (
          <div className="alert alert-danger" role="alert">
            {importance}
          </div>
        );
        break;
      case "medium":
        return (
          <div className="alert alert-primary" role="alert">
            {importance}
          </div>
        );
        break;
      case "low":
        return (
          <div className="alert alert-secondary" role="alert">
            {importance}
          </div>
        );
        break;
      default:
        return <div>{importance}</div>;
    }
  };

  renderEachPurchase = () => {
    return (
      <ul className="list-group">
        {this.state.bills[0] ? (
          this.state.bills.map(bill => {
            const {
              _id,
              serviceName,
              monthlyCostCents,
              currency,
              dateDue,
              informationBill,
              importance
            } = bill;
            return (
              <li key={_id} className="list-group-item">
                <h2>{serviceName}</h2>
                <h3>
                  {this.centsToDollars(monthlyCostCents)} {currency}
                </h3>
                <p> Occurance: {moment(dateDue).format("MMM Do")}</p>
                <p>{informationBill}</p>
                {this.determineImportance(importance)}
              </li>
            );
          })
        ) : (
          <p>NO RESULTS</p>
        )}
      </ul>
    );
  };

  render() {
    return (
      <div className="container pt-4">
        <div className="jumbotron row">
          <br />
          <h1 className="display-4">Add Utilities</h1>
        </div>
        <div className="row">
          <div className="col">{this.renderEachPurchase()}</div>
          <div className="col">
            <h4>Add a Utility</h4>
            <FormToAddUtility onClick={this.sayHello} />
            {/* <SaveButton onClick={this.sayHello} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
