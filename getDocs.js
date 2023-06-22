const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Read the contents of the "docs.package.json" file and remove all whitespace
const reposJson = fs
  .readFileSync('./docs.package.json', 'utf8')
  .replace(/\s/g, '')

// Parse the JSON and create an array of repositories
const repos = JSON.parse(reposJson)
const ghUrl = 'https://github.com/'

function renameFiles (dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isFile() && path.extname(file) === '.md') {
      const newFilePath = path.join(
        dir,
                `${path.basename(file, '.md')}.mdx`
      )
      fs.renameSync(filePath, newFilePath)
    } else if (stat.isDirectory()) {
      renameFiles(filePath) // Recursively rename files in subdirectories
    }
  })
}

function addDocMetaData (repo, dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isFile() && path.extname(file) === '.mdx') {
      const frontmatterContent = `---\neditUrl: "${ghUrl}${repo.repo}/edit/main/${file}"\n---\nimport EditThisPage from "@theme/EditThisPage";`

      const fileContent = fs.readFileSync(filePath, 'utf8')
      const modifiedContent = `${frontmatterContent}\n\n${fileContent}\n\n- <EditThisPage editUrl={frontMatter.editUrl} />`

      fs.writeFileSync(filePath, modifiedContent)
    }
  })
}

// Clone each repository, remove git folders and README files, and copy the docs to the target directory
repos.forEach((repo) => {
  const repoDir = `repo_to_be_edited/${repo.label}`

  // Clone the repository
  const cloneCommand = `git clone ${ghUrl + repo.repo} ${repoDir}`
  execSync(cloneCommand)

  // Remove git folders
  const removeGitCommand = `rm -rf ${repoDir}/.git`
  execSync(removeGitCommand)

  // Remove README files
  const removeReadmeCommand = `find ${repoDir} -name "README.md" | xargs rm -f`
  execSync(removeReadmeCommand)

  // Create the docusaurus subdirectory
  const subDirPath = path.join(repo.target, repo.label)
  fs.mkdirSync(subDirPath, { recursive: true })

  // Copy docs content from A to B
  const copyDocsCommand = `cp -r ${repoDir}/${repo.source} ${subDirPath}`
  execSync(copyDocsCommand)

  // Convert the files from .md to .mdx
  renameFiles(subDirPath)

  // Add the frontmatter and one import to the head of the documents and overwrite the existing ≙ add first four lines with the following content
  // TODO: Check existing frontmatter / editlink
  addDocMetaData(repo, subDirPath)

  // Remove the cloned repository
  const removeRepoCommand = 'rm -rf repo_to_be_edited'
  execSync(removeRepoCommand)
})

// TODO: add create-index.js script content
