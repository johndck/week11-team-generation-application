// TODO: Write code to define and export the Employee class

class Employee {
  constructor(fullname, id, email) {
    this.fullname = fullname;
    this.id = id;
    this.email = email;
  }

  // 4 functions on the employee class
  getName() {
    return this.fullname;
  }

  getId() {
    return this.id;

    //
  }

  getEmail() {
    return this.email;
    //
  }

  getRole() {
    return "Employee";
    //
  }
}

// export the Employee class

module.exports = Employee;
