import React from 'react';

type  StatusPropsType = {
    status: string
}


class Status extends React.Component <StatusPropsType> {
    state = {
        editMode: false
    }

    activatedEditMode() {
        this.setState({editMode: true})

    }

    deActivatedEditMode() {
        this.setState({editMode: false})
    }

    render() {

        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deActivatedEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default Status

