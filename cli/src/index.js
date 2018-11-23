#!/usr/bin/env node

import clear from 'clear'
import chalk from 'chalk'
import figlet from 'figlet'
import program from 'caporal'

const log = console.log

//Printing our magnificent name
clear()
log(
  chalk.yellow(
    figlet.textSync("Boilerplate", {
      font: 'Larry 3D',
      horizontalLayout: 'full',
    })
  )
)

program
  .version('0.1.0')
  .command("create")
  .argument("name", "New Application name")
  .option("-t <dir>", "Target direction")
  .action((args, options, logger) => {

    logger.info(args)
    logger.info(options)
    logger.info("Current Directory : " + process.cwd())

  })
    
program.parse(process.argv)


