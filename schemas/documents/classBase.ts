import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'classBase',
  title: 'Base Class',
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
      name: 'image',
      title: 'Class Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextWithColors',
    }),

    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'skill'}],
          options: {
            filter: ({document}: any) => {
              const id = document?._id?.replace(/^drafts\./, '')

              if (!id) {
                return {
                  filter: '_id == null',
                }
              }

              return {
                filter: `
                  class._ref == $id ||
                  $id in classes[]._ref
                `,
                params: {id},
              }
            },
          },
        },
      ],
    }),
  ],
})
