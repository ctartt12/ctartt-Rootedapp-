import { useState } from 'react';

const initialForm = {
    supplyName: '',
    datePurchased: '',
    supplyType: '',
    notes: '',
};

function AddSupplies() {
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
        console.log('Submitted supply:', formData);
        window.history.back();
    }

    return (
        <div>
            <header className="AddSupplies">
                <h1>Add Supplies</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="supplyName">Supply Name:</label>
                    <input
                        type="text"
                        id="supplyName"
                        name="supplyName"
                        value={formData.supplyName}
                        onChange={handleChange}
                    />

                    <label htmlFor="datePurchased">Date Purchased:</label>
                    <input
                        type="date"
                        id="datePurchased"
                        name="datePurchased"
                        value={formData.datePurchased}
                        onChange={handleChange}
                    />

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

                    <label htmlFor="notes">Notes:</label>
                    <textarea
                        id="notes"
                        name="notes"
                        rows="4"
                        cols="50"
                        value={formData.notes}
                        onChange={handleChange}
                    ></textarea>

                    <button type="button" onClick={() => window.history.back()}>
                        Back
                    </button>

                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
}

export default AddSupplies;