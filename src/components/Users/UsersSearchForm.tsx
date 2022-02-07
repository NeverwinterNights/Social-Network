import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reduсer";
import {useSelector} from "react-redux";
import {StateReduxType} from "../../redux/redux-store";


type  UsersSearchFormPropsType = {
    OnFilterHandler: (filter: FilterType) => void
}


type  FormType = {
    term: string
    friend: "true" | "false" | "null"
}

export const UsersSearchForm = React.memo((props: UsersSearchFormPropsType) => {

    const filter = useSelector<StateReduxType, FilterType>(state => state.usersPage.filter)


    // const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    //     const filter: FilterType = {
    //         term: values.term,
    //         friend: values.friend === "null" ? null : values.friend === "true" ? true : false
    //     }
    //
    //
    //     props.OnFilterHandler(filter)
    //     setSubmitting(false)
    // }


    return (
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={{term: filter.term, friend: String(filter.friend)}}
                validate={values => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const filter: FilterType = {
                        term: values.term,
                        // friend: values.friend === "null" ? null : values.friend === "true" ? true : false
                        friend: values.friend === "null" ? null : values.friend === "true"
                    }
                    props.OnFilterHandler(filter)
                    setSubmitting(false)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only Followed</option>
                            <option value="false">UnFollowed</option>
                        </Field>


                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})