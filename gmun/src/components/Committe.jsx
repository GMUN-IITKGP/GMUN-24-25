import React, { useState } from 'react';
import NavBar from './Navbar'; // Ensure this import matches the correct file name (case-sensitive)

// Committee Page Component
const Committe = () => {
    const committees = ['DISEC', 'UNHRC', 'UNSC'];
    const [selectedCommittee, setSelectedCommittee] = useState(committees[0]);
    const agenda = 'Sample agenda text...';
    const executiveBoard = { chairPerson: 'Chair Name', viceChairPerson: 'Vice Chair Name' };
    
    const delegates = {
        'Afghanistan': ['Aayushi Dipankar'],
        'Albania': ['Anas Ahmed'],
        // Add other countries and their delegates...
    };

    // Committee Selector Component
    const CommitteeSelector = () => (
        <select value={selectedCommittee} onChange={(e) => setSelectedCommittee(e.target.value)}>
            {committees.map((committee, index) => (
                <option key={index} value={committee}>{committee}</option>
            ))}
        </select>
    );

    // Agenda Component
    const Agenda = () => (
        <div>
            <h2>Agenda</h2>
            <p>{agenda}</p>
        </div>
    );

    // Executive Board Component
    const ExecutiveBoard = () => (
        <div>
            <h2>Executive Board</h2>
            <p>Chairperson: {executiveBoard.chairPerson}</p>
            <p>Vice Chairperson: {executiveBoard.viceChairPerson}</p>
        </div>
    );

    // Secretariat Component
    const Secretariat = () => (
        <div>
            <h2>Secretariat</h2>
            {/* Add secretariat information here */}
        </div>
    );

    // Allocation Matrix Component
    const AllocationMatrix = () => {
        const [selectedCountry, setSelectedCountry] = useState(null);

        const handleCountryClick = (country) => {
            setSelectedCountry(country);
        };

        return (
            <div>
                <h2>Allocation Matrix</h2>
                <WorldMap onCountryClick={handleCountryClick} />
                {selectedCountry && (
                    <div>
                        <h3>Delegates from {selectedCountry.name}</h3>
                        <ul>
                            {delegates[selectedCountry.name]?.map((delegate, index) => (
                                <li key={index}>{delegate}</li>
                            )) || <li>No delegates available for this country.</li>}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    // World Map Component
    const WorldMap = ({ onCountryClick }) => {
        const handleClick = (country) => {
            onCountryClick(country);
        };

        return (
            <div>
                <h3>World Map</h3>
                {/* Replace with an actual map implementation */}
                <div onClick={() => handleClick({ name: 'Example Country' })}>Clickable Map</div>
            </div>
        );
    };

    return (
        <div>
            <CommitteeSelector />
            <Agenda />
            <ExecutiveBoard />
            <Secretariat />
            <AllocationMatrix />
        </div>
    );
};

export default Committe; // Ensure the export matches the file name

