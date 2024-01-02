import { Express } from 'express'
import { bodyParser, cors, contentType } from '../middlewares'
import { resultRoute } from '../routes/result-routes'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
  app.use("/api/v1/results", resultRoute)
}
