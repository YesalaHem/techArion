import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(3);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-4 count" style={{ width: "50%" }}>
            <div className="card">
              <div className="card-title">
                <h4 className="text-center p-2">Counter</h4>
                <div className="d-flex justify-content-center justify-content-between align-items-center p-3">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setCount(count * 3)}
                  >
                    Multiply
                  </button>
                  <p className="result m-3">{count}</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setCount(count - 1)}
                  >
                    Decs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
