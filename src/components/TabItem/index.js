import './index.css'

const TabItem = props => {
  const {tabs, isActive, onTabClick} = props
  const {tabId, displayText} = tabs
  const activebtnClass = isActive ? 'active-tab' : ''
  const activeClass = isActive ? 'active-tab-el' : ''
  const tabClick = () => {
    onTabClick(tabId)
  }
  return (
    <li className={`tab-list ${activeClass}`}>
      <button
        type="button"
        className={`tab-container ${activebtnClass}`}
        onClick={tabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
