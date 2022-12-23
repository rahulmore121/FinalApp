import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import AddBook from "./Components/AddBook";
import BookList from './Components/BookList'


function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchBookHandler()
  }, []);

  const deletebookHandler=async(id)=>{
  console.log(id);
    const response = await fetch(
      `http://localhost:3000/${id}`,
      {
        method: "DElETE",
      }
    );
    const data= await response.text()
    console.log(data);
    fetchBookHandler()
  }

  const fetchBookHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      
      const response = await fetch("http://localhost:3000/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      const loadeddBooks = [];
      for (const key in data) {
        console.log(data[key]._id);
        loadeddBooks.push({
          id: data[key]._id,
          name: data[key].name,
          quantity: data[key].quantity,
          price: data[key].price,
        });
        //console.log(loadeddBooks);
      }
     
      setBooks(loadeddBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  

  let content = <p>Found no Books.</p>;

  if (books.length > 0) {
    content = <BookList books={books} deleteBook={deletebookHandler} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  const addBookHandler = async (book) => {
    
      const response = await fetch(
        "http://localhost:3000",
        {
          method: "POST",
          body: JSON.stringify(book),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.text();
      console.log(data);
    
  };
 

  return (
    <React.Fragment>
      <section>
        <AddBook onAddBook={addBookHandler} />
      </section>
      <section>
        <button onClick={fetchBookHandler}>Fetch Books</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
