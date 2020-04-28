import React from "react"

const Single = props => {
  console.log("this is props", props)
  return (
    <>
      <div>
        <h1> this is the project componenet</h1>
      </div>
    </>
  )
}
export default Single

// const Lithography = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       lithoImage: file(relativePath: { eq: "litho-plate.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 150) {
//             aspectRatio
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   return <Img fluid={data.lithoImage.childImageSharp.fluid} alt="lithograph" />
// }

// export default Lithography
