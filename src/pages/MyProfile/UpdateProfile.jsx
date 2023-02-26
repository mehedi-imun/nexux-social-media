import React from 'react';

const UpdateProfile = () => {
    return (
      <div>
        <input
          type="checkbox"
          id="profile-update-modal"
          className="modal-toggle"
        />
        <div className="modal backdrop-blur-sm  bg-black/40 ">
          <div className="modal-box absolute top-6 bottom-1 w-11/12 max-w-3xl bg-accent ">
            <label
              htmlFor="profile-update-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>

            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Save
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfile;