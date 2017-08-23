import {h} from 'preact';

export default function SearchBar(props) {
  return(
    <label className="bg-white w-100 flex items-center ba ph2 br2">
      <input type="search"
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="input-reset bn bg-transparent w-100 f5 pv2 ph1"
        style={"outline:none"}/>
      <span><i className="icon icon-search black-40"></i></span>
    </label>
  )
}
