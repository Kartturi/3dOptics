import PropTypes from "prop-types"
import React from "react"

const ServiceRightText = props => {
  const current = props.current

  const content = {
    content1: (
      <div>
        <h3>Buustia talokauppoille</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
          sapiente commodi dolores provident voluptatibus magnam. Fugit
          repudiandae, fuga laborum exercitationem harum recusandae officia
          aspernatur non et atque quod ut!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
          sapiente commodi dolores provident voluptatibus magnam. Fugit
          repudiandae, fuga laborum exercitationem harum recusandae officia
          aspernatur non et atque quod ut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
          sapiente commodi dolores provident voluptatibus magnam. Fugit
          repudiandae, fuga laborum exercitationem harum recusandae officia
          aspernatur non et atque quod ut!
        </p>
      </div>
    ),
    content2: (
      <div>
        <h3>Anna asiakkaiden tutustua tiloihisi etukäteen</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
          sapiente commodi dolores provident voluptatibus magnam. Fugit
          repudiandae, fuga laborum exercitationem harum recusandae officia
          aspernatur non et atque quod ut!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
          sapiente commodi dolores provident voluptatibus magnam. Fugit
          repudiandae, fuga laborum exercitationem harum recusandae officia
          aspernatur non et atque quod ut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
          sapiente commodi dolores provident voluptatibus magnam. Fugit
          repudiandae, fuga laborum exercitationem harum recusandae officia
          aspernatur non et atque quod ut!
        </p>
      </div>
    ),
  }

  return content[`content${Number(current)}`]
}

export default ServiceRightText
