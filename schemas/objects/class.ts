import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'classItem',
  title: 'Class Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Class Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Class Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
