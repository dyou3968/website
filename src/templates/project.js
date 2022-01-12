import React from 'react';
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'

import Layout from "../components/Layout"


const Project = ({ data }) => {
  const { markdownRemark: project } = data;
  const photo = getImage(project.frontmatter.photo)

  // const memberPhoto = getImage()

  let memberInfo = project.frontmatter.members;
  

  return (
    <Layout>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">{project.frontmatter.title}</h1>
            </Col>
          </Row>
        </Container>

      <Container className="mt-md-1 pt-md-4">        
        <Card className = 'mb-5 opacity-20 align-items-center' style={{backgroundColor: '#F32E43',color: '#fff',backgroundOpacity:50}}>
          <Card.Body>           
            <GatsbyImage image={photo} alt={project.frontmatter.title} style = {{border:20}}/>
          </Card.Body>
        </Card>

        <small class = 'padded-multipline'style = {{margin: 10, fontSize: 20}}>
          {project.frontmatter.description}
        </small>
        <Row>
          
          <h1 style = {{marginTop:30}}>Members</h1>  
            
        </Row>
      </Container>        

      <Container>
        <Row> 
          {memberInfo.map((member) => {
              member = member.substring(1,member.length - 1);
              const info = member.split(',');
              let imgSrc = info[2];
              imgSrc = imgSrc.replace(' ','')
              return (
                <Col md={3} sm={6} xs={6} className="p-0">
                  <img src = {imgSrc} style = {{width:200,height:200}} alt={info[1]}/>
                  <p style = {{textAlign:'center'}}>{info[0]}</p>
                </Col> 
              )
            })}
        </Row>
              
      </Container>

    </Layout>

    

    


  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};


export default Project

export const pageQuery = graphql`
  query ProjectByTitle($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        description
        members
        photo {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 800, height: 400, quality: 100, layout: CONSTRAINED)
          }
        }        
      }
    }
  }
`
