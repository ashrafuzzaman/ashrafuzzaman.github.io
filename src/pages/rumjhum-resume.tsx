import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import TwoColumnResume from '../components/resume/two-column-resume';


const ResumePage = ({ data }) => {
  const profile = data.rumjhumYaml;

  const ProfilePicture = () => (
    <StaticImage
      formats={["auto", "webp"]}
      src="../images/rumjhum-profile.jpg"
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
    rumjhumYaml {
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
      }
      skills {
        title
        items
      }
      experiences {
        title
        company
        from
        till
        brief {
          html
        }
      }
    }
  }
`
