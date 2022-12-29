const customGridSchema = {
  title : "Custom Grid",
  type : "object",
  properties : {
    gridType : {
      title: "grid type",
      type: 'number',
      enum : [
        1,
        2,
        3,
        4
      ]
    }
  }
}

export default customGridSchema