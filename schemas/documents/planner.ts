import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'planner',
  title: 'Planner',
  type: 'document',
  fields: [
    {
      name: 'class',
      type: 'reference',
      to: [{type: 'class'}, {type: 'classBase'}],
    },
    {
      name: 'skillLines',
      title: 'Skill Lines',
      type: 'array',
      of: [
        {
          name: 'line',
          type: 'object',
          fields: [
            {
              name: 'skills',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'skill'}],
                  options: {
                    filter: ({document}: any) => {
                      const classId = document?.class?._ref

                      if (!classId) {
                        return {filter: '_id == ""'}
                      }

                      return {
                        filter: 'class._ref == $classId',
                        params: {classId},
                      }
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      className: 'class.name',
      classImage: 'class.image',
    },
    prepare({className, classImage}) {
      return {
        title: className ?? 'Planner',
        media: classImage,
      }
    },
  },
})
