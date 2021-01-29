import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, Plain, types } from 'react-bricks'
import { textColors } from '../colors'
import blockNames from '../blockNames'

const FaqQuestion: types.Brick = () => {
  return (
    <div className="leading-6 mb-12">
      <Text
        propName="question"
        renderBlock={(props: any) => (
          <p
            className={classNames(textColors.gray900, 'font-extrabold mb-1')}
            {...props.attributes}
          >
            {props.children}
          </p>
        )}
        placeholder="Answer..."
      />
      <RichText
        propName="answer"
        renderBlock={(props: any) => (
          <p className={textColors.gray800} {...props.attributes}>
            {props.children}
          </p>
        )}
        placeholder="Answer..."
      />
    </div>
  )
}

FaqQuestion.schema = {
  name: blockNames.Faq,
  label: 'Question',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    question: Plain.deserialize('Why you should change your CMS today?'),
    answer: Plain.deserialize(
      'Because you want to have top user experience and top developer experience.'
    ),
  }),
}

export default FaqQuestion