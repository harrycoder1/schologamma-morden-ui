export function getIdByName(nameToFind:string, data :any[]) {
  const foundObject = data.find((item) => item.name === nameToFind);
  return foundObject ? foundObject._id : null;
}

export function getNameById(idtoFindName :string, data:any[]) {
  const foundObject = data.find((item) => item._id === idtoFindName);
  return foundObject ? foundObject.name : null;
}

export function getObjectByID(idtoObject :string, data:any[]) {
  const foundObject = data.find((item) => item._id === idtoObject);
  return foundObject ? foundObject: undefined;
}
