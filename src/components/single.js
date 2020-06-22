import React, { useState } from "react"
import Img from "gatsby-image"
import "../styles/projects.css"
// import { Link } from "gatsby"
// import Video from "../images/test2.mp4"
import Modal from "@material-ui/core/Modal"

const Single = ({ image, title, url, description, sub, id, github, video }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="indivdual-project-container">
        <div className="line"></div>
        <Img key={id} fluid={image}></Img>
        <div className="inner-image">
          <p id="title">{title}</p>
          <p id="main-desc">{sub}</p>
          <div id="desc">
            <p>{description}</p>
          </div>
          <div id="links">
            <button className="button">
              <a href={github} target="_blank" rel="noopener noreferrer">
                View Github
              </a>
            </button>
            <button className="button">
              <a href={url} target="_blank" rel="noopener noreferrer">
                View The Site
              </a>
            </button>

            <button type="button" onClick={handleOpen}>
              Preview
            </button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropProps={{
                timeout: 500,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                autoPlay
                track="barhop video"
                style={{
                  width: "100%",
                  objectFit: "contain",
                }}
              >
                <source src={video} />
              </video>
            </Modal>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </>
  )
}
export default Single
