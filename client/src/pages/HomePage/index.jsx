import React, { Component } from "react";
import API from "../../utils/API";
// import booksAPI from "../utils/gbAPI";
// import Jumbotron from "../components/Jumbotron";
// import Container from "../components/Container";
// import { List } from "../components/ListBooks";
// import { EachBook } from "../components/EachBook";
// import { ViewButton, SaveButton } from "../components/Buttons";
// import { Input, FormBtn } from "../components/Form";



class Search extends Component {

    // state = {
    //     books: [],
    //     title: "",
    //     authors: "",
    //     description: "",
    //     image: "",
    //     link: "",
    //     query: ""
    // };

    // SearchBooks = () => {
    //     booksAPI.searchBooks(this.state.query)
    //         //   .then(res => console.log(res.data.items))
    //         .then(res => this.setState({ books: res.data.items }))
    //         .catch(err => this.setState({resultResponse: 'No Results Found'}))

    // }

    // //boiler plate
    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };
    // // df
    // handleBookSearchForm = event => {
    //     event.preventDefault();
    //     if (this.state.query) {
    //         console.log(this.state.query)
    //         this.SearchBooks()
    //     }
    //   };

    //   saveBook = (title,authors,description,image,link) => {
    //     // console.log(title,authors,description,image,link);
    //     if (title && image) {
    //       API.saveBook({
    //         title: title,
    //         authors: authors,
    //         description: description,
    //         image: image,
    //         link: link
    //       })
    //         .then(res => alert(`${title} is saved`))
    //         .catch(err => console.log(err));
    //   }
    // }

    render() {
        return (
            <div>
                Welcome to the Home Page
            </div>)

    }

};



export default Search;