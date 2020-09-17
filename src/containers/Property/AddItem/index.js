import React, {useState, useEffect} from 'react';
import M from "materialize-css";

const PropertyAddItem = () => {

  let modalRef;
  const [isKeyWithOwner, setIsKeyWithOwner] = useState(true);

  useEffect(() => {
    const initializeModal = () => {
      const options = {
        onOpenStart: () => {
          console.log("Open Start");
        },
        onOpenEnd: () => {
          console.log("Open End");
        },
        onCloseStart: () => {
          console.log("Close Start");
        },
        onCloseEnd: () => {
          console.log("Close End");
        },
        // inDuration: 250,
        // outDuration: 250,
        // opacity: 0.5,
        dismissible: false,
        // startingTop: "4%",
        // endingTop: "10%"
      };
      M.Modal.init(modalRef, options);
    };
    initializeModal();
  }, [modalRef]);

    return (
      <>
        <button data-target="add-item-modal" className="btn right waves-effect modal-trigger black">Add Property</button>
        <div ref={Modal => {modalRef = Modal;}} id="add-item-modal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Add a New Property</h4>
                <div class="col s12 m6">
                  <h5>Location</h5>
                    <div class="card">
                        <div class="card-content">
                        <p>Building Name, Shop/Office No, Floor (Optional)</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                  <h5>Area</h5>
                    <div class="card">
                        <div class="card-content">
                        <p>Maintenance (@ Per/SqF), Covered area, Super area, Cabin (Quantity), Work station (Quantity)</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                  <h5>Owner details</h5>
                    <div class="card">
                        <div class="row card-content">
                          <div class="input-field col s12">
                            <input placeholder="Owner's Name" id="owner_name" type="text" />
                            <label htmlFor="owner_name">Name</label>
                          </div>
                          <div class="input-field col s12">
                            <input placeholder="Owner's Contact Number" id="owner_contact" type="text" />
                            <label htmlFor="owner_contact">Contact Number</label>
                          </div>

                          <div class="input-field col s12 center">
                            <div class="switch">
                              <label>
                                Key with Owner
                                <input checked={!isKeyWithOwner} type="checkbox" onChange={()=> setIsKeyWithOwner(!isKeyWithOwner)} />
                                <span class="lever"></span>
                                Key with Broker
                              </label>
                            </div>
                          </div>
                          {isKeyWithOwner ? (<></>) : (
                            <>
                              <div class="input-field col s12">
                                <input placeholder="Broker's Name" id="broker_name" type="text" />
                                <label htmlFor="broker_name">Name</label>
                              </div>
                              <div class="input-field col s12">
                                <input placeholder="Broker's Contact Number" id="broker_contact" type="text" />
                                <label htmlFor="broker_contact">Contact Number</label>
                              </div>
                            </>
                          )}
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                  <h5>Rent</h5>
                    <div class="card">
                        <div class="card-content">
                        <p>If Rented, From Date to Date, Tenant, Name, Contact no</p>
                        <p>Sale value, Purchase, name, Contact no</p>
                        </div>
                    </div>
                </div>
          </div>
          <div class="modal-footer">
            <a className="left modal-close red btn">
              Cancel
            </a>
            <a className="modal-close black btn">
              Save
            </a>
          </div>
        </div>
      </>
    )
}

export default PropertyAddItem
