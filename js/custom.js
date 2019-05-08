window.onload = () => {
  const codeBlocks = document.querySelectorAll('code.language-js')

  codeBlocks.forEach(block => {
    const btn = document.createElement('button')
    const code = block.textContent
    btn.innerHTML = 'Run'
    btn.onclick = () => {
      eval(code)

      btn.innerHTML = 'Stop'
      btn.onclick = () => {
        window.location.reload()
      }
    }
    block.appendChild(btn)
  })
}
