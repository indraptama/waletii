import {h} from 'preact';

export default function SearchBar(props) {
  return(
    <label className="bg-white w-100 flex items-center ba b--black-10 ph2">
      <input type="search"
        placeholder="search"
        onChange={props.onChange}
        className="input-reset bn bg-transparent w-100 f5 pv2 ph1"
        style={"outline:none"}/>
      <span><i className="icon icon-search"></i></span>
    </label>
  )
}
