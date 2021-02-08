import React from 'react'
import { Image, Plain, Text, types } from 'react-bricks'
import classNames from 'classnames'
// import { FiTwitter } from 'react-icons/fi'

import Container from '../layout/Container'
import blockNames from '../blockNames'

export interface TitleProps {
  size?: 'medium' | 'large'
}

const Title: types.Brick<TitleProps> = ({ size = 'large' }) => {
  return (
    <Container>
      <div
        className={classNames(
          'text-3xl',
          { 'sm:text-5xl': size === 'large' },
          { 'sm:text-4xl': size === 'medium' }
        )}
      >
        <Text
          propName="title"
          renderBlock={prop => {
            return (
              <h1
                className={classNames(
                  'text-left font-normal text-gray-700 tracking-tight'
                )}
                style={{ lineHeight: '60px' }}
              >
                {prop.children}
              </h1>
            )
          }}
          placeholder="Type a title..."
        />
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex">
          <Image
            propName="authorImage"
            alt=""
            imageClassName={classNames('rounded-full', 'w-12', 'mr-2')}
          />
          <div className="flex flex-col">
            <Text
              propName="author"
              renderBlock={prop => {
                return <div className="text-gray-400">{prop.children}</div>
              }}
              placeholder="Type an author..."
            />
            <div className="flex text-gray-400">
              <div>data</div>
              <div>minuti da leggere</div>
            </div>
          </div>
        </div>
        {/* <button className=" items-end">
          <FiTwitter className=" w-7 h-7 text-gray-400 items-end" />
        </button> */}
      </div>
    </Container>
  )
}
Title.schema = {
  name: blockNames.Title,
  label: 'Blog title',
  getDefaultProps: () => ({
    title: Plain.deserialize(
      'Open Sourcing the Netflix Domain Graph Service Framework: GraphQL for Spring Boot'
    ),
    author: Plain.deserialize('Matteo Frana'),
    authorImage: {
      src:
        'https://images.reactbricks.com/original/4a14877f-223a-4988-8279-6d2940885ce4.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/4a14877f-223a-4988-8279-6d2940885ce4.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-200.jpg 200w',
      alt: 'Matteo',
      seoName: 'matteo',
    },
  }),
}
export default Title