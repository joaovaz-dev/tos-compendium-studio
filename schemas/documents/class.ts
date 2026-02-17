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
      name: 'classesBase',
      title: 'Classes Base',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'classBase'}],
        },
      ],
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
            filter: ({document}) => {
              const rawId = document?._id

              if (!rawId) {
                return {filter: '_id == ""'}
              }

              const classId = rawId.replace(/^drafts\./, '')

              return {
                filter: 'class._ref == $classId',
                params: {classId},
              }
            },
          },
        },
      ],
    }),
  ],
})
