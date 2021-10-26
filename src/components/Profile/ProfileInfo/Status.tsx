import React, {ChangeEvent} from 'react';

type  StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


class Status extends React.Component <StatusPropsType> {


    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({editMode: true})

    }

    deActivatedEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivatedEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default Status

