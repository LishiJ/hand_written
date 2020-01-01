function LinkedList() {
  // Node辅助类，表示要加入列表的项，element是即将添加到列表的值，next是指向列表中下一个节点项的指针
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  // 向链表尾部追加元素
  this.append = function(element) {
    let node = new Node(element);
    let current;
    if (head === null) {
      // 列表中第一个节点
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next; // 找到最后一项，是null
      }
      current.next = node; // 给最后一项赋值
    }
    length++; // 更新列表的长度
  };

  // 从链表中移除指定位置元素
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      // 值没有越界
      let current = head;
      let previous,
        index = 0;
      if (position === 0) {
        //  移除第一项
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next; // 将previous与current的下一项连接起来，跳过current，从而移除
      }
      length--; // 更新列表的长度
      return current.element;
    } else {
      return null;
    }
  };

  // 在链表任意位置插入一个元素
  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      // 检查越界值
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        // 在第一个位置添加
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current; // 在previous与current的下一项之间插入node
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  // 把链表内的值转换成一个字符串
  this.toString = function() {
    let current = head,
      string = "";
    while (current) {
      string += current.element + " ";
      current = current.next;
    }
    return string;
  };

  // 在链表中查找元素并返回索引值
  this.indexOf = function(element) {
    let current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  // 从链表中移除指定元素
  this.remove = function(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  };
}
let list = new LinkedList();
list.append(1);
list.append(2);
console.log(list.toString()); // 1 2
list.insert(0, "hello");
list.insert(1, "world");
console.log(list.toString()); // hello world 1 2
list.remove(1);
list.remove(2);
console.log(list.toString()); // hello world
