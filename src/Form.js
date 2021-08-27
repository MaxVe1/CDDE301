import React from "react";

function Form() {

  const [inputfieldsToAdd, setInputfieldsToAdd] = React.useState(1);
  const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(0);

  const [inputAreaToAdd, setInputAreaToAdd] = React.useState(1);
  const [committedAreaToAdd, setCommittedAreaToAdd] = React.useState(0);

  const [inputCBToAdd, setInputCBToAdd] = React.useState(1);
  const [committedCBToAdd, setCommittedCBToAdd] = React.useState(0);


  return  (
      <div>
  <div> This is redirect Page Form</div>
  <div>
    <div>
      <label>Number of fields to add</label>
      <input
          type="number"
          value={inputfieldsToAdd}
          onChange={(e) =>
              setInputfieldsToAdd(parseInt(e.currentTarget.value, 10))
          }
      />
    </div>
    <div>
      <label>Number of textarea to add</label>
      <input
          type="number"
          value={inputAreaToAdd}
          onChange={(e) =>
              setInputAreaToAdd(parseInt(e.currentTarget.value, 10))
          }
      />
    </div>
    <div>
      <label>Number of checkbox to add</label>
      <input
          type="number"
          value={inputCBToAdd}
          onChange={(e) =>
              setInputCBToAdd(parseInt(e.currentTarget.value, 10))
          }
      />
    </div>
    <button
        onClick={() => {
          setCommittedFieldsToAdd(inputfieldsToAdd);
          setCommittedAreaToAdd(inputAreaToAdd);
          setCommittedCBToAdd(inputCBToAdd);
        }}
    >
      Build
    </button>
    <br /><br />


    {[...Array(committedFieldsToAdd)].map(
        (value: undefined, index: number) => (
            <input id={index + 1} key={index} />
        )

    )}
    <br /><br />
    {[...Array(committedAreaToAdd)].map(
        (value: undefined, index: number) => (
            <textarea id={index + 1} key={index} />
        )
    )}
    <br /><br />
    {[...Array(committedCBToAdd)].map(
        (value: undefined, index: number) => (
            <input type="checkbox" id={index + 1} key={index} />
        )
    )}
  </div>
  </div>
  );
}

export default Form;
