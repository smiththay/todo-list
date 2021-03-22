Filtering and dynamic rendering
————————————————————
Objective: To make a to-do list that is capable of adding task, deleting task and marking completed task. 


Class App (parent)
  Constructor()
	super
	have an array of task[];
	this.state= where I define state upon render

   setState()
	 to show # of items left 
         to render “all”  state
         To show “active” task 
  
    componentDidMount()
	use local storage to get state
    localStorage.getItem
        if else statement

    componentDidUpdate()
	use local storage to set item
    localStorage.setItem
 
  //addTask() 
   push into task array

 //checkTask
  if clicked then put line through

  //deleteTask() 
    remove from task array
  //checkedTask() 
  
  //showAll() 
  this is the default state

  //showActive() 
   if task has not been checked 
    then display state as all tasks not checked

  //showCompleted
    if tasks have been checked 
    then display state as all task that are checked
  //clearCompleted() 
    if tasks have been checked 
    then change state to remove all checked tasks

	
    render()
	Current view
	    use bootstrap to render empty input field
	    use bootstrap to render header
	    use bootstrap to render container for tasks	(maybe table for task or unordered list)
	    use bootstrap to render info bar on bottom	
	    use bootstrap to render number of un-complete task
	    use bootstrap to create button(add, delete, checked, show all, show active, show completed, clear completed)		
	    