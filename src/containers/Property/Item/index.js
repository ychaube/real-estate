import React from 'react'

const PropertyItem = ({data}) => {
    const {buildingName, floor, facing, address, amount, cabin, workStation, isAC, isPantry, isWashroom, isFreeHold } = data;

    const renderDetail = (value, name) => {
      return (
        <div className="col s6 m3 center grey-text">
          <h5 className="black-text">{value}</h5> {name}
        </div>
      );
    };

    const getFloorSuffix = (i) => {
        let j = i % 10,
            k = i % 100;
        if (j === 1 && k !== 11) {
            return i + "st";
        }
        if (j === 2 && k !== 12) {
            return i + "nd";
        }
        if (j === 3 && k !== 13) {
            return i + "rd";
        }
        return i + "th";
    }

    const renderAmenities = (value, trueName, falseName) => {
      return (
        <div className="col s6 m3 center">
          {value 
            ? (<span className="green-text"><i class="material-icons">check</i>{trueName}</span>)
            : (<span className="red-text"><i class="material-icons">close</i>{falseName}</span>)}
        </div>
      );
    };

    return (
        <div class="col s12">
          <div class="card">
            <div class="card-content">
              <span class="card-title">{`${buildingName} in ${address}`}</span>
              <h6 className="green-text">Rs {amount}</h6>
              <div className="row">
                {renderDetail(getFloorSuffix(floor), "Floor")}
                {renderDetail(facing, "Facing")}
                {renderDetail(cabin, "Cabin")}
                {renderDetail(workStation, "Work-Station")}
              </div>
              <div className="row">
                {renderAmenities(isAC, "A/C", "Non-A/C")}
                {renderAmenities(isPantry, "Pantry", "No Pantry")}
                {renderAmenities(isWashroom, "Washroom", "No Washroom")}
                {renderAmenities(isFreeHold, "Free Hold", "No Free-Hold")}
              </div>

              {/* <div className="row">
              {isAC 
                    ? (<div class="chip green white-text">Air-Conditioned</div>)
                    : (<div className="chip red white-text">Non Air-Conditioned</div>)
                  }
                  {isPantry 
                    ? (<div className="chip green white-text">Pantry</div>)
                    : (<div className="chip red white-text">No Pantry</div>)
                  }
                  {isWashroom
                    ? (<div className="chip green white-text">Washroom</div>)
                    : (<div className="chip red white-text">No Washroom</div>)
                  }
                  {isFreeHold
                    ? (<div className="chip green white-text">Free Hold</div>)
                    : (<div className="chip red white-text">No Free Hold</div>)
                  }
              </div> */}
            </div>
            {/* <div class="card-action green">
                <h6 className="white-text">Rs {amount}</h6>
                <a href="#">Add to Favorite</a>
                <a href="#">View Details</a>
            </div> */}
          </div>
        </div>
    )
}

export default PropertyItem

// Building Name / Floor / Facing / Address
// Area / Maintenance Charges / Amount
// Cabin / Work station / AC/Non-AC / Pantry / Washroom / Free Hold


// Building Name in Address
// amount  area  1bhk/2bhk
// details