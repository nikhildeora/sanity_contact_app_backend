import {defineField,defineType} from "sanity";


export default defineType({
    name : "contactDetail",
    type : "document",
    title : "ContactDetail",
    fields : [
     defineField({
       name : "companyname",
       type : "string",
       title : "Company Name"
    }),
      defineField({
        name : "personname",
        type : "string",
        title : "Person Name"
      }),
     defineField({
        name : "contactnumber",
        type : "number",
        title : "Contact Number"
     }),
     defineField({
      name : "refrenceperson",
      title : "Refrence Person",
      type : "reference",
      to : {type : "contactrefrence"}
     })    
    ]
})