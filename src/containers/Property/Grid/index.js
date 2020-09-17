import React from 'react'
import PropertyItem from '../Item';
import PropertyAddItem from '../AddItem';

const PropertyGrid = ({type}) => {
    const property = [
        {
            buildingName: "Aditya Heights",
            floor: "2",
            facing: "North-East",
            address: "NSP",
            amount: "1,23,233",
            cabin: 5,
            workStation: 3,
            isAC: true,
            isPantry: true,
            isWashroom: false,
            isFreeHold: true,
        },
        {
            buildingName: "Nariman Point Building",
            floor: "1",
            facing: "East",
            address: "NSP",
            amount: "5,20,113",
            cabin: 15,
            workStation: 12,
            isAC: true,
            isPantry: false,
            isWashroom: false,
            isFreeHold: false,
        },
        {
            buildingName: "Birla Towers",
            floor: "5",
            facing: "North-East",
            address: "NSP",
            amount: "2,11,136",
            cabin: 1,
            workStation: 4,
            isAC: true,
            isPantry: false,
            isWashroom: true,
            isFreeHold: true,
        },
        {
            buildingName: "Goel Plaza",
            floor: "10",
            facing: "North-East",
            address: "NSP",
            amount: "99,152",
            cabin: 7,
            workStation: 10,
            isAC: true,
            isPantry: true,
            isWashroom: false,
            isFreeHold: true,
        },
    ];

    return (
        <div class="row">
            {property.map((item, i) => <PropertyItem key={i} data={item} />)}
        </div>
    )
}

export default PropertyGrid
