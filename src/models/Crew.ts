import { Resolver } from "../resolvers/utils"
import { Credit } from "./Credit"

export class Crew {
  // eslint-disable-next-line no-undef
  [key: string]: any
  // eslint-disable-next-line camelcase
  credit_type?: string = `crew`
  static credit: Resolver<Crew, {}, Promise<Credit>> = (
    { credit_id: id },
    { ...rest },
    { dataSources },
    info
  ) => dataSources.TMDB.credit({ id, ...rest }, info)

  job!: string
  department!: string

  constructor(init: Crew) {
    Object.assign(this, init)
  }
}
