import { useEffect, useState } from 'react'

function MySupplies() {
    const [supplies, setSupplies] = useState([])

    useEffect(() => {
        const savedSupplies = JSON.parse(localStorage.getItem("mySupplies")) || []
        setSupplies(savedSupplies)
    }, [])

    return (
        <header className="MySupplies">
            <h1>My Supplies</h1>

            {supplies.length === 0 ? (
                <p>You haven't added any supplies yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Supply Name</th>
                            <th>Date Purchased</th>
                            <th>Supply Type</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplies.map(supply => (
                            <tr key={supply.id}>
                                <td>{supply.supplyName}</td>
                                <td>{supply.datePurchased}</td>
                                <td>{supply.supplyType}</td>
                                <td>{supply.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </header>
    )
}

export default MySupplies













