

const NewPopup = () => {
    return (
    <div className="popup-added-cart">
      <div className="popup-added-cart-content">
        <h3>Movie added to cart!</h3>
        <button className="popup-close-button" onClick={() => setShowPopup(false)}>
          Close
        </button>
      </div>
    </div>
    )
}
export default NewPopup;
  