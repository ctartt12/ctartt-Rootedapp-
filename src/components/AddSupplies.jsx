function AddSupplies() {
    return ( <header className="AddSupplies">
        <h1>Add Supplies</h1>
    
    <form>
<fieldset>

   <legend>Supply Type</legend>

   <label htmlFor="Soil">Soil:</label>
     <input type="radio" id="Soil" name="supplyType" value="Soil" required /><br/>

   <label htmlFor="Fertilizer">Fertilizer:</label>
     <input type="radio" id="Fertilizer" name="supplyType" value="Fertilizer" required /><br/>

   <label htmlFor="PestControl">Pest Control:</label>
    <input type="radio" id="PestControl" name="supplyType" value="PestControl" required /><br/> 

    <label htmlFor="Other">Other:</label>
     <input type="radio" id="Other" name="supplyType" value="Other" required /><br/>

</fieldset>
  
<button type="button" onClick={() => window.history.back()}>Back</button>


<button type="submit">Submit</button>   

</form>



    </header>

)};

export default AddSupplies