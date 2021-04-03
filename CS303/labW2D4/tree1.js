//=========================================About Tree================================
const abe = new TreeNode('Abe');
    const homer = new TreeNode('Homer'); 
    const bart = new TreeNode('Bart');
    const lisa = new TreeNode('Lisa');
    const maggie = new TreeNode('Maggie');
     abe.descendents.push(homer); 
    homer.descendents.push(bart, lisa, maggie);
    function contains(root,target){
      if(root.value===target){
          return true;
      }
      else{
          for(let value of root.descendents ){
            return  contains(value,target)
          }
          return false
      }
  }
  
  function findSubtree(root,target){
      if(root.value===target){
          return root;
      }
      else{
          for(let value of root.descendents ){
            return  findSubtree(value,target)
          }
          return 
      }
  }
  function  treeModifier(root, modiferFunc){
       if(root.value)
           root.value= modiferFunc(root)
          for(let node of root.descendents ){
               treeModifier(node,modiferFunc)
          }
      }
  
  function allCaps(node){
     return node.value.toUpperCase()
  }
  function addStar(node){
      return "***"+node.value+"***"
  }
  function reverseValue(node){
      let reverse=""
      for(let i=node.value.length-1;i>=0;i--){
          reverse+=node.value[i]
      }
      return reverse;
  }
  function treeCollector(root,collector=[]){
      if(root.value)
           collector.push(root.value)
          for(let node of root.descendents ){
              treeCollector(node,collector)
          }
          return collector
  }
  function TreeNode(value) { 
      this.value = value;
      this.descendents = []; 
  }
     console.log(contains(abe,"Bart"))
     console.log(contains(abe,"Getachew"))
     console.log(findSubtree(abe,"Homer"))
     treeModifier(abe,allCaps)
     console.log(homer)
     treeModifier(abe,addStar)
     console.log(homer)
     treeModifier(abe,reverseValue)
     console.log(homer)
     console.log(treeCollector(abe))

     //==========================================LinkedList=====================
     function ListNode(value,next){
      this.value=value,
      this.next=next
      
  }
  function findListNode(node,target){
      if(node.next===null)
            return null
      else if(node.value===target)
         return node
     
     return findListNode(node.next,target)   
  }
     
      const maggie = new ListNode('Maggie',null);
      const lisa = new ListNode('Lisa',maggie);
      const bart = new ListNode('Bart',lisa);
      const homer = new ListNode('Homer',bart); 
      const abe = new ListNode('Abe',homer);
      const head=new ListNode("head",abe)
      console.log("print all the lists homer ")
      console.log(findListNode(head,"Homer"))
