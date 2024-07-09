import { FC } from "react";
import { Modal } from "react-bootstrap";

const SuccessModal: FC<{
  show?: boolean;
  close?: any;
  footerOff?: boolean;
  text?: string;
}> = ({ show, close, footerOff, text }) => {
  return (
    <Modal
      show={show}
      onHide={() => close(false)}
      className="modal fade"
      id="buySuccessleModal"
    >
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title">Success</h5>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => close(false)}
          ></button>
        </div>
        <div className="modal-body ">
          <div className="auth-form">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="identity-upload"
            >
              <div className="identity-content">
                <span className="icon">
                  <i className="icofont-check"></i>
                </span>
                <p>
                  {text
                    ? text
                    : "Congratulation. Your transaction is successful"}{" "}
                </p>
              </div>
            </form>
            {!footerOff && (
              <div className="card-footer text-center">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    close();
                  }}
                  href="#"
                >
                  Go to Transaction
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
