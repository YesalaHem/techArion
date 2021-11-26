import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./Counter";
import SendData from "./SendData";
import Nav from "./Nav";
import FetchData from "./FetchData";

const baseURl = "https://gorest.co.in/public/v1/todos";

const App = () => {
  const [dataRes, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(baseURl);
    const dataGetting = await response.json();
    const res = dataGetting.data;
    const result = res.map((res) => {
      return res;
    });

    setData(result);
  };
  getData();

  return (
    <>
      <Nav />
      <Switch>
        <div className="container">
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/senddata" component={SendData}>
            <SendData />
          </Route>
          <div className="col-md-12 ">
            <Route exact path="/" component={FetchData}>
              <FetchData data={dataRes} />
            </Route>
          </div>
        </div>
      </Switch>
    </>
  );
};

export default App;
