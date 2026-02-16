import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'tierList',
  title: 'Tier List',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'baseClass',
      type: 'reference',
      to: [{type: 'classBase'}],
    },
    {
      name: 'mode',
      type: 'string',
      options: {
        list: [
          {title: 'PVE', value: 'pve'},
          {title: 'PVP', value: 'pvp'},
        ],
      },
    },
    {
      name: 'tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tier',
              type: 'string',
            },
            {
              name: 'classes',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'class'}],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})
