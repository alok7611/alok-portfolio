import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'data',
      source: 'home/**/*.yml',
      schema: z.object({
        name: z.string(),
        title: z.string().optional(),
        subtitle: z.string().optional()
      })
    })
  }
})
