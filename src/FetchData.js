import React from "react";

const FetchData = ({ data }) => {
  return (
    <div>
      <div className="conatainer">
        <div className="row">
          {data.map((res) => {
            const { id, title, due_on } = res;
            return (
              <div className="conatiner card-container" key={res.id}>
                <div className="row card-container">
                  <div className="col-md-4 card-con d-flex">
                    <div className="card card-b">
                      <div className="card-title">
                        <p>{id}</p>
                      </div>
                      <div className="card-body">
                        <p>{title}</p>
                      </div>
                      <div className="card-footer">
                        <p>{due_on}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
