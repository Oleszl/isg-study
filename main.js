var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AccessLevel;
(function (AccessLevel) {
    AccessLevel[AccessLevel["fullAccess"] = 1] = "fullAccess";
    AccessLevel[AccessLevel["limitedAccess"] = 2] = "limitedAccess";
    AccessLevel[AccessLevel["basicAccess"] = 3] = "basicAccess";
})(AccessLevel || (AccessLevel = {}));
var User = /** @class */ (function () {
    function User(firstName, lastName, email, password, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    return User;
}());
var Moderator = /** @class */ (function (_super) {
    __extends(Moderator, _super);
    function Moderator(firstName, lastName, email, password, numberOfReports) {
        var _this = _super.call(this, firstName, lastName, email, password, 'Moderator') || this;
        _this.numberOfReports = numberOfReports;
        return _this;
    }
    Moderator.prototype.editProfile = function (firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        console.log('Profile information was successfully updated');
    };
    Moderator.prototype.viewInfo = function () {
        return "Moderator info: \n \n            firstName: ".concat(this.firstName, "\n            lastName: ").concat(this.lastName, "\n            email: ").concat(this.email, "\n            role: ").concat(this.role, "\n            ");
    };
    Moderator.prototype.setNumberOfReports = function (numberOfReports) {
        this.numberOfReports = numberOfReports;
    };
    Moderator.prototype.getNumberOfReports = function () {
        return this.numberOfReports;
    };
    return Moderator;
}(User));
var Administrator = /** @class */ (function (_super) {
    __extends(Administrator, _super);
    function Administrator(firstName, lastName, email, password, accessLevel) {
        var _this = _super.call(this, firstName, lastName, email, password, 'Administrator') || this;
        _this.accessLevel = accessLevel;
        return _this;
    }
    Administrator.prototype.editProfile = function (firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        console.log('Profile information was successfully updated');
    };
    Administrator.prototype.viewInfo = function () {
        return "Administrator info: \n \n            firstName: ".concat(this.firstName, "\n            lastName: ").concat(this.lastName, "\n            email: ").concat(this.email, "\n            password: *sensetive data*\n            role: ").concat(this.role, "\n            ");
    };
    Administrator.prototype.setAccessLevel = function (accessLevel) {
        this.accessLevel = accessLevel;
    };
    Administrator.prototype.getAccessLevel = function () {
        return this.accessLevel;
    };
    return Administrator;
}(User));
var administrator = new Administrator('Oles', 'Sukmanovskyi', 'oles.sukmanovskyi@gmail.com', '1234', AccessLevel.fullAccess);
console.log(administrator.viewInfo());
administrator.editProfile('Oles', 'Sukmanovskyi', 'oles@gmail.com', '321');
administrator.setAccessLevel(AccessLevel.limitedAccess);
console.log(administrator.viewInfo());
console.log('Access Level: ' + administrator.getAccessLevel());
var moderator = new Moderator('Ivan', 'Ivanov', 'ivan@gmail.com', '32154$', 7);
moderator.editProfile('Ivan', 'Ivanov', 'ivanov@gmail.com');
moderator.setNumberOfReports(15);
console.log(moderator.viewInfo());
console.log(moderator.getNumberOfReports());
//# sourceMappingURL=main.js.map