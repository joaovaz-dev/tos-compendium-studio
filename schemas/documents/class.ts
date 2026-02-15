import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Class Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Class Type',
      type: 'string',
      options: {
        list: [
          {title: 'Base', value: 'base'},
          {title: 'Advance', value: 'advance'},
          {title: 'Special', value: 'special'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Class Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextWithColors',
    }),
  ],
})
