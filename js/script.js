Vue.config.devtools = true;

new Vue(
    {
        el: "#app",
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Perferendis',
                    position: 'Senior Web Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Perferendis',
                    position: 'Junior Web Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'Perferendis',
                    position: 'Graphic Design',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Perferendis',
                    position: 'Software engineers',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 6,
                    company: 'Perferendis',
                    position: 'Web Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo',
                    city: 'Roma',
                    contract: 'Full Time'
                },
            ],
            starred: [2, 4, 5],
            applied: [0, 3],
            modalBox: false         
        },

        methods: {

            // function to get company logo
            getLogo: function(job) {
                return "./img/" + job.logo + ".jpg";
            },

            // function to push the id's index inside the array starred
            addFavoriteJob: function(index) {
                if(!this.starred.includes(index)) {
                    this.starred.push(index);
                } 
            },

            // function to change the star's color
            colorStar: function(index) {
                if(this.starred.includes(index)) {
                    return "fullStar";
                } else {
                    return "emptyStar";
                }
            },

            // function to remove the id from the array starred list 
            // with indexOf I can found the id's index (which exactly is)
            // now it should remove even the already favorite checked
            removeFavorite: function(id) {
                let index = this.starred.indexOf(id);
                this.starred.splice(index, 1);
            },

            // function to apply when click button apply
            applyJob: function(index) {
                if(!this.applied.includes(index)) {
                    this.applied.push(index);
                }
                this.showUpApplied();
            },

            // function to pop-up a modal box after 1sec
            showUpApplied: function() {
                setTimeout(() => {
                   this.modalBox = true;  
                }, 500);
                this.closeModalBox();
            },

            // function to auto close the modal after 1sec
            closeModalBox: function() {
                setTimeout(() => {
                    this.modalBox = false;
                }, 1500);
            },

            receiveAnswer: function() {
                setTimeout(() => {
                    return this.contacts[this.currentUserIndex].messages.push(
                        {
                            date: this.getCurrentDateTime(), 
                            text: "Ok", 
                            status: "received"
                        }
                        );
                }, 2000)
            },
        }
    }
)