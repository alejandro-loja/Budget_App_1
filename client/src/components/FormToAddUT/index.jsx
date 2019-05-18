import React from "react";
import { SaveButton } from "../Buttons";

function FormToAddUtility(props) {
  return (
    <form>
      <label>
        Name of Service <input type="text" name="serviceName" />
      </label>
      <label>
        Monthly Bill: <input type="text" name="monthlyCostCents" />
      </label>
      <label>
        Currency: <input type="text" name="currency" />
      </label>
      <label>
        Due Date: <input type="text" name="dateDue" />
      </label>
      <label>
        Description: <input type="text" name="informationBill" />
      </label>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Bill Description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        />
      </div>
      <label>
        Category/Importance: <input type="text" name="importance" />
      </label>
      <br />
      <select classNameName="custom-select">
        <option selected disabled>
          Bill Importance
        </option>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
      <br />
      <SaveButton {...props} />
    </form>
  );
}

export default FormToAddUtility;
