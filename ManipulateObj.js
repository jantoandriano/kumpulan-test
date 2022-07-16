function manipulateStudentRecord(obj, operation, prop, newValue) {
  if (operation === "delete") {
    if (obj && obj.hasOwnProperty(prop)) {
      delete obj[prop];
    }
    return obj;
  } else if (operation === "edit") {
    if (obj && obj.hasOwnProperty(prop)) {
      obj[prop] = newValue;
      return obj;
    } else {
      return obj;
    }
  }
}
