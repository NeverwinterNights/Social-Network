import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reduсer";


type  UsersSearchFormPropsType = {
    OnFilterHandler: (filter: FilterType) => void
}


type  FormType = {
    term: string
    friend: "true" | "false" | "null"
}

export const UsersSearchForm = React.memo((props: UsersSearchFormPropsType) => {


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
                initialValues={{term: '', friend: "null"}}
                validate={values => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const filter: FilterType = {
                        term: values.term,
                        friend: values.friend === "null" ? null : values.friend === "true" ? true : false
                    }
                    props.OnFilterHandler(filter)
                    setSubmitting(false)
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/> {/*имя согласовывается с
                         initialValues*/}
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