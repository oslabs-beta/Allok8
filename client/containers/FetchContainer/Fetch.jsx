import React, { useState } from "react";
import Modal from "react-modal";
import Graph from "../GraphContainer/Graph.jsx";
import useInputs from "./useInputs.jsx";
import useFetch from "./useFetch.jsx";

Modal.setAppElement("#container");

function fetch() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { value: api, bind: bindApi } = useInputs("");
  const { value: token, bind: bindToken } = useInputs("");
  const [res, setRes] = useFetch(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    useFetch();
  };

  return (
    <div className="fetch">
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          placeholder="API"
          type="api"
          value={api}
          {...bindApi}
          required
        />
        <br />
        <br />
        <input
          id="input"
          placeholder="TOKEN"
          type="token"
          value={token}
          {...bindToken}
          required
        />
        <br />
        <br />

        <button
          type="button"
          className="clickable"
          onClick={() => setModalIsOpen(true)}
        >
          FETCH
        </button>
      </form>

      <Modal
        closeTimeoutMS={2000}
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgb(24, 24, 24)",
          },
          content: {
            color: "#0F99FF",
            background: "rgb(14, 14, 14)",
            borderColor: "rgb(3, 47, 119)",
            boxShadow: "2px 4px 6px 6px rgb(3, 37, 94)",
          },
        }}
      >
        <Graph />
      </Modal>
    </div>
  );
}

export default fetch;
