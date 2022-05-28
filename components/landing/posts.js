import React from 'react'
import Container from '../container'
import Link from 'next/link'

export default function Posts() {
  return (
    <section id="blog">
      <Container>
        <div className="pt-8 pb-16  md:py-16 border-b-2 border-stone-200 dark:border-sub-dark flex-col md:flex-row-reverse">
          <h2 className="text-center text-xl font-bold mb-8">
            I also wite some article in my spare time
          </h2>
          <h5 className="text-center">
            <Link href="/blog">
              <a className="underline">Click here to open the blog page</a>
            </Link>
          </h5>
        </div>
      </Container>
    </section>
  )
}
