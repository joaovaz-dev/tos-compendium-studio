import {defineType} from 'sanity'
import * as React from 'react'

const colorIcon = (label: string, background: string, color: string) => () =>
  React.createElement(
    'span',
    {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
        fontSize: 11,
        borderRadius: 3,
        backgroundColor: background,
        color,
      },
    },
    label,
  )

export default defineType({
  name: 'portableTextWithColors',
  title: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Green', value: 'green', icon: colorIcon('G', '#e6fbeb', '#1b6b2b')},
          {title: 'Red', value: 'red', icon: colorIcon('R', '#ffecec', '#a21b1b')},
          {title: 'Blue', value: 'bBlue', icon: colorIcon('B', '#eaf5ff', '#0b5aa6')},
          {title: "Purple", value: 'purple', icon: colorIcon('P', '#f3e5ff', '#6b1ba2')},
          {title: "Golden", value: 'golden', icon: colorIcon('G', '#fff8e1', '#a67c00')},
        ],
      },
    },
  ],
})
