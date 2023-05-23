import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
 const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(false);


  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setCommentError(event.target.value.length <= 5); // Check comment length and set error state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submit actions here
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}
            onChange={handleRatingChange}
            
          />
          <span className='rating'>{rating}</span>
        </div>
        <div>
          <label htmlFor='comment'>Comment: </label>
          <textarea 
            id='comment'
            value={comment}
            onChange={handleCommentChange}
          />
          {commentError && <p style={{ color: 'red' }} className="comment-error">Comment must be atleast 5 characters.</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
