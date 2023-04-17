import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import TwoColumnResume from '../components/resume/two-column-resume';


const ResumePage = ({ data }) => {
  const profile = data.profileYaml;

  const ProfilePicture = () => (
    <StaticImage
      formats={["auto", "webp"]}
      src="../images/profile-pic-slim.webp"
      width={350}
      height={350}
      quality={100}
      alt="Profile picture"
      imgStyle={{
        objectFit: "contain"
      }}
    />
  );


  return (
    <TwoColumnResume profile={profile} profilePicture={<ProfilePicture />} />
  )
}

export default ResumePage
export const Head = () => <Seo title="Resume of A.K.M. Ashrafuzzaman Jitu" />
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    profileYaml {
      name
      summary {
        html
      }
      designation
      company
      contact {
        email
        phone
        location
      }
      links {
        linkedIn {
          alt
          url
        }
        github {
          alt
          url
        }
      }
      skills {
        title
        items
      }
    }
  }
`
