export const file = id => id
export const original = (id, _, { dataSources }) => dataSources.Images.original(id)
export const custom = (id, { dimensions }, { dataSources }) => dataSources.Images.custom(id, dimensions)

export const icon = (id, _, { dataSources }) => dataSources.Images.w45(id)
export const tiny = (id, _, { dataSources }) => dataSources.Images.w92(id)
export const small = (id, _, { dataSources }) => dataSources.Images.w154(id)
export const medium = (id, _, { dataSources }) => dataSources.Images.w185(id)
export const large = (id, _, { dataSources }) => dataSources.Images.w300(id)
export const huge = (id, _, { dataSources }) => dataSources.Images.w500(id)
