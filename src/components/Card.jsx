const Card = () => {
  return (
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-slate-600">
      <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
          Go somewhere
          </a>
      </div>
    </div>

    // <div className="drop-shadow-xl bg-slate-600">

    // </div>
  );
}

export default Card