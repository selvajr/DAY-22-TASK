const Card = (data) => {
    const arr = [
      data.user,
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      " Dedicated Phone support",
      "Free Subdomain",
      "Monthly Status Reports",
    ];
    const show = [];
    for (let i = 0; i < arr.length; i++) {
      if (data.num > i) {
        show.push(
          <h5 key={i} className="active">
            &#9989; {arr[i]}
          </h5>
        );
      } else {
        show.push(
          <h5 key={i} className="deactive">
            &#10062; {arr[i]}
          </h5>
        );
      }
    }
  
    return (
      <span key={data.k} className="card">
        <div key={data.k + "1"} className="card1">
          <center key={data.k + "2"}>
            <h5 key={data.k + "5"} className="deactive1">
              {data.mod}
            </h5>
            <h1 key={data.k + "4"}>${data.price}/month</h1>
          </center>
          {show}
          <center key={data.k + "3"}>
            <button className="btn">BUY</button>
          </center>
        </div>
      </span>
    );
  };
  export default Card;