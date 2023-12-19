import React from "react";
import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <React.Fragment>
      <button type="button" className="tag" style={selected ? tagStyle[tagName] : tagStyle.default} onClick={() => selectTag(tagName)}>
        {tagName}
      </button>
    </React.Fragment>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string,
  selectTag: PropTypes.func,
  selected: PropTypes.bool,
};

export default Tag;
