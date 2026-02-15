import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'skillObject',
  title: 'Skill',
  type: 'object',
  fields: [
    defineField({
      name: 'category',
      title: 'Category title',
      type: 'string',
      placeholder: 'Ex: Active, Passive, Buff, etc.',
    }),
    defineField({
      name: 'subcategory',
      title: 'SubCategory title',
      type: 'string',
      placeholder: 'Ex: Sledger, etc.',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
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
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              description: 'Se não preenchido, utilizará o nome configurado na skill',
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'portableTextWithColors',
              description: 'Se não preenchido, utilizará a descrição configurada na skill',
            }),
          ],
        },
      ],
    }),
  ],
})
