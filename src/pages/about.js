import * as React from "react"
import { graphql } from "gatsby"
import { StructuredText } from 'react-datocms';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {MdEmail} from 'react-icons/md'

import {BsLinkedin, BsTwitter, BsFilePdf, BsBook} from 'react-icons/bs'

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Profile from "../assets/profile.svg"

const AboutPage = (props) => {


  const image = getImage(props.data.datoCmsPage.cover)
  const imageData = props.data.datoCmsPage.cover.fluid
  

  
 return (
  <Layout>
    <section>
   <div className="flex flex-row justify-center items-center w-full">
  <div className="hidden md:flex flex-row justify-center items-center md:w-1/2">
    <Profile width={300} />
    <GatsbyImage image={image} alt="cover" />
  </div>

<div className="flex flex-col text-headline font-thin md:w-1/2">
  <h2 className=" text-7xl font-black hover:text-black my-5">About + Contact</h2>
  <div className="structured"> 
        <StructuredText data={props.data.datoCmsPage.content} />
  </div>
      
</div>
</div>
</section>
<section className="border-t py-4 border-yellow">
  <div className="grid md:grid-cols-2">
    <div className="flex flex-row justify-center items-center">
    <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
                <div class="py-12">
                    <h2 class=" text-3xl font-black hover:text-black my-5">Drop me a line</h2>
                    <div class="mt-8 max-w-xl">
                      <div class="grid grid-cols-1 gap-8">
                        <label class="block">
                          <span class="text-gray-700">Full name</span>
                          <input
                            type="text"
                            required
                            name="name"
                            autocomplete="off"
                            class="
                              mt-0
                              block
                              w-full
                              px-0.5
                              border-0 border-b-2 border-gray-200
                              focus:ring-0 focus:border-black
                            "
                            placeholder=""
                          />
                        </label>
                        <label class="block">
                          <span class="text-gray-700">Your email address</span>
                          <input
                            type="email"
                            name="email"
                            required
                            autocomplete="off"
                            class="
                              mt-0
                              block
                              w-full
                              px-0.5
                              border-0 border-b-2 border-gray-200
                              focus:ring-0 focus:border-black
                            "
                            placeholder="john@example.com"
                          />
                        </label>
                       
                        <label class="block">
                          <span class="text-gray-700">What type of collaboration are you interested in?</span>
                          <select
                            class="
                              block
                              w-full
                              mt-0
                              px-0.5
                              border-0 border-b-2 border-gray-200
                              focus:ring-0 focus:border-black
                            "
                            name="collaboration"
                            required
                          >
                            <option>Consulting</option>
                            <option>Data Analytics, Visualization and similar</option>
                            <option>Technical Writing</option>
                            <option>Web Development</option>
                            <option>Other</option>
                          </select>
                        </label>
                        <label class="block">
                          <span class="text-gray-700">Please specify additional details</span>
                          <textarea
                            required
                            class="
                              mt-0
                              block
                              w-full
                              rounded-lg
                              px-0.5
                              border-0 border-b-2 border-gray-200
                              focus:ring-0 focus:border-black
                            "
                            rows="2"
                            name="message"
                          ></textarea>
                        </label>
                        
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    class="w-full bg-yellow hover:bg-white transition-all duration-500 hover:font-bold border-4 text-xl border-headline p-4 rounded-lg">Send message</button>
                </form>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text-3xl font-black hover:text-black my-5">Social Links</h2>
      <ul>
        <li>
        <RoughNotation type="box" show={true}  color="#ffd803">
          <MdEmail className=" inline text-headline p-2" size={32} /><span className="contacts">aleksendric#gmail.com</span>
        </RoughNotation>  
        </li>
        
        <li><MdEmail className=" inline text-headline p-2" size={32} /><span className="contacts">freethrowrs#gmail.com</span></li>
        <li>
        <RoughNotation type="highlight" show={true} animationDelay={2000} animationDuration={3000} color="#ffd803">
          <BsLinkedin className=" inline text-headline p-2" size={32} /><span className="contacts">aleksendric#gmail.com</span>
        </RoughNotation>
        </li>
        <li><BsTwitter className=" inline text-headline p-2" size={32} /> <span className="inline text-headline p-2">Twitter</span></li>
        <li><BsFilePdf className=" inline text-headline p-2" size={32} /> <span className="inline text-headline p-2">Curriculum</span></li>
        <li>
        <RoughNotation type="highlight" animationDelay={2000} show={true}  color="#ffd803">
          <BsBook className="inline text-headline p-2" size={32} /> <span className="inline text-headline p-2">The Book</span>
        </RoughNotation>
        </li>
      </ul>
    </div>
  </div>
</section>
   
  </Layout>
  )
  }
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export default AboutPage

export const query = graphql`
query AboutPageQuery {
  datoCmsPage(name: {eq: "about"}) {
    id
    cover {
      fluid {
        base64
        width
        height
        sizes
        src
        srcSet
      }
    }
    content {
      value
    }
  }
}

`