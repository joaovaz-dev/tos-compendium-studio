import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'build',
  title: 'Build',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rank',
      title: 'Rank',
      type: 'string',
      options: {
        list: [
          {title: 'S+', value: 's+'},
          {title: 'S', value: 's'},
          {title: 'A', value: 'a'},
          {title: 'B', value: 'b'},
          {title: 'C', value: 'c'},
          {title: 'D', value: 'd'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'class',
      title: 'Class Base',
      type: 'reference',
      to: [{type: 'classBase'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mode',
      title: 'Mode',
      type: 'string',
      options: {
        list: [
          {title: 'PvE', value: 'pve'},
          {title: 'PvP', value: 'pvp'},
          {title: 'Support', value: 'support'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableTextWithColors',
    }),

    defineField({
      name: 'mainImage',
      title: 'Thumbnail Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'portableTextWithColors',
    }),

    defineField({
      name: 'composition',
      title: 'Classes that Compose the Build',
      type: 'compositionSection',
    }),

    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'item'}],
    }),

    // defineField({
    //   name: 'skillsGroup',
    //   title: 'Skills',
    //   type: 'array',
    //   of: [{type: 'skillObject'}],
    // }),

    defineField({
      name: 'skillsRotation',
      title: 'Skills Rotation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Rotation Section Title',
              type: 'string',
            }),

            defineField({
              name: 'lineRotations',
              title: 'Line Rotations',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'lineRotationTitle',
                      title: 'Line Rotation Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'skills',
                      title: 'Skills in this Rotation Line',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'skill',
                              title: 'Skill',
                              type: 'reference',
                              to: [{type: 'skill'}],
                            }),
                            defineField({
                              name: 'quantity',
                              title: 'Quantity',
                              type: 'number',
                              validation: (Rule) => Rule.required().min(1),
                            }),
                          ],
                        },
                      ],
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'portableTextWithColors',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'considerations',
      title: 'Final Considerations',
      type: 'portableTextWithColors',
    }),

    defineField({
      name: 'videoSection',
      title: 'Video Content',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),

        defineField({
          name: 'url',
          title: 'Video URL',
          type: 'url',
        }),
      ],
    }),
  ],
})
