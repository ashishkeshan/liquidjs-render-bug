const { Liquid } = require('liquidjs');
import { readFile } from 'fs/promises'
import { beforeAll, expect, test } from 'vitest'
const yaml = require('js-yaml');

// Create a new Liquid engine
const liquid = new Liquid();

let yamlContent
beforeAll(async () => {
  const fileContents = await readFile('test.yml', 'utf8')
  yamlContent = yaml.load(fileContents)
})

test('contains valid liquid', () => {
  const { intro, sections } = yamlContent
  let toLint = { intro }
  for (const key in sections) {
    const section = sections[key]
    const label = `sections.${key}`
    section.forEach((part) => {
      if (Array.isArray(part)) {
        toLint = { ...toLint, ...{ [label]: section.join('\n') } }
      } else {
        for (const prop in section) {
          toLint = { ...toLint, ...{ [`${label}.${prop}`]: section[prop] } }
        }
      }
    })
  }

  for (const key in toLint) {
    if (!toLint[key]) continue
    expect(() => liquid.parse(toLint[key]), `${key} contains invalid liquid`).not.toThrow()
  }
})
