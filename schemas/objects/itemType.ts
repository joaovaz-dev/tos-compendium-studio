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
  preview: {
    select: {
      title: 'itemOptions',
      fallbackTitle: 'item.name',
      media: 'item.image',
    },
    prepare(selection: any) {
      const {title: blocks, fallbackTitle, media} = selection

      const blocksToText = (blocksArr: any) => {
        if (!blocksArr) return ''
        return blocksArr
          .map((block: any) => {
            if (!block || !block.children) return ''
            return block.children.map((child: any) => child.text || '').join('')
          })
          .filter(Boolean)
          .join(' ')
          .substring(0, 80)
      }

      const text = blocksToText(blocks)
      return {
        title: text || fallbackTitle || 'Item',
        media,
      }
    },
  },
})
