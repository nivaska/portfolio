import React, { Component } from "react";
import Modal from "./modal";

class Toolbar extends Component {
  profileLink = "https://www.linkedin.com/in/nivas-k-22152b79/";
  gitLink = "https://github.com/nivaska?tab=repositories";

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalState: {},
    };
  }
  render() {
    return (
      <div className="toolbar-left">
        <ul>
          <li className="active-tab">
            <button className="btn-icon-large">
              <i className="far fa-copy"></i>
            </button>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-search fa-rotate-90"></i>
            </button>
          </li>
          <li>
            <button
              className="btn-icon-large"
              onClick={() =>
                this.setState({
                  showModal: true,
                  modalState: {
                    Content: "Would you like to open my Github profile?",
                    CancelAction: () => {
                      this.setState({ showModal: false });
                    },
                    OkAction: () => {
                      window.open(this.gitLink, "_blank");
                      this.setState({ showModal: false });
                    },
                  },
                })
              }
            >
              <i className="fas fa-code-branch"></i>
            </button>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-bug"></i>
            </button>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-terminal"></i>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button
              className="btn-icon-large"
              onClick={() =>
                this.setState({
                  showModal: true,
                  modalState: {
                    Content: "Would you like to open my LinkedIn profile?",
                    CancelAction: () => {
                      this.setState({ showModal: false });
                    },
                    OkAction: () => {
                      window.open(this.profileLink, "_blank");
                      this.setState({ showModal: false });
                    },
                  },
                })
              }
            >
              <i className="far fa-user-circle"></i>
            </button>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-cog"></i>
            </button>
          </li>
        </ul>

        <Modal
          Show={this.state.showModal}
          OkAction={this.state.modalState.OkAction}
          CancelAction={this.state.modalState.CancelAction}
        >
          {this.state.modalState.Content}
        </Modal>
      </div>
    );
  }
}

export default Toolbar;
