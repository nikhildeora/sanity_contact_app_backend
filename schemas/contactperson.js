import {defineField,defineType} from "sanity";


export default defineType({
    name : "contactrefrence",
    type : "document",
    title : "Contact Refrence",
    fields : [
        defineField({
            name : "refrence",
            type : "string",
            title : "Refrence",
        }),
        defineField({
            name : "mobilenumber",
            type : "number",
            title : "Refrence Person Contact"
        })
    ]
})