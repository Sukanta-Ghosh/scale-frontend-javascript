//object
let config = {
  appName: "scaler.com",
  database: {
    host: "127.0.0.1",
    name: "mainDb",
    user: "root",
    pwd: "admin",
  },
};

/**
 * mutation/changes we can do on object ->
 * **/

/** create a new prop */
config.tempServer = "127.0.0.18";
console.log(config);
/* {appName: 'scaler.com', database: { host: '127.0.0.1', name: 'mainDb', user: 'root', pwd: 'admin' },
  tempServer: '127.0.0.18'} */

/** delete prop and update prop */
delete config.database.pwd;
config.appName = "interviewbit.com";
console.log(config);
/* {appName: 'interviewbit.com', database: { host: '127.0.0.1', name: 'mainDb', user: 'root' },
  tempServer: '127.0.0.18'} */

/** reassign whole object */
config = 10;
console.log(config); //10

/************ Reassignment -> const variable *******/
/***const -> only the address of object is freezed but not it's properties**/
const config = {
  appName: "scaler.com",
  database: {
    host: "127.0.0.1",
    name: "mainDb",
    user: "root",
    pwd: "admin",
  },
};

config.tempServer = "127.0.0.18"; // adding prop
delete config.database.pwd; // deleting prop
config.appName = "interviewbit.com"; // updating prop
console.log(config);
/* {
  appName: 'interviewbit.com',
  database: { host: '127.0.0.1', name: 'mainDb', user: 'root' },
  tempServer: '127.0.0.18'
} */

//can i update, delete and add property with const ?
config = 10; //TypeError: Assignment to constant variable.
console.log(config);

/***************************
 * Agenda: new property should not be added on the first level.
 * update and delete can happen normally.
 * new property can be added from second levels
 ***************************/
const config = {
  appName: "scaler.com",
  database: {
    host: "127.0.0.1",
    name: "mainDb",
    user: "root",
    pwd: "admin",
  },
  extra: 10,
};

Object.preventExtensions(config);
Object.preventExtensions(config.database);
// notExtendableObj.database = Object.preventExtensions(notExtendableObj.database);
config.tempServer = "127.0.0.18";
config.database.newpwd = "fake";
config.appName = "interviewbit.com";
delete config.extra;
console.log(config);
/* {
  appName: 'interviewbit.com',
  database: { host: '127.0.0.1', name: 'mainDb', user: 'root', pwd: 'admin' }
} */

/*******
 * Note: Object.seal -> update but not delete / add
 * **/
const config = {
  appName: "scaler.com",
  database: {
    host: "127.0.0.1",
    name: "mainDb",
    user: "root",
    pwd: "admin",
  },
  extra: 10,
};

Object.seal(config);
Object.seal(config.database);
config.tempServer = "127.0.0.18";
config.database.newpwd = "fake";
delete config.extra;
delete config.database.pwd;
config.appName = "interviewbit.com";
console.log(config);
/* {
  appName: 'interviewbit.com',
  database: { host: '127.0.0.1', name: 'mainDb', user: 'root', pwd: 'admin' },
  extra: 10
} */

/*******
 * Note: Object.freeze -> you cannot update / delete / add
 * **/
const config = {
  appName: "scaler.com",
  database: {
    host: "127.0.0.1",
    name: "mainDb",
    user: "root",
    pwd: "admin",
  },
  extra: 10,
};
Object.freeze(config);
//Object.freeze(config.database);
config.tempServer = "127.0.0.18";
config.database.newpwd = "fake";
delete config.extra;
config.appName = "interviewbit.com";
console.log(config);
/* {
  appName: 'scaler.com',
  database: {host: '127.0.0.1', name: 'mainDb', user: 'root', pwd: 'admin', newpwd: 'fake'},
  extra: 10 } */

// HW : n-level : freeze, seal and preventExtension

/**
 * mutation/changes we can do on object ->
 * 1. reassign -> const,
 * 2. prevent create a prop -> object.preventExtension
 * 4. prevent remove and create -> Object.seal
 * 3. prevent create , update , delete -> Object.freeze
 *
 * all of this happen only on first level
 * **/
