import React, { useState, useRef } from 'react'
import classnames from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import defaultTheme from 'prism-react-renderer/themes/github'

import styles from './styles.module.css'

export default ({ children, className: languageClassName }) => {
  const target = useRef(null)
  const button = useRef(null)

  const language = languageClassName.replace(/language-/, '')

  const [isRunning, setIsRunning] = useState(false)

  const handleRunCode = () => {
    if (isRunning) {
      window.location.reload()
    }

    Function(target.current.innerText)()
    setIsRunning(true)
  }

  const runButton = (
    <button
      ref={button}
      type="button"
      className={classnames(styles.runButton)}
      onClick={handleRunCode}
    >
      {isRunning ? 'Stop' : 'Run'}
    </button>
  )

  const codeBlock = ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps,
  }) => (
    <div className={classnames(className, styles.codeBlock)}>
      <div ref={target} className={styles.codeBlockLines} style={style}>
        {tokens.map((line, i) => {
          const lineProps = getLineProps({ line, key: i })
          return (
            <div key={i} {...lineProps}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <Highlight
      {...defaultProps}
      theme={defaultTheme}
      code={children}
      language={language}
    >
      {(props) => (
        <div className={styles.codeBlockContent}>
          {runButton}
          {codeBlock(props)}
        </div>
      )}
    </Highlight>
  )
}
