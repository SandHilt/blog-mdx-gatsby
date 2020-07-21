import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav } from "../components"

/** @type {React.FC} */
export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
  </ContainerWrapper>
)
