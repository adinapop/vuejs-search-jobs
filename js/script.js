Vue.config.devtools = true;

new Vue(
    {
        el: "#app",
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Microsoft® Windows',
                    position: 'Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '_1',
                    city: 'Roma, Lazio',
                    contract: 'Full-Time'
                },
                {
                    id: 2,
                    company: 'Randstad',
                    position: 'Senior Web Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '_2',
                    city: 'Bologna, Emilia-Romagna',
                    contract: 'Part-Time'
                },
                {
                    id: 3,
                    company: 'Google',
                    position: 'Junior Web Developer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '_3',
                    city: 'Milano, Lombardia',
                    contract: 'Full-Time'
                },
                {
                    id: 4,
                    company: 'Apple Inc.',
                    position: 'Graphic Design',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '_4',
                    city: 'Milano, Lombardia',
                    contract: 'Part-Time'
                },
                {
                    id: 5,
                    company: 'Lamborghini',
                    position: 'Software engineers',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '_5',
                    city: 'Milano, Lombardia',
                    contract: 'Full-Time'
                },
                {
                    id: 6,
                    company: 'HBO',
                    position: 'Web Designer',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '_6',
                    city: 'Roma, Lazio',
                    contract: 'Full-Time'
                },
            ],
            starred: [1, 4, 5],
            applied: [2],
            modalBox: false,
            currentJobBox: 0,
        },

        methods: {

            // function to get company logo
            getLogo: function(job) {
                return "./img/logo" + job.logo + ".jpg";
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
                    return "savedJob";
                } else {
                    return "unsavedJob";
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
                // this.removeFavorite();
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
                }, 2500);
            },

            // function to select this exact job 
            thisJob: function (index) {
                return this.currentJobBox = index;
            },
        }
    }
);