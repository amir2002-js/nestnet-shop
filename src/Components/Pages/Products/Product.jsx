import { useLocation } from 'react-router-dom'

export default function Product() {
    let loc = useLocation();
    const id = loc.state.state
    console.log(loc.state.state);
  return (
    <div>{id}</div>
  )
}
