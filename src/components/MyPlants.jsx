import { useEffect, useState } from 'react'

function MyPlants() {

    const [plants, setPlants] = useState([])

    useEffect(() => {
        const savedPlants = JSON.parse(localStorage.getItem("myPlants")) || []
        setPlants(savedPlants)
    }, [])

    const handleDelete = (id) => {
        const updatedPlants = plants.filter((plant) => plant.id !== id)
        setPlants(updatedPlants)
        localStorage.setItem("myPlants", JSON.stringify(updatedPlants))
    }

    return (
        <div>
            <header className="myplants">
                <h1>My Plants</h1>

                {plants.length === 0 ? (
                    <p>You haven't added any plants yet.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Plant</th>

                                <th>Name</th>
                                <th>Scientific Name</th>
                                <th>Arrival Date</th>
                                <th>Location</th>
                                <th>Pot Size</th>
                                <th>Plant Size</th>
                                <th>Watering</th>
                                <th>Light</th>
                                <th>Soil Type</th>
                                <th>Notes</th>
                                <th>Action</th>
                            </tr>
                        </thead>


                        <tbody>

                            {plants.map(plant => (

                                <tr key={plant.id}>

                                    <td>

                                        {plant.image_url ? (

                                            <img
                                                src={plant.image_url}
                                                alt={plant.scientific_name}
                                                width="100"
                                                height="100"
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                            />
                                        ) : (

                                            <span>No image</span>

                                        )}

                                    </td>

                                    <td>
                                        {plant.common_name || "Unknown"}
                                    </td>

                                    <td>
                                        {plant.scientific_name}
                                    </td>

                                    <td>
                                        {plant.dateArrival}
                                    </td>

                                    <td>
                                        {plant.plantLocation}
                                    </td>

                                    <td>
                                        {plant.potSize}
                                    </td>

                                    <td>
                                        {plant.plantSize}
                                    </td>
                                    {/*watering */}
                                    <td>
                                        {plant.growth?.minimum_precipitation?.mm
                                            ? `${plant.growth.minimum_precipitation.mm} mm (Yearly Base)`
                                            : plant.watering || "Not specified"}
                                    </td>

                                    {/* light*/}
                                    <td>
                                        {plant.growth?.light
                                            ? `${plant.growth.light}/10 (Sun Scale)`
                                            : plant.light || "Not specified"}
                                    </td>

                                    {/* soil type*/}
                                    <td>
                                        {plant.growth?.ph_minimum
                                            ? `pH ${plant.growth.ph_minimum} - ${plant.growth.ph_maximum}`
                                            : plant.soil_type || "Not specified"}
                                    </td>
                                    <td>
                                        {plant.notes || ""}
                                    </td>
                                    <td>
                                        <button className="delete-btn" onClick={() => handleDelete(plant.id)}>
                                            Delete
                                        </button>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </header>

        </div>
    )
}

export default MyPlants