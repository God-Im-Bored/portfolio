import React from 'react'

import {Card, CardHeader, CardContent} from '@material-ui/core'

const SkillsCard = ({title, images}) => {
  return (
    <Card raised id="skills-card-single">
      <CardHeader id="card-header" title={title} />
      <CardContent>
        {images.map((image) => (
          <img id="tech-img" key={image} src={image} />
        ))}
      </CardContent>
    </Card>
  )
}

export default SkillsCard