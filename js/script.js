console.log ('Vue on', Vue)

const {user, contacts} = data;

const app = Vue.createApp ({
    data(){
        return{
            user,
            contacts,
            currentId: null,
        }
    },

    computed:{
        currentContact() {
            return this.contacts.find(contact => contact.id === this.currentId);
        },
        currentChat(){
            return this.currentContact.messages;
        }
    },

    methods: {
        setCurrentId(id){
          this.currentId = id
        }
    }
})

app.mount('#root');


