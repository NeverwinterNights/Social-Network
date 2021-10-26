import React, {ChangeEvent} from 'react';

type  StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


type  StatusStateType = {
    status: string
    editMode: boolean
}


class Status extends React.Component <StatusPropsType, StatusStateType> {


    state  = {
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

    componentDidUpdate = (prevProps: StatusPropsType, prevState: StatusStateType) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

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

