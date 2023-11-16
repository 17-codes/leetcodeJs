function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return null;
  }
  let head = new ListNode(null);
  let current = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.val = list1.val;
      list1 = list1.next;
    } else {
      current.val = list2.val;
      list2 = list2.next;
    }
    current.next = new ListNode();
    current = current.next;
  }
  while (list1) {
    current.val = list1.val;
    list1 = list1.next;
    if (list1) {
      current.next = new ListNode();
      current = current.next;
    }
  }
  while (list2) {
    current.val = list2.val;
    list2 = list2.next;
    if (list2) {
      current.next = new ListNode();
      current = current.next;
    }
  }
  return head;
};

let result = mergeTwoLists(l1, l2);
while (result) {
  console.log(result.val);
  result = result.next;
}
