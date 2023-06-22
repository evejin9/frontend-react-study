import React from 'react';

function TabContents(props) {
  const { showTabIndex } = props;

  let TabContent;
  
  if (showTabIndex === 0) {
    TabContent = <div>탭 내용 1</div>;
  } else if (showTabIndex === 1) {
    TabContent = <div>탭 내용 2</div>;
  } else if (showTabIndex === 2) {
    TabContent = <div>탭 내용 3</div>;
  } else if (showTabIndex === 3) {
    TabContent = <div>탭 내용 4</div>;
  }

  return (
    <>
      {TabContent}
    </>
  );
}

export default TabContents;