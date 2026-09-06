import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const apiKey = import.meta.env.VITE_TREFLE_API_KEY
const apiBaseUrl = import.meta.env.VITE_TREFLE_API_URL || (import.meta.env.DEV ? "/api" : "https://trefle.io/api/v1")

const profile = {
    scientific_name: "",
    dateArrival: "",
    datePlanted: "",
    plantLocation: "",
    potSize: "",
    plantSize: 0,
    notes: ""
}

function AddPlants() {
    const navigate = useNavigate()
    const [selectedPlant, setSelectedPlant] = useState(null)

    // todo:state 
    const [scientific_name, setscientific_name] = useState(profile) //useState is the changes in real time
    const [loading, setLoading] = useState(false);


    function handleChange(event) {
        const { name, value } = event.target //event.target triggers usestate and targets what being manipulated 
        console.log(value)

        setscientific_name(current => ({
            ...current,
            [name]: value,
        }))
    }

    // todo:search
    async function searchPlantAPI() {
        if (!scientific_name.scientific_name) {
            alert("Please type in a name so we can help with your search!");
            return;
        }

        setLoading(true);

        try {
            const params = new URLSearchParams({
                token: apiKey,
                q: scientific_name.scientific_name,
            });
            const url = `${apiBaseUrl}/plants/search?${params}`;
            console.log("Fetching from Trefle API...");

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Trefle API returned ${response.status}`);
            }
            const data = await response.json();

            console.log("API Query Results received:", data);

            if (data?.data && data.data.length > 0) {

                console.log("Raw plants array from API:", data.data);

                const userSearch = scientific_name.scientific_name.toLowerCase();

                const smartMatch = data.data.find(plant => {
                    const commonName = plant.scientific_name ? plant.scientific_name.toLowerCase() : "";
                    const scientificName = plant.scientific_name ? plant.scientific_name.toLowerCase() : "";
                    return commonName.includes(userSearch) || scientificName.includes(userSearch);

                });

                const topResult = smartMatch || data.data[0];

                setSelectedPlant(topResult)

                setscientific_name(current => ({
                    ...current,
                    scientific_name: topResult.scientific_name,
                }));

                alert(`Found: ${topResult.scientific_name}! Autofilling matching profile parameters`);
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

        if (!selectedPlant) {
            alert("Please search for and select a plant first.")
            return
        }

        const newPlant = {
            ...scientific_name,

            // Information from Trefle
            trefleId: selectedPlant.id,
            common_name: selectedPlant.common_name,
            scientific_name: selectedPlant.scientific_name,
            slug: selectedPlant.slug,
            image_url: selectedPlant.image_url,

            // Care information (with fallbacks if not available)
            watering: selectedPlant.watering || "Not specified",
            light: selectedPlant.light || "Not specified",
            soil_type: selectedPlant.soil_type || "Not specified",

            // Unique ID for this plant in your collection helps to make sure two id are not the same
            id: crypto.randomUUID()
        }

        console.log("Adding plant:", newPlant)

        // Get existing plants
        const existingPlants =
            JSON.parse(localStorage.getItem("myPlants")) || []

        // Add this plant
        const updatedPlants = [
            ...existingPlants,
            newPlant
        ]

        // Save
        localStorage.setItem(
            "myPlants",
            JSON.stringify(updatedPlants)
        )

        // Go to My Plants
        navigate("/myplants")
    }

    return (
        <div>
            <header className="addplants">
                <h1>Add Plants</h1>
                <form className="plant-profile" onSubmit={handleSubmit}>

                    <div className="form-grid">
                        <div className="input-card">
                            <label htmlFor="scientific_name">Plant Name:</label>
                            <div className="search-input-wrapper" style={{ display: 'flex', gap: '8px' }}>
                                <input type="text" id="scientific_name" name="scientific_name" value={scientific_name.scientific_name} placeholder='Enter Scientific Name...' required onChange={handleChange} />

                                <button
                                    type="button"
                                    className="btn-search"
                                    onClick={searchPlantAPI}
                                    disabled={loading}
                                    style={{ padding: '0 12px', background: '#233d2a', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}

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