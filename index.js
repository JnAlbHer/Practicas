var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola mundo!',
    newTask:'',
    newWhen:'',
    todos:[]
  } ,
  methods:{
    addNewTodo: function () {

      this.todos.push(this.newTodoText)
      this.newTodoText = ''

    },
    addNewTask: function () {

      this.todos.push({

        task:this.newTask,
        when:this.newWhen,
        status:false

      })
      this.newTask = '',
      this.newWhen = ''

    },
    eliminateTask: function () {

      this.todos.splice(this.todos.indexOf(this.index),1)

    },
  	reveseMessage:function(){
  		this.message=this.message.split('').reverse().join('')
  	},
  	toggleStatus:function(task){
  		task.status=!task.status
  	}
  } ,
  watch:{
  	message: function(oldValue,newValue){
  		alert('El mensaje ha cambiado')
  	}
  },
  computed:{

  	duties: function(){
  		return _.filter(this.todos,function(value,key){
  			return !value.status
  		})
  	},

  	done: function(){
  		return _.filter(this.todos,function(value,key){
  			return value.status
  		})
  	}
  }
})