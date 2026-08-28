function AddPlants() {  
    return( <header className="addplants">
        <h1>Add Plants</h1>
        <form>
       
        <label htmlFor="plantName">Plant Name:</label>
        <input type="text" id="plantName" name="plantName" required />
        
       <label htmlFor="datearrival">Date of Arrival:</label>
        <input type="date" id="datearrival" name="datearrival" required />

        <label htmlFor="dateplanted">Date Planted:</label>
        <input type="date" id="dateplanted" name="dateplanted" />

        <label htmlFor="plantLocation">Plant Location:</label>
        <select id="plantLocation" name="plantLocation" required>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="greenhouse">Greenhouse</option>

        </select>

         <label htmlFor="potSize">Pot Size:</label>
        <select id="potSize" name="potSize" required>
            <option value="2">2 inches</option>
            <option value="4">4 inches</option>
            <option value="6">6 inches</option>
            <option value="8">8 inches</option>
            <option value="10">10 inches</option>
            <option value="12">12 inches</option>
            <option value="14">14 inches</option>
            <option value="16">16 inches</option>
            <option value="18">18 inches</option>
            <option value="20">20 inches</option>
            <option value="22">22 inches</option>
            <option value="24">24 inches</option>
        </select>

    <label htmlFor="plantsize">Plant Size:</label>
        <select id="plantsize" name="plantsize" required>
            <option value="2">2 inches</option>
            <option value="4">4 inches</option>
            <option value="6">6 inches</option>
            <option value="8">8 inches</option>
            <option value="10">10 inches</option>
            <option value="12">12 inches</option>
            <option value="14">14 inches</option>
            <option value="16">16 inches</option>
            <option value="18">18 inches</option>
            <option value="20">20 inches</option>
            <option value="22">22 inches</option>
            <option value="24">24 inches</option>
        </select>

    <label htmlFor="Notes">Notes:</label>
        <textarea id="Notes" name="Notes" rows="4" cols="50"></textarea>

        </form>


    <button type="button" onClick={() => window.history.back()}>Back</button>


    <button type="submit">Submit</button>   






    </header>
    
)};






export default AddPlants