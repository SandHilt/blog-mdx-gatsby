import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"

/** @type {React.FC} */
export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
    <Footer />
  </ContainerWrapper>
)
