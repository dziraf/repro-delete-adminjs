import express from "express"
import mongoose from "mongoose"

import { Category } from "./db"

const AdminJS = require("adminjs")
const AdminJSExpress = require("@adminjs/express")
const AdminJSMongoose = require("@adminjs/mongoose")
AdminJS.registerAdapter(AdminJSMongoose)

const start = async () => {
  await mongoose.connect('mongodb://rafal:password@localhost:27017/mongodb_repro');

  const app = express()
  const adminJs = new AdminJS({
    rootPath: "/admin",
    resources: [Category],
  })
  const router = AdminJSExpress.buildRouter(adminJs)

  app.use(adminJs.options.rootPath, router)
  app.listen(3000, () => {
    console.log('app started')
  })
}

start()
