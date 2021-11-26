import React from "react";

const FetchData = ({ data }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((res) => {
            const { id, title, due_on } = res;
            return (
              <div className="col-md-4" key={res.id}>
                <div className="card card-b">
                  <div className="card-title">
                    <p className="text-center pt-3">{id}</p>
                  </div>
                  <div className="card-body">
                    <p>{title}</p>
                  </div>
                  <div className="card-footer">
                    <p>{due_on}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div> */}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
