export const required: any = (value: any) => {
    return value ? undefined : "Field is required"
}




export const maxLengthCreator  = (maxLength: number) => (value: any): any=> {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined


}