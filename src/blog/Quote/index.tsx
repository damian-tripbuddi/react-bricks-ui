import React from 'react'
import { Plain, Text, types } from 'react-bricks'
import { bgColors } from '../../website/colors'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

interface QuoteProps {
  bg?: { color: string; className: string }
}

const Quote: types.Brick<QuoteProps> = ({ bg = bgColors.white.value }) => {
  return (
    <Section bg={bg}>
      <Container>
        <Text
          propName="quote"
          placeholder="Type the quote here..."
          renderBlock={(props: any) => {
            return (
              <div className=" text-3xl font-light pl-7 border-l border-pink-500 text-gray-400">
                {props.children}
              </div>
            )
          }}
        />
      </Container>
    </Section>
  )
}

Quote.schema = {
  name: blockNames.Quote,
  label: 'Quote',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    quote: Plain.deserialize(
      `Sometimes life is going to hit you in the head with a ReactBrick. Don't lose faith. - Steve Jobs`
    ),
  }),
}

export default Quote
