import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'compositionSection',
  title: 'Composition Section',
  type: 'object',
  fields: [
    defineField({
      name: 'classes',
      title: 'Classes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'class'}]}],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextWithColors',
    }),
  ],
})
