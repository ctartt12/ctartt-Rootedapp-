import { useState } from 'react'

const profile = {
    plantName: "",
    dateArrival: "",
    datePlanted: "",
    plantLocation: "",
    potSize: "",
    plantSize: 0,
    notes: ""
}

function AddPlants() {

    // todo:state 
    const [plantName, setPlantName] = useState(profile) //useState is the changes in real time

    function handleChange(event) {
        const { name, value } = event.target //event.target triggers usestate and targets what being manipulated 
        console.log(value)

        setPlantName(current => ({
            ...current,
            [name]: value,
        }))
    }

    // todo: submit 

    function handleSubmit(event) {
        event.preventDefault()

        console.log(plantName)
    }



    // todo: Api 

    // todo:search



    return (
        <div>
            <header className="addplants">
                <h1>Add Plants</h1>
                <form>
                    <label htmlFor="plantName">Plant Name:</label>
                    <input type="text" id="plantName" name="plantName" required onChange={handleChange} />

                    <label htmlFor="dateArrival">Date of Arrival:</label>
                    <input type="date" id="datearrival" name="dateArrival" required onChange={handleChange} />

                    <label htmlFor="datePlanted">Date Planted:</label>
                    <input type="date" id="dateplanted" name="datePlanted" onChange={handleChange} />

                    <label htmlFor="plantLocation">Plant Location:</label>
                    <select id="plantLocation" name="plantLocation" required onChange={handleChange}>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                        <option value="greenhouse">Greenhouse</option>
                    </select>

                    <label htmlFor="potSize">Pot Size:</label>
                    <select id="potSize" name="potSize" required onChange={handleChange}>
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

                    <label htmlFor="plantSize">Plant Size:inches</label>
                    <input type="number" id="plantSize" name="plantSize" min="0" required onChange={handleChange}></input>

                    <label htmlFor="notes">notes:</label>
                    <textarea id="notes" name="notes" rows="4" cols="50" onChange={handleChange}></textarea>
                </form>
                <button type="button" onClick={() => window.history.back()}>Back</button>
                <button type="submit" onClick={(event) => handleSubmit(event)}>submit</button>
            </header >
        </div>

    )
};






export default AddPlants