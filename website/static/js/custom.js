window.onload = () => {
  const codeBlocks = document.querySelectorAll('.prism-code.language-js')

  codeBlocks.forEach(block => {
    const btn = document.createElement('button')
    const code = block.innerText

    btn.innerHTML = 'Run'
    btn.onclick = () => {
      Function(code)()

      btn.innerHTML = 'Stop'
      btn.onclick = () => {
        window.location.reload()
      }
    }

    block.appendChild(btn)
  })
}
