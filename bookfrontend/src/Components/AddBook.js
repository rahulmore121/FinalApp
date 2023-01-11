import React ,{useRef}from 'react'
import classes from './AddBook.module.css'
function AddBook(props) {

  const name = useRef('');
  const quantity = useRef('');
  const price = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const book = {
      name: name.current.value,
      quantity: quantity.current.value,
      price: price.current.value,
    };

    props.onAddBook(book);
    name.current.value= ''
    quantity.current.value= ''
    price.current.value=''
  }



  
  return (
    <div className='form'>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Name</label>
        <input required type='text' id='title' ref={name} />
      </div>
      <div className={classes.control}>
        <label htmlFor='quantity'>Quantity</label>
        <input required type='text' id='quantity' ref={quantity} />
      </div>
      <div className={classes.control}>
        <label htmlFor='price'>Price</label>
        <input required type='text' id='price' ref={price} />
      </div>
      <button>Add Book</button>
    </form>
    </div>
  )
}

export default AddBook