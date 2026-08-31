import { useState } from 'react'

const apiKey = import.meta.env.VITE_TREFLE_API_KEY || 'your_token_here';

const profile = {
    common_name: "",
    dateArrival: "",
    datePlanted: "",
    plantLocation: "",
    potSize: "",
    plantSize: 0,
    notes: ""
}

function AddPlants() {

    // todo:state 
    const [common_name, setcommon_name] = useState(profile) //useState is the changes in real time
    const [loading, setLoading] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target //event.target triggers usestate and targets what being manipulated 
        console.log(value)

        setcommon_name(current => ({
            ...current,
            [name]: value,
        }))
    }

    // todo:search
    async function searchPlantAPI() {
        if (!common_name.common_name) {
            alert("Please type in a name so we can help with your search!");
            return;
        }

        setLoading(true);

        try {
            const url = `/api/plants?token=${apiKey}&q=${encodeURIComponent(common_name.common_name)}`;
            console.log("Fetching from API endpoint securely...");

            const response = await fetch(url);
            const data = await response.json();

            console.log("API Query Results received:", data);

            if (data?.data && data.data.length > 0) {

                console.log("Raw plants array from API:", data.data);

                const userSearch = common_name.common_name.toLowerCase();

                const smartMatch = data.data.find(plant => {
                    const commonName = plant.common_name ? plant.common_name.toLowerCase() : "";
                    const scientificName = plant.scientific_name ? plant.scientific_name.toLowerCase() : "";
                    return commonName.includes(userSearch) || scientificName.includes(userSearch);

                });

                const topResult = smartMatch || data.data[0];

                setcommon_name(current => ({
                    ...current,
                    common_name: topResult.common_name,
                    notes: `Watering recommendation from API: ${topResult.watering || 'Not specified'}.`
                }));

                alert(`Found: ${topResult.common_name}! Autofilling matching profile parameters`);
            } else {
                alert("No exact matches found for that plant name.");
            }

        } catch (error) {
            console.error("API Call execution failed:", error);
            alert("Failed to reach plant information database.");
        } finally {
            setLoading(false);
        }
    }

    // todo: submit 
    function handleSubmit(event) {
        event.preventDefault()

        console.log("Form data saved to local state object", common_name)
        console.log("API key loaded:", apiKey)
    }

    return (
        <div>
            <header className="addplants">
                <h1>Add Plants</h1>
                <form className="plant-profile" onSubmit={handleSubmit}>

                    <div className="form-grid">
                        <div className="input-card">
                            <label htmlFor="common_name">Plant Name:</label>
                            <div className="search-input-wrapper" style={{ display: 'flex', gap: '8px' }}>
                                <input type="text" id="common_name" name="common_name" value={common_name.common_name} required onChange={handleChange} />

                                <button
                                    type="button"
                                    className="btn-search"
                                    onClick={searchPlantAPI}
                                    disabled={loading}
                                    style={{ padding: '0 12px', background: '#022b2', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}

                                >
                                    {loading ? "..." : "🔍"}
                                </button>
                            </div>
                        </div>


                        <div className="input-card">
                            <label htmlFor="dateArrival">Date of Arrival:</label>
                            <input type="date" id="datearrival" name="dateArrival" required onChange={handleChange} />
                        </div>

                        <div className="input-card">
                            <label htmlFor="datePlanted">Date Planted:</label>
                            <input type="date" id="dateplanted" name="datePlanted" onChange={handleChange} />
                        </div>

                        <div className="input-card">
                            <label htmlFor="plantLocation">Plant Location:</label>
                            <select id="plantLocation" name="plantLocation" required onChange={handleChange}>
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="greenhouse">Greenhouse</option>
                            </select>
                        </div>

                        <div className="input-card">
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
                        </div>

                        <div className="input-card">
                            <label htmlFor="plantSize">Plant Size (inches):</label>
                            <input type="number" id="plantSize" name="plantSize" min="0" required onChange={handleChange}></input>
                        </div>

                        <div className="input-card notes-card">
                            <label htmlFor="notes">Notes:</label>
                            <textarea id="notes" name="notes" rows="4" onChange={handleChange}></textarea>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={() => window.history.back()}>Back</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </header>
        </div>
    )
}

export default AddPlants 