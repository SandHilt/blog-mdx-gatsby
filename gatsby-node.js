// exports.createPages = async function ({ actions, grapghql }) {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `

//   // Criar paginas paginadas para posts
//   const postPerPage = 3

//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         currentPage: i + 1,
//       },
//     })
//   })

//   // Criando blog posts
//   data.allMdx.edges.forEach(edge => {
//     const {
//       frontmatter: { slug },
//       id,
//     } = edge.node

//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: { id },
//     })
//   })
// }
