function birarySearch(numberList, target) {
  let start = 0;
  let end = numberList.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2); ;

    let element = numberList[mid];

    if (target === element) {
      return mid;
    } else if (target > element) {
      start = mid + 1;
    } else if (target < element) {
      end = mid - 1;
    }
  }
  return -1;
}

let array = [
  18, 23, 29, 36, 43, 47, 52, 56, 62, 71, 76, 81, 88, 93, 105, 110, 116, 121,
  128, 133, 138, 145, 151, 159, 166, 172, 179, 185, 190, 197, 204, 212, 220,
  229, 237, 242, 248, 253, 259, 267, 275, 283, 291, 299, 305, 310, 318, 325,
  331, 336, 344, 352, 359, 367, 372, 377, 382, 387, 393, 398, 402, 409, 415,
  421, 428, 432, 439, 446, 453, 458, 463, 470, 477, 483, 489, 495, 501, 508,
  515, 522, 529, 535, 543, 548, 555, 562, 569, 575, 582, 589, 595, 600, 605,
  611, 618, 625, 630, 638, 642, 650, 657, 663, 669, 676, 681, 687, 692, 699,
  705, 710,
];

console.log(birarySearch(array, 76));