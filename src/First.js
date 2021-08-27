import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import Form from "./Form";

function First() {
  let history = useHistory();
  return (
      <div className="App">
          <button onClick={()=> {history.push("/form")}}>
            FORM
          </button>
        {/* При нажатии на кнопку происходит редирект на страницу с формой, где выполняется задание 3-4 */}
      </div>
  )
}

export default First;
