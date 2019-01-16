export const parseSVG = {
  methods: {
    parseStringSVGElement(svg) {
      let SVGElement = null
      if (svg.startsWith('<path')) {
        svg.trim().match(/\<[^>]*>/gi).map(
          (str, index, arr) => {
            if (index === 0 || index % 2 === 0) {
              SVGElement = str + arr[index + 1]
            }
          }
        )
      }
      return SVGElement
    },
    parseStringSVGElements(svg) {
      let SVGElementArray = []
      svg.trim().match(/\<[^>]*>/gi).map(
        (str, index, arr) => {
          if (index === 0 || index % 2 === 0) {
            SVGElementArray.push(str + arr[index + 1])
          }
        }
      )
      return SVGElementArray
    },
    addAtributeToStringSVGElement(svg, { key, value }) {
      return svg.replace(/\></, `${key}="${value}"><`)
    },
    parseSVGToJson(svg) {
      let SvgElementAttributes = {};
      let parser = new DOMParser();
      let element = svg.replace(/\s|\t|\n|\r|\v/g, '')
      element = element.replace('<path', '<path ')
      element = element.replace(/=/gi, '=')
      element = element.replace(/"/g, '" ')
      //console.log(element)
      console.log("parseSVGToJson ", parser.parseFromString(element, "image/svg+xml"))
      parser.parseFromString(element, "image/svg+xml")
      return parser
    }
  }
}