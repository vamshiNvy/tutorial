import React from 'react';
import './index.css';

const TabItem = ({ tab, isActive, onClickTab }) => {
  const { tabId, displayText } = tab;
  const activeTabClassName = isActive ? 'active-tab-btn' : '';

  const onClickTabItem = () => {
    onClickTab(tabId);
  };

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
