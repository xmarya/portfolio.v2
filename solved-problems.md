
1- Using useRef with <li> element only work for the last item in the list:

    explanation: useRef() hook doesn't create a aunique reference for each list item,
    tt will create the same reference for all the items because the reference (itemRef) created with useRef is overwritten in each iteration of the items.map() function. As a result, the reference will only point to the last rendered <li> element.

    solution: in short => making the ref an array of DOM elements like this => const targetRef = useRef([]);
        **note: the above line of code didn't come in the article, I came up with it because the code in the article had an error**
    the basic idea when using useRef on a list is that you need to have references for each item on the list. So, how are we going to do this? We can create an array of references dynamically for each item on the list. After that, you can use this reference to access a particular item on the list.

    **the source: https://dineshigdd.medium.com/how-to-use-react-useref-to-access-items-on-a-list-c5d33401d8dd**

