import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        {["facebook", "instagram", "linkedin", "twitter"].map((name, key) => (
          <FooterSocialIcons {...{ key }}>
            <a
              href={`https://${name}.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data[name].publicURL} alt={`Logo do ${name}`}></img>
            </a>
          </FooterSocialIcons>
        ))}
        <p>&copy; 2020-{new Date().getFullYear()}. Todos os direitos reservados.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
