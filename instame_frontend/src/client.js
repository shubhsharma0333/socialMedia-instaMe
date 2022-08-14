import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({                     
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-02-12",
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true

})

const builder = imageUrlBuilder(client);          //sanity's way to handle img
export const urlFor = (source) => builder.image(source)