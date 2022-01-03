import React from 'react'
import { types } from 'react-bricks/frontend'
import { bgColors } from '../../website/colors'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

const videoUrlPrefix: { [key: string]: string } = Object.freeze({
  youtube: 'https://www.youtube.com/embed/',
  vimeo: 'https://player.vimeo.com/video/',
})

export interface VideoProps {
  url: string
  platform: string
  bg?: { color: string; className: string }
}

const Video: types.Brick<VideoProps> = ({
  platform,
  url,
  bg = bgColors.white.value,
}) => {
  return (
    <Section bg={bg}>
      <Container>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            key="video iframe"
            width="100%"
            height="100%"
            src={`${videoUrlPrefix[platform]}${url}?rel=0`}
          />
        </div>
      </Container>
    </Section>
  )
}
Video.schema = {
  name: blockNames.Video,
  label: 'Video',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Video/index.tsx',
  getDefaultProps: () => ({
    url: 'A60xWr-nqv0',
    platform: 'youtube',
  }),
  sideEditProps: [
    {
      name: 'platform',
      label: 'Video platform',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'youtube', label: 'YouTube' },
          { value: 'vimeo', label: 'Vimeo' },
        ],
      },
    },
    {
      name: 'url',
      label: 'Video ID (i.e. "A60xWr-nqv0")',
      type: types.SideEditPropType.Text,
    },
  ],
}
export default Video
