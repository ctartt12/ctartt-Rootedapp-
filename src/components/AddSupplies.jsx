import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const initialForm = {
    supplyName: '',
    datePurchased: '',
    supplyType: '',
    notes: '',
};

function AddSupplies() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialForm);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newSupply = {
            ...formData,
            id: crypto.randomUUID()
        }

        console.log('Submitted supply:', newSupply);

        // Get existing supplies
        const existingSupplies = JSON.parse(localStorage.getItem("MySupplies")) || []

        // Add this supply
        const updatedSupplies = [...existingSupplies, newSupply]

        // Save to localStorage
        localStorage.setItem("MySupplies", JSON.stringify(updatedSupplies))

        // Go to My Supplies
        navigate("/MySupplies")
    }

    return (
        <div>
            <header className="addsupplies">
                <h1>Add Supplies</h1>
                <form className="plant-profile" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="input-card">
                            <label htmlFor="supplyName">Supply Name:</label>
                            <input
                                type="text"
                                id="supplyName"
                                name="supplyName"
                                value={formData.supplyName}
                                placeholder="eg.Brand or Item Name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-card">
                            <label htmlFor="datePurchased">Date Purchased:</label>
                            <input
                                type="date"
                                id="datePurchased"
                                name="datePurchased"
                                value={formData.datePurchased}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-card" style={{ gridColumn: '1 / -1' }}>
                            <fieldset>
                                <legend>Supply Type</legend>

                                <label htmlFor="Soil">Soil:</label>
                                <input
                                    type="radio"
                                    id="Soil"
                                    name="supplyType"
                                    value="Soil"
                                    checked={formData.supplyType === 'Soil'}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="Fertilizer">Fertilizer:</label>
                                <input
                                    type="radio"
                                    id="Fertilizer"
                                    name="supplyType"
                                    value="Fertilizer"
                                    checked={formData.supplyType === 'Fertilizer'}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="PestControl">Pest Control:</label>
                                <input
                                    type="radio"
                                    id="PestControl"
                                    name="supplyType"
                                    value="PestControl"
                                    checked={formData.supplyType === 'PestControl'}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="Other">Other:</label>
                                <input
                                    type="radio"
                                    id="Other"
                                    name="supplyType"
                                    value="Other"
                                    checked={formData.supplyType === 'Other'}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>
                        </div>

                        <div className="input-card notes-card">
                            <label htmlFor="notes">Notes:</label>
                            <textarea
                                id="notes"
                                name="notes"
                                rows="4"
                                cols="50"
                                value={formData.notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" onClick={() => window.history.back()}>
                            Back
                        </button>

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default AddSupplies;