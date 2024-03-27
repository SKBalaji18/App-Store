import './index.css'

const AppItem = props => {
  const {appDetail} = props
  const {appName, imageUrl} = appDetail

  return (
    <li className="app-container">
      <img className="app-icon" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
