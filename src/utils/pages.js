const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const { getMarkdownTitle, buildMarkdown, buildMarkdownFiles } = require('./markdown')

const {
  rootPath,
  staticPagesPath,
  pagesPath,
  templatesPath,
  srcPostsPath
} = require('../constants/paths')

const buildStaticPage = async (filename) => buildMarkdown(rootPath)(staticPagesPath, filename)

const buildStaticPages = async () => {
  const files = fs.readdirSync(staticPagesPath)
  return buildMarkdownFiles(buildStaticPage)(files)
}

const buildPage = async (filename, data) => new Promise(async (resolve, reject) => {
  try {
    console.log(`> Building ${filename}.ejs...`)
    const content = await ejs.renderFile(path.resolve(pagesPath, `${filename}.ejs`), data)
    const page = await ejs.renderFile(path.resolve(templatesPath, 'page.ejs'), {
      ...data,
      pageBody: content
    })

    fs.writeFileSync(path.resolve(rootPath, `${filename}.html`), page, 'utf-8')
    resolve()
  } catch (err) {
    reject(err)
  }
})

const buildIndex = async posts => buildPage('index', {
  title: null,
  urlPath: '',
  pageTitle: 'Bienvenue sur le Blog de Prog\'',
  posts: posts.slice(0, Math.min(posts.length, 5))
})

const buildArchive = async posts => buildPage('archive', {
  title: 'Articles',
  urlPath: '/archive.html',
  pageTitle: 'Articles',
  posts
})

const buildPages = () => {
  const postFiles = fs.readdirSync(srcPostsPath)
  const posts = postFiles
    .map(file => ({
      title: getMarkdownTitle(path.resolve(srcPostsPath, file)),
      date: file.split('-').slice(0, 3).join('/'),
      link: `https://falconpilot.github.io/posts/${file.replace(/\.markdown/, '.html')}`
    }))
    .sort((p1, p2) => p1.date > p2.date ? -1 : 1)

  return Promise.all([
    buildIndex(posts),
    buildArchive(posts)
  ])
}

module.exports = {
  buildStaticPages,
  buildPages
}
