import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'item',
  title: 'item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'itemOptions',
      title: 'Item Options',
      type: 'portableTextWithColors',
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'portableTextWithColors',
    }),
  ],
})
