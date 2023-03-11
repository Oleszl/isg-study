type Role = "Administrator" | "Moderator" | "User";

enum AccessLevel {
  fullAccess = 1,
  limitedAccess,
  basicAccess,
}

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}

abstract class User implements IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: Role
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public abstract editProfile(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): void;

  public abstract viewInfo(): String;
}

class Moderator extends User {
  /** Інкапсуляція - полягає у обмеженні доступу до стану об'єкта(numberOfReports) напряму,
   *  ззовні можна взаємодіяти лише через public методи - get/set NumberOfReports()
   *
   */
  private numberOfReports: number;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    numberOfReports: number
  ) {
    super(firstName, lastName, email, password, "Moderator");
    this.numberOfReports = numberOfReports;
  }

  public editProfile(firstName: string, lastName: string, email: string): void {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    console.log("Profile information was successfully updated");
  }

  public viewInfo(): string {
    return `Moderator info: \n 
            firstName: ${this.firstName}
            lastName: ${this.lastName}
            email: ${this.email}
            role: ${this.role}
            `;
  }

  public setNumberOfReports(numberOfReports: number): void {
    this.numberOfReports = numberOfReports;
  }

  public getNumberOfReports(): number {
    return this.numberOfReports;
  }
}

/** Наслідування - за допомогою цього принципу ООП ми можемо описати клас на основі іншого класу (уже існуючого)
 *  тобто один об'єкт набуває властивостей іншого
 */
class Administrator extends User {
  private accessLevel: AccessLevel;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accessLevel: AccessLevel
  ) {
    super(firstName, lastName, email, password, "Administrator");
    this.accessLevel = accessLevel;
  }

  public editProfile(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): void {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    console.log("Profile information was successfully updated");
  }

  public viewInfo(): string {
    return `Administrator info: \n 
            firstName: ${this.firstName}
            lastName: ${this.lastName}
            email: ${this.email}
            password: *sensetive data*
            role: ${this.role}
            `;
  }

  public setAccessLevel(accessLevel: AccessLevel): void {
    this.accessLevel = accessLevel;
  }

  public getAccessLevel(): AccessLevel {
    return this.accessLevel;
  }
}

const administrator = new Administrator(
  "Oles",
  "Sukmanovskyi",
  "oles.sukmanovskyi@gmail.com",
  "1234",
  AccessLevel.fullAccess
);
console.log(administrator.viewInfo());
administrator.editProfile("Oles", "Sukmanovskyi", "oles@gmail.com", "321");
administrator.setAccessLevel(AccessLevel.limitedAccess);
console.log(administrator.viewInfo());
console.log("Access Level: " + administrator.getAccessLevel());

const moderator = new Moderator(
  "Ivan",
  "Ivanov",
  "ivan@gmail.com",
  "32154$",
  7
);
moderator.editProfile("Ivan", "Ivanov", "ivanov@gmail.com");
moderator.setNumberOfReports(15);
console.log(moderator.viewInfo());
console.log(moderator.getNumberOfReports());
