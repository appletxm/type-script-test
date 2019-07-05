let passcode = "secret passcode"

class EmployeeNew {
  private _fullName: string

  fullName(): string {
    return this._fullName
  }

  // set fullName(newName: string) {
  //   if (passcode && passcode == "secret passcode") {
  //     this._fullName = newName;
  //   } else {
  //     console.log("Error: Unauthorized update of employee!")
  //   }
  // }
}

let employee = new EmployeeNew()

// employee.fullName = "Bob Smith"
// if (employee.fullName) {
//   alert(employee.fullName)
// }
