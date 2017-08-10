import React, { PropTypes, PureComponent } from 'react'
import { Button, Dropdown, List, Icon } from 'semantic-ui-react'
import { stopPropagation } from 'utils'
import { PROJECT_DROPDOWN_OPTIONS, KEY_CODE } from 'constants'
import PinIcon from './PinIcon'
import IssueButton from './IssueButton'
import './Item.styl'

class Item extends PureComponent {
  handlePinClick = () => {
    const { pinned, onPin, onUnpin } = this.props

    return pinned
      ? onUnpin()
      : onPin()
  }

  render () {
    const { name, group, pinned, style, onActionClick, onClick } = this.props

    return (
      <List.Item
        tabIndex="0"
        style={style}
        className='App__Projects_Item'
        onKeyDown={(evt) => {
          if (evt.keyCode === KEY_CODE.SPACE) {
            evt.stopPropagation(evt)
            onClick(evt)
          }
        }}
        onClick={stopPropagation(onClick)}
      >
         <List.Content className='App__Projects_Item_Actions' floated='right'>
          <IssueButton onAction={onActionClick}/>
        </List.Content>
        <List.Header>
          <span title={name}>{name}</span> <PinIcon active={pinned} onClick={this.handlePinClick}/>
        </List.Header>
        <List.Description title={group}>{group}</List.Description>
      </List.Item>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
  pinned: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onPin: PropTypes.func,
  onUnpin: PropTypes.func,
  onActionClick: PropTypes.func
}

Item.defaultProps = {
  style: {}
}

export default Item
