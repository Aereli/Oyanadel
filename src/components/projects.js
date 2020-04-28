import React from "react"
import Single from "../components/single"
import ShipShip from "../images/shipship.png"

const Projects = () => {
  return (
    <div style={{ height: `80vh`, width: `90vw`, backgroundColor: `white` }}>
      <h1>project box</h1>
      <Single value={ShipShip} />
      <div></div>
    </div>
  )
}

export default Projects
