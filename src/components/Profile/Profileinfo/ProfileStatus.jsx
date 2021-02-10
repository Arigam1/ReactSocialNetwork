import React from "react";


class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })    // this.forceUpdate()      На крайняК!
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })    // this.forceUpdate()      На крайняК!
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;