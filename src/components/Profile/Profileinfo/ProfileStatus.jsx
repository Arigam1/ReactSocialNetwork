import React from "react";


class ProfileStatus extends React.Component {


  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateStatus(this.state.status)
  };


  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  };

  componentDidUpdate(prevProps, prevState) {
    debugger
    if (this.props.status !== prevProps.status) {
      debugger
      this.setState({
        status: this.props.status
      });
    }
  };


  render() {
    debugger
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode} >{this.props.status || '-------'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;