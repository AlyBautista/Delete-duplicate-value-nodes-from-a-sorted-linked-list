function removeDuplicates(llist) {
     if (llist === null) {
        return null;
    }
    let current = llist;

    while (current !== null && current.next !== null) {
        if (current.data === current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return llist;
}

