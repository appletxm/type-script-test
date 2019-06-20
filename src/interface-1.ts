let defObj = {size: 10, label: "Size 10 Object" }

function printlabel(labeObj: {label: string}) {
  console.info('printlabel:', labeObj.label)
}

printlabel(defObj)