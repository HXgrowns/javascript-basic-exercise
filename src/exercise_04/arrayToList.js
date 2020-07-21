export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == undefined || array == null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length == 0) {
    throw new Error('Creating list from empty array');
  }
  let list = {}
  list.value = array[0];
  list.next = null;

  let point = list;
  for (let i = 1; i < array.length; i++) {
    point.next = {};
    point.next.value = array[i];
    point.next.next = null;
    point = point.next;
  }
  return list;
}
