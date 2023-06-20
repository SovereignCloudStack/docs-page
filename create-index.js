const fs = require('fs')
const path = require('path')

const docsDir = path.join(__dirname, 'docs') // Path to the docs folder
const jsonFilePath = path.join(__dirname, 'docs.package.json') // Path to the JSON file

// Read JSON data from the file
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))

function createIndexFileRecursive (directory, level = 1) {
  if (level === 2) {
    const indexPath = path.join(directory, 'index.mdx')

    const fileContent = `${path.basename(directory)}\n`

    // Find the object where item.repo contains the fileContent value (case-insensitive search)
    const matchingObject = jsonData.find(item => {
      console.log(`item.repo: ${item.repo.toLowerCase()}`)
      console.log(`fileContent: ${fileContent.toLowerCase()}`)
      return item.repo.endsWith(fileContent)
    })

    const jsonDataContent = matchingObject ? `URL: https://github.com/${matchingObject.repo}` : 'No matching object found'

    const content = `---
title: ${fileContent.replace(/-/g, ' ')}
editUrl: ${jsonDataContent}
description: To make it great
layer: IaaS
url: "https://github.com/"
last_commit: gestern
---

import DocCardList from "@theme/DocCardList";
import Paragraph from "/src/components/Paragraph.tsx";

| title                                    | description                                     | layer                                    | url                                  | last commit                                   |
| ---------------------------------------- | ----------------------------------------------- | ---------------------------------------- | ------------------------------------ | --------------------------------------------- |
| <Paragraph content={frontMatter.title}/> | <Paragraph content={frontMatter.description} /> | <Paragraph content={frontMatter.layer}/> | <a href={frontMatter.url}>GitHub</a> | <Paragraph content={frontMatter.last_commit}/> |

## Table of Contents

<DocCardList />

`

    fs.writeFileSync(indexPath, content)
    console.log(`Created ${indexPath}`)
  }

  // Recursively process subdirectories
  fs.readdirSync(directory).forEach(file => {
    const filePath = path.join(directory, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      createIndexFileRecursive(filePath, level + 1)
    }
  })
}

// Recursively create index.md files in the docs directory
createIndexFileRecursive(docsDir)
