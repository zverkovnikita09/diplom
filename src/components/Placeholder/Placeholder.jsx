import './Placeholder.css'

function Placeholder ({className, ...props}) {
  return <div className={`placeholder ${className}`} {...props}>
    <div className='placeholder__activity' />
  </div>
}

export default Placeholder;