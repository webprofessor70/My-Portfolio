import React, { useState } from "react";

const Model = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to My Website</h1>
      <p>Click the button below to open the full-screen modal.</p>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="fullscreenModalLabel"
          aria-hidden="true"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-fullscreen" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="fullscreenModalLabel">
                  Full-Screen Modal
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h2>This is a full-screen modal!</h2>
                <p>
                  You can use this for a screen overlay effect or an important
                  notification.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
