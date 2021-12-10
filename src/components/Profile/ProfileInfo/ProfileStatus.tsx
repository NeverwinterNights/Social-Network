import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

type  StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


type  StatusStateType = {
    status: string
    editMode: boolean
}


export const ProfileStatus = (props: StatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const onEditMode = () => {
        setEditMode(true)
    }
    const ofEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }


    const onStatusKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            ofEditMode()
        }

    }

    return (
        <div>
            {!editMode
                ?
                <div>
                    <span onDoubleClick={onEditMode}>{props.status}</span>
                </div>
                :
                <div>
                    <input onKeyPress={onStatusKeyPress} onChange={onStatusChange} autoFocus={true} onBlur={ofEditMode}
                           value={status}/>
                </div>
            }
        </div>

    );

}



