module.exports = {
  inject: vars => {
    return (md, options) => {
      const originalRender = md.renderer.rules.fence

      md.renderer.rules.fence = function() {
        let result = originalRender.apply(null, arguments)

        const re = /\{\{(\w+)\}\}/
        const match = re.exec(result)

        if (match) {
          const token = match[0]
          const key = match[1]
          const replacer = new RegExp(token, 'g')

          result = result.replace(replacer, vars[key])
        }

        return result
      }
    }
  }
}
