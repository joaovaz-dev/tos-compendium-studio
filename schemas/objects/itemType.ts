import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'item',
  title: 'item',
  type: 'object',
  fields: [
    defineField({
      name: 'item',
      title: 'Item',
      type: 'reference',
      to: [{type: 'equipment'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'itemOptions',
      title: 'Item Options',
      type: 'portableTextWithColors',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'portableTextWithColors',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
