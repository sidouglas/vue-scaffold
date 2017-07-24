

const DESTINATION_FOLDER = process.env.out    || './src/components'
const VUE_TEMPLATE_FILE  = process.env.vue    || './scaffold.js'
const VUE_SCSS_FILE      = process.env.scss   || './scaffold.scss'
const COMPONENT_NAME     = process.env.name   || 'default'

const OUT_COMPONENT_FOLDER = `${DESTINATION_FOLDER}/${COMPONENT_NAME}`

const helpers = require('./helpers');
const Handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

Handlebars.registerHelper('kebabCase', function (name) {
  return helpers.kebabCase(name)
})

Handlebars.registerHelper('pascalCase', function (name) {
  return helpers.pascalCase(name)
})

function createFile(inFile, outFile){
  fs.readFile(inFile, {encoding: 'utf-8'}, (err, template) => {
    if (fs.existsSync(OUT_COMPONENT_FOLDER)) {
     let folderName = helpers.kebabCase(COMPONENT_NAME)
     let parsedVue = Handlebars.compile(template)(process.env)
     shell.ShellString(parsedVue).to(`${OUT_COMPONENT_FOLDER}/${outFile}`)
   }
 })
}


shell.mkdir('-p', OUT_COMPONENT_FOLDER );

createFile(VUE_TEMPLATE_FILE,'index.vue');

createFile(VUE_SCSS_FILE,'index.scss');