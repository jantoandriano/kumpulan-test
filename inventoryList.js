function inventoryList() {
  // write your code here
  return {
    items: [],
    add: function (item) {
      if (this.items.includes(item)) {
        return;
      }
      this.items.push(item);
    },
    remove: function (item) {
      if (this.items.includes(item)) {
        let index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
        }
      }
    },
    getList: function () {
      return this.items;
    },
  };
}

function inventoryList2() {
  let items = [];

  const add = (param) => {
    if (items.includes(param)) {
      return;
    }
    items.push(param);
  };

  const remove = (param) => {
    items = items.filter((item) => item !== param);
  };

  const getList = () => {
    return items;
  };

  return { add, remove, getList };
}
