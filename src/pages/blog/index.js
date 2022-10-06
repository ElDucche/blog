import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { useEffect } from 'react'

const BlogPage = ({data}) => {
    useEffect(() => {
    // On crée un 'observer" qui prend en arguments tous les objets qu'il va croiser et les appeler 'entries'
        const observer = new IntersectionObserver((entries) => {
            // Pour chacune d'elle on va voir si elle est a l'intersection du point de vue ou non :
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    // Dans ce cas on lui applique la classe show.
                    entry.target.classList.add('show');
                }
            });
        });

        // on selectionne tous les objets ayant la classe hidden.
        const hiddenElements = document.querySelectorAll(".scrollHidden");
        // On applique notre observer a tous les hidden elements et on observe chacun d'entre eux.
        hiddenElements.forEach((el) => observer.observe(el));
    });

    return(
        <Layout pageTitle={"My Blog Posts"} >
                <ul className='mt-4'>
                    {
                        data.allMdx.nodes.map((node) => (
                        <Link to={`/blog/${node.frontmatter.slug}`}>
                          <article key={node.id} className="m-4 p-4 md:w-[28rem] w-80 lg:w-[32rem] mx-auto bg-gray-100 dark:bg-gray-700 rounded border border-gray-900 dark:border-gray-50 dark:hover:shadow-[3px_3px_0_1px_rgba(255,255,255,0.3)] hover:shadow-[3px_3px_0_1px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-200 scrollHidden">
                              <h2 className='text-3xl font-semibold'>{node.frontmatter.title}</h2>
                              <p className='text-gray-400 font-light text-xs'>Posted: {node.frontmatter.date}</p>
                              <p>{node.excerpt}</p>
                          </article>
                        </Link>
                        ))
                    }
                </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title={"Blog"} />

export default BlogPage;