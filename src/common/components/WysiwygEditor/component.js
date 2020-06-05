import React from 'react'

import {Editor} from 'react-draft-wysiwyg'

const WysiwygEditor = () => (
  <div className="rdw-storybook-root">
    <Editor toolbarClassName="rdw-storybook-toolbar" wrapperClassName="rdw-storybook-wrapper" editorClassName="rdw-storybook-editor" />
  </div>
)

WysiwygEditor.propTypes = {
  // ...classesProps,
}

WysiwygEditor.defaultProps = {}

export default WysiwygEditor
