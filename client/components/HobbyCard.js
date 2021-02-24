import React from 'react'

import {Card, CardContent} from '@material-ui/core'

const HobbyCard = ({name, images}) => {
  return (
    <Card raised id="hobby-card-single">
      <CardContent>
        {images.map((image) => (
          <img id="tech-img" key={image} src={image} />
        ))}
      </CardContent>
    </Card>
  )
}

export default HobbyCard