import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
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
      title: 'Skill Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'class',
      title: 'Class',
      type: 'reference',
      to: [{type: 'class'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'type',
      title: 'Skill Type',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Passive', value: 'passive'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'maxLevel',
      title: 'Max Level',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextWithColors',
    }),

    defineField({
      name: 'passives',
      title: 'Passives',
      type: 'array',
      hidden: ({document}: {document?: any}) => document?.type !== 'active',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Passive Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'showInBuild',
              title: 'Show in Build',
              type: 'boolean',
              description: 'Whether to show this passive in the build details',
            }),
            defineField({
              name: 'image',
              title: 'Passive Image',
              type: 'image',
            }),
            defineField({
              name: 'description',
              title: 'Passive Description',
              type: 'portableTextWithColors',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
