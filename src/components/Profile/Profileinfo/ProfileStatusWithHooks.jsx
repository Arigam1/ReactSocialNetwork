import React, { useEffect, useState } from 'react';


const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  },
    [props.status]
  )

  const activateEditMode = () => {
    setEditMode(true)
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };


  // state = {
  //   editMode: false,
  //   status: this.props.status,
  // }

  // activateEditMode = () => {
  //   this.setState({
  //     editMode: true
  //   })    // this.forceUpdate()      На крайняК!
  // }
  // deactivateEditMode = () => {
  //   this.setState({
  //     editMode: false
  //   })    // this.forceUpdate()      На крайняК!
  //   this.props.updateStatus(this.state.status)
  // };


  // onStatusChange = (e) => {
  //   this.setState({
  //     status: e.currentTarget.value
  //   })
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status
  //     });
  //   }
  // };

  return (
    <div>
      {!editMode &&
        <div>
          <b>Status</b>: <span onDoubleClick={activateEditMode} >{status || '-------'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      }
    </div>
  )
}



export default ProfileStatusWithHooks;